module.exports = (function() {
  return function(appToken, host = 'converse.ai') {
    var client = require('converseai-plugindata')(host);
    var oldLog    = console.log;
    var oldError  = console.error;

    function grpcLog(type, exitOnReturn = false, ...args) {
      if (client !== undefined && client !== null) {
        try {
          client.addLog({
            appToken: appToken,
            logRecord: {
              logType: type,
              timestamp: Date.now(),
              message: JSON.stringify(args)
            }
          }, (error, response)=> {
            if (error) {
              console.warn('GRPC client error.', error);
            }
            if (exitOnReturn) {
              process.exit(1);
            }
          });
        } catch (e) {
          oldError(e);
        }
      } else {
        console.warn('GRPC client is not connected.');
      }
    }

    console.log = function(...args) {
      oldLog(...args);
      grpcLog('INFO', false, ...args);
    };

    console.error = function(...args) {
      oldError(...args);
      grpcLog('ERROR', false, ...args);
    };

    process.on("uncaughtException", function(err){
      oldError('ERROR', true, '\n' + err.stack);
      grpcLog('ERROR', true, '\n' + err.stack);
    })
  };
})();
