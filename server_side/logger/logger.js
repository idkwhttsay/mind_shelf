const LOGGER_COLOR = process.env.LOGGER_COLOR;

const logRequest = (method, url, data) => {
  console.log(`${LOGGER_COLOR}[${method}] ${url}\x1b[0m`, data || "");
};

module.exports = {
  logRequest,
};
