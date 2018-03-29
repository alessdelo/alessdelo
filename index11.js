/*
PROVA DI CONNESSIONE A MLab MONGODB TRAMITE MONGOOSE PACKAGE E INTERAZIONE CON DATABASE
https://www.youtube.com/watch?v=h4A0-53Olm4&list=PL55RiY5tL51oGJorjEgl6NVeDbx_fO5jR&index=18
https://github.com/mschwarzmueller/nodejs-basics-tutorial/blob/master/11-mongoose/routes/index.js
*/

const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const assert = require('assert')

const PORT = process.env.PORT || 5000

var dbUri = process.env.MONGODB_URI


 var mongoMsg ='boh'


 // -------------------------------------------------

var fs = require('fs')


var index = 'pages/index5'
var header = "../partials/header2.ejs"
var nav = "../partials/nav7.ejs"
var footer = "../partials/footer1.ejs"

var myJsonRaw = fs.readFileSync('myJson.json');
var myJson = JSON.parse(myJsonRaw)
/*
var myJson = {
  hellen: 20,
  lisa: -2,
  judy: 6,
  sharon: -5
  }
 */


var pageData = {
  home: {
    title: mongoMsg,
    content:'../contents/home.ejs', 
    nav: nav,
    header: header,
    footer: footer,
    params: myJson
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
    title:'show JSON',
    content:'../contents/showjson.ejs',
    nav: nav,
    header: header,
    footer: footer,
    params: myJson
  },
  addperson: {
    title:'Add Person',
    content:'../contents/addperson.ejs',
    nav: nav,
    header: header,
    footer: footer,
    params: myJson
  },
 postdata: {
    title:'Sending data via POST from a form',
    content:'../contents/postdata.ejs',
    nav: nav,
    header: header,
    footer: footer,
    params: 'empty'
  },
 mongo1: {
    title:'Mongo Test n.1',
    content:'../contents/mongo1.ejs',
    nav: nav,
    header: header,
    footer: footer,
    params: 'coso'
  }
  
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
 app.get('/addperson', (req, res) => res.render(index,pageData.addperson))
 app.get('/mongo1', (req, res) => res.render(index,pageData.mongo1))

 app.get('/search/:word', sendWord)
    function sendWord(req, res) {
      var data = req.params
     
      pageData.search.datum = data.word
      // res.send('your word is: ' + data.word)
       res.render(index,pageData.search)
    }

// ---------------------------------

 app.get('/addperson/:name/:rate', addPerson)
function addPerson(req, res) {
  var data = req.params
  var name = data.name
  var rate = data.rate
  
  myJson[name] = rate
  
  fs.writeFile('myJson.json', myJson, written)
  
  function written() {}
  
  res.render(index,pageData.addperson)
  
  }

// ---------------------------------


 app.get('/showjson', sendJson)

function sendJson (req, res) {
   res.render(index,pageData.showjson)
  // res.send(myJson)
  }

// ---------------------------------

// took inspitation by:
// https://youtu.be/ZKwrOXl5TDI
// https://github.com/mschwarzmueller/nodejs-basics-tutorial/blob/master/09-mongodb/routes/index.js

 app.get('/mongo1/:author/:content/:title', insertToMongo)

function insertToMongo(req, res, next) {
 
       var data = req.params
       var theAuthor= data.author
       var theContent = data.content
       var theTitle = data.title
    
   mongoose.connect(dbUri)

 
   var db = mongoose.connection
   db.on('error', function() {
      pageData.mongo1.params = {'error': 'connection problem!'}
   })
        
   db.once('open', function() {
       
        var Schema = mongoose.Schema
        
        var userDataSchema = new Schema({
             title: {type: String, required: true},
             content: String,
             author: String
        }, {collection: 'test2'})

        var UserData = mongoose.model('UserData', userDataSchema);
    
        var item = {
           title: theTitle,
           content: theContent,
           author: theAuthor
         };

         var data = new UserData(item);
         data.save();
    
       UserData.find()
         .then(function(doc) {
            pageData.mongo1.params = doc
           
         })
        
   })
 
 res.render(index,pageData.mongo1)
 
 } // fine insertToMongo

// ----------------------------------
// send post data from a form

app.post('/postdata', function (req, res) {
  res.send('POST request to the homepage')
})
/*
 app.post('/postdata', showPostData)

function showPostData(req, res) {
 
 res.send('POST request to the homepage')
 
 var postAuthor = req.body.author
 var postTitle = req.body.title
 var postContent = req.body.content
 
 pageData.postdata.params = {'postAuthor': postAuthor, 'postTitle': postTitle, 'postContent': postContent}
 
}
*/
// ----------------------------------
// ----------------------------------
// ----------------------------------

 app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
