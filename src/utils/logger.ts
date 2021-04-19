import * as winston from 'winston';
import * as util from "util";

export default winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  // defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize(),
        winston.format.printf(({level, timestamp, message}) => `${timestamp} ${level}: ${coerceMessage(message)}`),
      )
    })
  ]
});

function coerceMessage(message: any): string {
  return typeof message === 'string' ? message : util.inspect(message);
}
