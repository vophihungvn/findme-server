let router = express.Router();

router.get('/', function(req, res, next) {
  return res.json({username: 'test', password: '123456'});
});


export default router;
