const express = require('express')
const path = require('path')
const mongo= require('mongodb')
const assert = require('assert')

const PORT = process.env.PORT || 5000

var dbUri = process.env.MONGOLAB_URI




 var mongoMsg ='boh'
/*
mongoose.connect(process.env.MONGOLAB_URI, function (error) {
   
   if(error) mongoMsg = error
   else mongoMsg ='mongo connected'
 // mongoMsg = error
  
  })
  
  */
/*
mongoose.connect(process.env.MONGOLAB_URI)
// var uri = 'mongodb://admin:PWD4Admin@ds221339.mlab.com:21339/delotest10'
// mongoose.connect('cosa')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo connected')
  mongoMsg ='mongo connected'
});
*/
 




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
 // app.get('/mongo1', (req, res) => res.render(index,pageData.mongo1))

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
app.get('/mongo1', insertToMongo)

function insertToMongo(req, res, next) {
 
    var resultArray = ''
 
    // var cursor = {1: 'cane', 2: 'gatto', 3:'topo'}
 
    resultArray = {1: 'cane', 2: 'gatto', 3:'topo'}
    
    pageData.mongo1.params = resultArray
 
    res.render(index,pageData.mongo1)
 
 }
    
  /*  
 mongo.connect(dbUri, function(err, db) {
     
     assert.equal(null, err)
      
     
     // var cursor = db.collection('test1').find()
     
      resultArray = {1: 'pippo', 2: 'pluto', 3:'ernesto'}
     
     
     
    }),
     
    function() {
          db.close()
         pageData.mongo1.params = resultArray
 
         res.render(index,pageData.mongo1)
    }
    
    
 
}
*/

// ---------------------------------
/*
app.get('/mongo1', insertToMongo)
           
           
function insertToMongo(req, res, next) {

    var resultArray = [];
    
    mongo.connect(dbUri, function(err, db) {
    
      assert.equal(null, err)
      
      var cursor = db.collection('test1').find()
      
      cursor.forEach(function(doc, err) {
        assert.equal(null, err)
         resultArray.push(doc)
        pageData.mongo1.params = resultArray
      }, function() {
          db.close()
          res.render(index,pageData.mongo1)
          }
      )
   })
 }
*/

// ----------------------------------

 app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
