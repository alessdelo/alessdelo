const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var index = 'pages/index4'
var header = "../partials/header2.ejs"
var nav = "../partials/nav6.ejs"
var footer = "../partials/footer1.ejs"

var pageData = {
  home: {
    title:'the home',
    content:'../contents/home.ejs', 
    nav: nav,
    header: header,
    footer: footer
  },
  gallery1: {
    title:'gallery 1',
    content:'../contents/gallery1.ejs',
    nav: nav,
    header: header,
    footer: footer
  },
  gallery2: {
    title:'gallery 2',
    content:'../contents/gallery2.ejs',
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

 app.get('/', (req, res) => res.render(index,pageData.home))
 // app.get('/about', (req, res) => res.render(index,pageData.about))
 app.get('/products', (req, res) => res.render(index,pageData.products))
 app.get('/gallery1', (req, res) => res.render(index,pageData.gallery1))
 app.get('/gallery2', (req, res) => res.render(index,pageData.gallery2))

 app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
