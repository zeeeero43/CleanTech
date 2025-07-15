import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  ogSiteName?: string;
  twitterCard?: string;
  robots?: string;
  author?: string;
  language?: string;
  schemaData?: object;
}

export function SEO({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogType = "website",
  ogImage = "/images/silberreh-logo.png",
  ogSiteName = "SILBERREH GmbH - Professionelle Reinigungsdienstleistungen",
  twitterCard = "summary_large_image",
  robots = "index, follow",
  author = "SILBERREH GmbH",
  language = "de-DE",
  schemaData
}: SEOProps) {
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

    // Set robots meta tag
    const robotsTag = document.querySelector('meta[name="robots"]');
    if (robotsTag) {
      robotsTag.setAttribute('content', robots);
    } else {
      const newRobotsTag = document.createElement('meta');
      newRobotsTag.name = 'robots';
      newRobotsTag.content = robots;
      document.head.appendChild(newRobotsTag);
    }

    // Set author meta tag
    const authorTag = document.querySelector('meta[name="author"]');
    if (authorTag) {
      authorTag.setAttribute('content', author);
    } else {
      const newAuthorTag = document.createElement('meta');
      newAuthorTag.name = 'author';
      newAuthorTag.content = author;
      document.head.appendChild(newAuthorTag);
    }

    // Set language meta tag
    document.documentElement.lang = language;

    // Set Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: ogType },
      { property: 'og:image', content: ogImage },
      { property: 'og:site_name', content: ogSiteName },
      { property: 'og:url', content: canonical || window.location.href },
      { property: 'og:locale', content: language }
    ];

    ogTags.forEach(tag => {
      if (tag.content) {
        const existingTag = document.querySelector(`meta[property="${tag.property}"]`);
        if (existingTag) {
          existingTag.setAttribute('content', tag.content);
        } else {
          const newTag = document.createElement('meta');
          newTag.setAttribute('property', tag.property);
          newTag.setAttribute('content', tag.content);
          document.head.appendChild(newTag);
        }
      }
    });

    // Set Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: twitterCard },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage }
    ];

    twitterTags.forEach(tag => {
      if (tag.content) {
        const existingTag = document.querySelector(`meta[name="${tag.name}"]`);
        if (existingTag) {
          existingTag.setAttribute('content', tag.content);
        } else {
          const newTag = document.createElement('meta');
          newTag.name = tag.name;
          newTag.content = tag.content;
          document.head.appendChild(newTag);
        }
      }
    });

    // Set viewport meta tag for mobile optimization
    const viewportTag = document.querySelector('meta[name="viewport"]');
    if (!viewportTag) {
      const newViewportTag = document.createElement('meta');
      newViewportTag.name = 'viewport';
      newViewportTag.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(newViewportTag);
    }

    // Add structured data (JSON-LD)
    if (schemaData) {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.textContent = JSON.stringify(schemaData);
      } else {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schemaData);
        document.head.appendChild(script);
      }
    }

    // Add preconnect links for performance
    const preconnectLinks = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    preconnectLinks.forEach(href => {
      const existingLink = document.querySelector(`link[href="${href}"]`);
      if (!existingLink) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = href;
        if (href.includes('gstatic')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      }
    });

  }, [title, description, keywords, canonical, ogType, ogImage, ogSiteName, twitterCard, robots, author, language, schemaData]);

  return null;
}
