var router = express.Router();

router.get('/', function(req, res, next) {
  return res.json({username: 'test', password: '123456'});
});


module.exports = router;
