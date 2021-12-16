var express = require('express');
// const ServicosController = require('../controllers/ServicosController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '' });
});

router.get('/contato', (req, res, next) =>{
  res.render('contato', { title: '' });
});

router.get('/login', (req,res, next)=>{
  res.render('login', { title: '' });
});

router.get('/about', (req,res, next)=>{
  res.render('about', { title: '' });
});

router.get('/faq', (req,res, next)=>{
  res.render('faq', { title: '' });
});

router.get('/cadastro', (req, res, next)=>{
  res.render('cadastro', { title:''});
});

router.get('/home', (req, res, next) =>{
  res.render('home', { title: '' });
});

router.get('/profile', (req, res, next) =>{
  res.render('profile', { title: ''});
});

router.get('/criar', (req, res, next) =>{
  res.render('criar', { title: ''});
});

router.get('/pagina-filme', (req, res, next) =>{
  res.render('pagina-filme', { title: ''});
})

router.get('/sua-lista', (req, res, next) =>{
  res.render('sua-lista', { title: ''});
});

router.get('/recomendacoes', (req, res, next) =>{
  res.render('recomendacoes', { title: ''});
});

router.get('/estatisticas', (req, res, next) =>{
  res.render('estatisticas', { title: ''});
})

module.exports = router;
