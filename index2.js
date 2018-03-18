// https://shockoe.com/blog/creating-dynamic-web-pages-ejs/


const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000

const header = "header1.ejs"
const navbar = "nav1.ejs"
const footer = "footer.ejs"


/*
const router = express.Router()

app.use('/', routes)
*/


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

  /*

  router.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')


router.get('/', function(req, res, next) {
  res.render('pages/index3', {title: 'Router test' })
  })

module.exports=router

*/

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
