const { WriteStream } = require("node:fs");
const path = require("node:path");
const { transports, format } = require("winston");
const { logger } = require("express-winston");

const logsFilepath = path.join("..", ".log");

const logToConsole = ({ message, level, timestamp, meta }) => {
  return [timestamp, level, meta.res.statusCode, message].join(" ");
};

const loggerMiddleware = logger({
  transports: [
    new transports.Console({
      format: format.combine(
        format.timestamp(),
        format.colorize(),
        format.printf(logToConsole)
      ),
    }),
    new transports.Stream({
      stream: WriteStream(logsFilepath),
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

module.exports = loggerMiddleware;
