const logRequest = (method, url, data) => {
  console.log(`\x1b[33m[${method}] ${url}\x1b[0m`, data || "");
};

module.exports = {
  logRequest,
};
