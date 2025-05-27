// Optional future logic for user-agent or IP-based pre-check
module.exports = function isLikelyBot(userAgent) {
  const botPatterns = ['bot', 'crawl', 'spider', 'fetch', 'slurp', 'headless'];
  return botPatterns.some(p => userAgent.toLowerCase().includes(p));
};