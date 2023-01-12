const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

module.exports.logger = winston.createLogger({
    format: winston.format.json(),
    level: 'http',
    transports: [
        new winston.transports.Console({}),
        new DailyRotateFile({
            filename: 'logs/v1/app-%DATE%.log',
            zippedArchive: true,
            maxSize: '1m',
            maxFiles: '14d'
        }),
        new DailyRotateFile({
            filename: 'logs/v1/handlings-app-%DATE%.log',
            zippedArchive: true,
            maxSize: '1m',
            maxFiles: '14d',
            handleExceptions: true,
            handleRejections: true
        }),
    ]
});
