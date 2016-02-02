// use module exports to expose routes

var middleware =  {
  requireAuthentication: function(req, res, next){
    console.log('private route hit');
    next();
  },
  logger: function(req, res, next) {
    var dateStr = new Date().toString();
    console.log('Request: ' + dateStr + ' ' + req.method + ' ' + req.originalUrl);
    next();
  }
};

module.exports = middleware;
