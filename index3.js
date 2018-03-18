// https://shockoe.com/blog/creating-dynamic-web-pages-ejs/

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var index = 'pages/index4'
var header = "../partials/header2.ejs"
var nav = "../partials/nav5.ejs"
var footer = "../partials/footer1.ejs"


var indexData = {
  title:'page two',
  content:'bla2 bla2...',
  testfile:'testfile.ejs', 
  nav: nav,
  header: header,
  footer: footer
}

var homeData = {
  title:'home',
  content:'../contents/home.ejs', 
  nav: nav,
  header: header,
  footer: footer
}

var aboutData = {
  title:'about',
  content:'../contents/about.ejs',
  nav: nav,
  header: header,
  footer: footer
}

var productsData = {
  title:'products',
  content:'../contents/products.ejs',
  nav: nav,
  header: header,
  footer: footer
}

/*
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
 .get('/', (req, res) => res.render('pages/index3',indexData))
    .get('/pag2', (req, res) => res.render('pages/pag2'))
    .get('/pag3', (req, res) => res.render('pages/pag3'))
    .get('/pag4', (req, res) => res.render('pages/pag4'))
    .get('/pag5', (req, res) => res.render('pages/pag5'))
.post('bla', (req, res) => res.render('pages/post'))
*/



var pageData = {
  home: {
    title:'home',
    content:'this is the home page...',
    nav: nav,
    header: header,
    footer: footer
  },
  about: {
    title:'about',
    content:'this is the page about....',
    nav: nav,
    header: header,
    footer: footer
  }
}


/*
var pageRowData = require('./pageData')

var pageJsonData = JSON.parse(pageRowData)
*/

var app = express()
  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
 app.get('/', (req, res) => res.render('pages/index3',indexData))

 // app.get('/', (req, res) => res.render('pages/index3',indexData))

 app.get('/', (req, res) => res.render(index,homeData))
// app.get('/home', (req, res) => res.render('pages/index3',homeData))
 app.get('/about', (req, res) => res.render(index,aboutData))
 app.get('/products', (req, res) => res.render(index,productsData))





  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

