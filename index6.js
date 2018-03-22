const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var index = 'pages/index4'
var header = "../partials/header2.ejs"
var nav = "../partials/nav7.ejs"
var footer = "../partials/footer1.ejs"

var myJson = {
  hellen: 20,
  lisa: -2,
  judy: 6,
  sharon: -5
  }


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
  form1: {
    title:'form 1',
    content:'../contents/form1.ejs',
    nav: nav,
    header: header,
    footer: footer
  },
  form2: {
    title:'form 2',
    content:'../contents/form2.ejs',
    nav: nav,
    header: header,
    footer: footer
  },
  search: {
    title:'search',
    content:'../contents/search.ejs',
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
  },
  showjson: {
    title:'the products',
    content:'../contents/showjson.ejs',
    nav: nav,
    header: header,
    footer: footer,
    theJson: myJson
  },
  
}


var app = express()
  // app.use(express.static(path.join(__dirname, 'public')))
  app.use('/static', express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')

 app.get('/', (req, res) => res.render(index,pageData.home))
 // app.get('/about', (req, res) => res.render(index,pageData.about))
 app.get('/products', (req, res) => res.render(index,pageData.products))
 app.get('/gallery1', (req, res) => res.render(index,pageData.gallery1))
 app.get('/gallery2', (req, res) => res.render(index,pageData.gallery2))
 app.get('/form1', (req, res) => res.render(index,pageData.form1))

 app.get('/search/:word', sendWord)
    function sendWord(req, res) {
      var data = req.params
     
      pageData.search.datum = data.word
      // res.send('your word is: ' + data.word)
       res.render(index,pageData.search)
    }

// ---------------------------------



 app.get('/showjson', sendJson)

function sendJson (req, res) {
   res.render(index,pageData.search)
  // res.send(myJson)
  }

// ---------------------------------

 app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
