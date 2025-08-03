import { createLogger, format, transports } from "winston";

const { combine, timestamp, colorize, json } = format;

const consoleLogformat = format.combine(
  format.colorize(),
  format.printf(({ level, message, timestamp }) => {
    return `${level}:${message}`;
  })
);

const Logger = createLogger({
  level: "info",
  format: combine(colorize(), timestamp(), json()),
  transports: [
    new transports.Console({
      format: consoleLogFormat,
    }),
    new transports.File({ filename: "app.log" }),
  ],
});

export default logger;
