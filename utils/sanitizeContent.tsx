import DOMPurify from "isomorphic-dompurify";

export const sanitizeContent = (content: string): string => {
  const purifiedHtml = DOMPurify.sanitize(content, {
    ALLOWED_TAGS: ['p', 'b', 'i', 'br', 'a'],
    ALLOWED_ATTR: ['href', 'target', 'rel'] // Allow href, target, and rel attributes for <a> tags
  });

  return purifiedHtml;
};