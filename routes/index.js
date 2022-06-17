var express = require('express');
var router = express.Router();
var session = require('express-session')


var dataBike=[
  {
    id : 1,
    image: "/images/bike-1.jpg",
    nom: "BIKE 045",
    prix : 679,
    quantity: 1 
  },
  {
    id : 2,
    image: "/images/bike-2.jpg",
    nom: "ZOOK O7",
    prix : 799,
    quantity: 1 
  },
  {
    id : 3,
    image: "/images/bike-3.jpg",
    nom: "LIKO 89",
    prix : 679,
    quantity: 1 
  },
  {
    id : 4,
    image: "/images/bike-4.jpg",
    nom: "GEW08",
    prix : 1249,
    quantity: 1 
  },
  {
    id : 5,
    image: "/images/bike-5.jpg",
    nom: "KIWIT",
    prix : 899,
    quantity: 1 
  },
  {
    id : 6,
    image: "/images/bike-6.jpg",
    nom: "NASAY",
    prix : 1399,
    quantity: 1 
  },
  
]





/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("premiere session",req.session.dataCardBike)
//initialisation du panier
  if(req.session.dataCardBike == undefined){
    req.session.dataCardBike= []
    req.session.totalPanier = 0

  }

  console.log("panier /",req.session.dataCardBike)
  res.render('index', {dataBike,});
});






router.get('/shop', function(req, res, next) {
  //afin de voir si lelement est présent dans le panier

  var product =req.session.dataCardBike.findIndex(produit => produit.name === req.query.name)
    if(product !== -1){
      req.session.dataCardBike[product].quantity ++

    }else{
      req.session.dataCardBike.push(req.query) 
    }
    
//console.log("paniiiieeeer", req.session.dataCardBike)
  req.session.totalPanier += (parseInt(req.query.prix) * parseInt(req.query.quantity))
  console.log("total panier ",req.session.totalPanier)
  console.log("panier ",req.session.dataCardBike)

 
  res.render('shop', {dataCardBike: req.session.dataCardBike, totalCmd: req.session.totalPanier});
});


//route pour voir la page panier
router.get('/panier', function(req, res, next) {
  res.render('shop', {dataCardBike: req.session.dataCardBike, totalCmd: req.session.totalPanier});
});





router.get('/delete', function(req, res, next) {
  //console.log("query", req.query)
  req.session.dataCardBike.splice(req.query.index, 1)
      
      for (var val of req.session.dataCardBike){  
        req.session.totalPanier = req.session.totalPanier  + (val.prix * val.quantity)
        //console.log(totalCmd)
      } 

  res.render('shop', {dataCardBike: req.session.dataCardBike, totalCmd : req.session.totalPanier});
});




//ajout de la quantité

router.post('/update-shop', function(req, res, next) {
  console.log("ajout",req.body.quantity)
  let indexQte = req.body.index 
  req.session.dataCardBike[indexQte].quantity = req.body.quantity
    totalCmd=0
    for(var i=0; i<req.session.dataCardBike.length; i++){
      totalCmd += (req.session.dataCardBike[i].quantity * req.session.dataCardBike[i].prix)

    }



  
  res.render('shop', {dataCardBike: req.session.dataCardBike, totalCmd});
});

module.exports = router;
