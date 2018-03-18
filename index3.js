// https://shockoe.com/blog/creating-dynamic-web-pages-ejs/

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var nav = "../partials/nav4.ejs"



express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
 .get('/', (req, res) => res.render('pages/index3', {title:'page two', content:'bla2 bla2...', testfile:'testfile.ejs', nav: nav}))
    .get('/pag2', (req, res) => res.render('pages/pag2'))
    .get('/pag3', (req, res) => res.render('pages/pag3'))
    .get('/pag4', (req, res) => res.render('pages/pag4'))
    .get('/pag5', (req, res) => res.render('pages/pag5'))
.post('bla', (req, res) => res.render('pages/post'))


  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

