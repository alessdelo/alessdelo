/*
12. GENERATORE DI UNA MONGODB COLLECTION (CON GEODATA)
11. INVIO DATI VIA POST DA FORM SEMPLICE (con Express app.post e bodyParser)
10. PROVA DI CONNESSIONE A MLab MONGODB TRAMITE MONGOOSE PACKAGE E INTERAZIONE CON DATABASE
https://www.youtube.com/watch?v=h4A0-53Olm4&list=PL55RiY5tL51oGJorjEgl6NVeDbx_fO5jR&index=18
https://github.com/mschwarzmueller/nodejs-basics-tutorial/blob/master/11-mongoose/routes/index.js
*/

const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const assert = require('assert')
const bodyParser = require('body-parser')


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
    params: 'empty'
  },
  postmongo: {
    title:'Write and Read data from MongoDB via POST',
    content:'../contents/postmongo.ejs',
    nav: nav,
    header: header,
    footer: footer,
    params: 'empty'
  },
 maps1: {
    title:'Google Maps API embedding test',
    content:'../contents/maps1.ejs',
    nav: nav,
    header: header,
    footer: footer,
    params: 'empty'
  },
 maps2: {
    title:'JS object generates random points in Google Maps area',
    content:'../contents/maps2.ejs',
    nav: nav,
    header: header,
    footer: footer,
    params: 'empty'
  },
 mapmongo: {
    title:'Google Maps markers with other random points',
    content:'../contents/mapmongo.ejs',
    nav: nav,
    header: header,
    footer: footer,
    params: 'empty'
  },
   mapmongo2: {
    title:'Google Maps random markers with infowindows from array',
    content:'../contents/mapmongo2.ejs',
    nav: nav,
    header: header,
    footer: footer,
    params: 'empty'
  },
	mapmongo3: {
    title:'Google Maps markers from MongoDB',
    content:'../contents/mapmongo3.ejs',
    nav: nav,
    header: header,
    footer: footer,
    params: []
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
 app.get('/maps1', (req, res) => res.render(index,pageData.maps1))
 app.get('/maps2', (req, res) => res.render(index,pageData.maps2))

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
// 10. INTERACTION EXPRESS - MLAB(MONGO DB)
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
// 11. SEND POST DATA VIA FORM (using app.post and bodyParser)

// Use bodyParser.urlencoded() middleware
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/postdata', function (req, res) {
 // res.send('POST request to the homepage')
 res.render(index,pageData.postdata)
})

 app.post('/postdata', showPostData)

function showPostData(req, res) {
 
// res.send(req.body)
 

  var item = {
      postAuthor: req.body.author,
      postTitle: req.body.title,
      postContent: req.body.content
  }
 
 pageData.postdata.params = item
 res.render(index,pageData.postdata)

}

// ----------------------------------
// 11. SEND AND RETRIEVE DATA TO MONGO VIA POST (FROM A FORM)

app.get('/postmongo', function (req, res) {
 res.render(index,pageData.postmongo)
})

app.post('/postmongo', postMongo)

function postMongo(req, res, next) {
    
   mongoose.connect(dbUri)

 
   var db = mongoose.connection
   db.on('error', function() {
      pageData.postmongo.params = {'error': 'connection problem!'}
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
           title: req.body.title,
           content: req.body.content,
           author: req.body.author
         };

         var data = new UserData(item)
         data.save()
    
       UserData.find({author:{ $regex:"o"} }, {title: true, _id: false})
         .then(function(doc) {
            pageData.postmongo.params = doc
           
         })
        
   })
 
 res.render(index,pageData.postmongo)
 
 } // fine postToMongo

// ----------------------------------
// 11. GEODATA GENERATOR FOR MONGODB COLLECTION

app.get('/mapmongo', function (req, res) {
 res.render(index,pageData.mapmongo)
})

app.get('/mapmongo2', function (req, res) {
 res.render(index,pageData.mapmongo2)
})

app.post('/mapmongo2', mapMongo)

function mapMongo(req, res, next) {
 
   mongoose.connect(dbUri)

   var db = mongoose.connection
   db.on('error', function() {
      pageData.mapmongo2.params = {'error': 'connection problem!'}
   })
 
   db.once('open', function() {
       
        var Schema = mongoose.Schema
	
	// Models
	var LocationSchema = new Schema({
		    name: String,
			time : { type : Date, default: Date.now },
		    loc: {
			type: {
			    type: String,
			    default: "Point"
			},
			coordinates: {
			    type: [Number]
			}
		    }   
	}, { collection: "maps1"})
	   
	LocationSchema.index({ loc: '2dsphere'});
	   
	var UserData = mongoose.model('UserData', LocationSchema) 
	
	var item = {
		"name": req.body.name,	
		"loc": {
                    "type": "Point",
                    "coordinates": [req.body.coordx, req.body.coordy]
                }
		
		}
	
	var data = new UserData(item);
         data.save()
	 
	   
        UserData.find()
         .then(function(doc) {
            pageData.mapmongo2.params = doc
           
         })
        
    }) // fine db.once    
   
  res.render(index,pageData.mapmongo2)
 
} // fine mapMongo

// ----------------------------------
// 12. MONGODB GEODATA FOR GOOGLE MAPS API

// var mapsStyle = require('/static/silver')		
// var mapsStyleRaw = fs.readFileSync('silver.json')
// var mapsStyle = JSON.parse(mapsStyleRaw)

app.get('/mapmongo3', function (req, res) {
 res.render(index,pageData.mapmongo3)
})

app.post('/mapmongo3', mapMongo3)

function mapMongo3(req, res, next) {
 
   mongoose.connect(dbUri)

   var db = mongoose.connection
   db.on('error', function() {
      pageData.mapmongo3.params = {'error': 'connection problem!'}
   })
 
   db.once('open', function() {
       
        var Schema = mongoose.Schema
	
	// Models
	var LocationSchema = new Schema({
		    name: String,
			time : { type : Date, default: Date.now },
		    loc: {
			type: {
			    type: String,
			    default: "Point"
			},
			coordinates: {
			    type: [Number]
			}
		    }   
	}, { collection: "maps1"})
	   
	LocationSchema.index({ loc: '2dsphere'});
	   
	var UserData = mongoose.model('UserData', LocationSchema) 
	
	var item = {
		"name": req.body.name,	
		"loc": {
                    "type": "Point",
                    "coordinates": [req.body.coordx, req.body.coordy]
                }
		
		}
	
	var data = new UserData(item);
         data.save()
	 
	   UserData.find()
         .then(function(doc) {
            pageData.mapmongo3.params[0] = doc
		   
		 
		
		 // pageData.mapmongo3.params[1] = mapsStyle
		  // pageData.mapmongo3.params[1] = {"testJSON": "blabla"}
		    pageData.mapmongo3.params[1] = myJson
           
         })
        
    }) // fine db.once    
   
  res.render(index,pageData.mapmongo3)
 
} // fine mapMongo3





// ----------------------------------
// ----------------------------------
// ----------------------------------

 app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
