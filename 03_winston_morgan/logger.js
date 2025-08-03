import { createLogger, format, transports } from "winston";
// format --> tools to format logs
// transport --> where file should go

const { combine, timestamp, colorize, json } = format;
// combine --> combining all formating logs

const consoleLogFormat = format.combine(
  format.colorize(),
  format.printf(({ level, message, timestamp }) => {
    return `${level}:${message}`;
    // level --> warning Log or info. Log
  })
);

// Creating a winston Logger

const logger = createLogger({
  level: "info",
  format: combine(colorize(), timestamp(), json()),
  transports: [
    new transports.Console({
      // format should be in  consoleLogFormat 
      format: consoleLogFormat,
    }),
    // it transports all the logs to app.log file
    new transports.File({ filename: "app.log" }),
    // logs are saved in file app.log
  ],
});

export default logger;
