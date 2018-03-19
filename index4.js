const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var index = 'pages/index4'
var header = "../partials/header2.ejs"
var nav = "../partials/nav5.ejs"
var footer = "../partials/footer1.ejs"

/*
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
*/
var pageData = {
  home: {
    title:'the home',
    content:'../contents/home.ejs', 
    nav: nav,
    header: header,
    footer: footer
  },
  about: {
    title:'the about',
    content:'../contents/about.ejs',
    nav: nav,
    header: header,
    footer: footer
  },
  products: {
    title:'the products',
    content:'../contents/products.ejs',
    nav: nav,
    header: header,
    footer: footer
  }
}

var app = express()
  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
/*
 app.get('/', (req, res) => res.render(index,homeData))
 app.get('/about', (req, res) => res.render(index,aboutData))
 app.get('/products', (req, res) => res.render(index,productsData))
*/
 app.get('/', (req, res) => res.render(index,pageData.home))
 app.get('/about', (req, res) => res.render(index,pageData.about))
 app.get('/products', (req, res) => res.render(index,pageData.products))

 app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
