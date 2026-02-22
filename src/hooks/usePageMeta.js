import { useEffect } from "react";

/**
 * Hook to manage page meta tags, title, and structured data
 * @param {Object} config - Configuration object
 * @param {string} config.title - Page title
 * @param {string} config.description - Meta description
 * @param {string} config.keywords - Meta keywords
 * @param {string} config.ogTitle - Open Graph title
 * @param {string} config.ogDescription - Open Graph description
 * @param {string} config.ogImage - Open Graph image URL
 * @param {string} config.ogUrl - Open Graph URL
 * @param {string} config.canonicalUrl - Canonical URL
 * @param {Object} config.structuredData - JSON-LD structured data
 */
export function usePageMeta({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  canonicalUrl,
  structuredData,
}) {
  useEffect(() => {
    // Set document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || "";

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords || "";

    // Update Open Graph tags
    updateMetaTag("og:title", ogTitle || title || "");
    updateMetaTag("og:description", ogDescription || description || "");
    updateMetaTag("og:image", ogImage || "");
    updateMetaTag("og:url", ogUrl || "");

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical && canonicalUrl) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    if (canonical && canonicalUrl) {
      canonical.href = canonicalUrl;
    }

    // Update structured data
    if (structuredData) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData);
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, canonicalUrl, structuredData]);
}

/**
 * Helper function to update or create meta tags
 */
function updateMetaTag(property, content) {
  if (!content) return;
  
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.content = content;
}
