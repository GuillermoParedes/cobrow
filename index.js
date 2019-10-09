const logger = require('./src/console')({
  DATE: true,
});

logger.log('esto es un log');

logger.info('esto es un info');
logger.error('esto es un error');
logger.warn('esto es un warn');
