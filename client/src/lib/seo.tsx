import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export function SEO({ title, description, keywords, canonical }: SEOProps) {
  useEffect(() => {
    // Set page title
    if (title) {
      document.title = title;
    }

    // Set meta description
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        const newMetaDescription = document.createElement('meta');
        newMetaDescription.name = 'description';
        newMetaDescription.content = description;
        document.head.appendChild(newMetaDescription);
      }
    }

    // Set meta keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const newMetaKeywords = document.createElement('meta');
        newMetaKeywords.name = 'keywords';
        newMetaKeywords.content = keywords;
        document.head.appendChild(newMetaKeywords);
      }
    }

    // Set canonical URL
    if (canonical) {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical);
      } else {
        const newCanonicalLink = document.createElement('link');
        newCanonicalLink.rel = 'canonical';
        newCanonicalLink.href = canonical;
        document.head.appendChild(newCanonicalLink);
      }
    }
  }, [title, description, keywords, canonical]);

  return null;
}
