/**
 * Calculates the estimated reading time for a given text
 * @param {string} text - The article text content
 * @param {number} wordsPerMinute - Reading speed (default: 200 words per minute)
 * @returns {string} Formatted reading time (e.g., "5 min read")
 */
function calculateReadingTime(text, wordsPerMinute = 200) {
  const wordCount = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `~ ${minutes} min read`;
}
