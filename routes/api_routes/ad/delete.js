var models = require('grifter-models');
var Model = models.Ad;

module.exports = function(req, res){
  var identifier = req.params.identifier;
  if( identifier == null) {
    res.status(401).send("no 'identifier' provided provided")
  }else{
    deleteRecord(identifier, function  (results) {
      res.json(results);
    });
  }
}

function deleteRecord (identifier, cb) {
  Model.destroy({where:{adId:identifier}}).then(cb);
}
