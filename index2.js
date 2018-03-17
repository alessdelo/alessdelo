// https://shockoe.com/blog/creating-dynamic-web-pages-ejs/


const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const router = express.Router()

const header = "header1.ejs"
const navbar = "nav1.ejs"
const footer = "footer.ejs"



/*
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  
  .get('/', (req, res) => res.render('pages/index2'))
    .get('/pag2', (req, res) => res.render('pages/pag2'))
    .get('/pag3', (req, res) => res.render('pages/pag3'))
    .get('/pag4', (req, res) => res.render('pages/pag4'))
    .get('/pag5', (req, res) => res.render('pages/pag5'))
.post('bla', (req, res) => res.render('pages/post'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  */

  router.use(express.static(path.join(__dirname, 'public')))
  router.set('views', path.join(__dirname, 'views'))
  router.set('view engine', 'ejs')


router.get('/', function(req, res, next) {
  res.render('pages/index3', {title: 'Router test' })
  })

module.exports=router
