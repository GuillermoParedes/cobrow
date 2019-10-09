const CURRENT = require('./utils').CURRENT;
const Observable = require('./observable').Observable;
const observable = new Observable();
const CONFIG = {
  DEBUG: true,
  DATE: true,
};

module.exports = function(config) {
  const _config = {
    ...CONFIG,
    ...config,
  };
  const ole = console;
  const _log = console.log;
  const _info = console.info;
  const _error = console.error;
  const _warn = console.warn;

  log = (...arguments) => {
    if (_config.DEBUG) {
      args = Array.prototype.slice.call(arguments);
      if (_config.DATE) {
        args.unshift(
          CURRENT + '/' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds() + ': ',
        );
      }
      _log.apply(ole, args);
    }
  };

  info = (...arguments) => {
    if (_config.DEBUG) {
      args = Array.prototype.slice.call(arguments);
      if (_config.DATE) {
        args.unshift(
          CURRENT + '/' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds() + ': ',
        );
      }
      _info.apply(ole, args);
    }
  };

  error = (...arguments) => {
    if (_config.DEBUG) {
      args = Array.prototype.slice.call(arguments);
      if (_config.DATE) {
        args.unshift(
          CURRENT + '/' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds() + ': ',
        );
      }
      _error.apply(ole, args);
    }
  };

  warn = (...arguments) => {
    if (_config.DEBUG) {
      args = Array.prototype.slice.call(arguments);
      if (_config.DATE) {
        args.unshift(
          CURRENT + '/' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds() + ': ',
        );
      }
      _warn.apply(ole, args);
    }
  };

  observable.subscribe(log);
  return {
    log,
    error,
    warn,
    info,
  };
};
