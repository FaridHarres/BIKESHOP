var express = require('express');
var router = express.Router();

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

var dataCardBike = [
 
]




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {dataBike});
});


var totalCmd = 0
router.get('/shop', function(req, res, next) {
  //console.log(req.query)
  dataCardBike.push(req.query)
  totalCmd = 0
  for (var val of dataCardBike){ 

    totalCmd = totalCmd  + (val.prix *val.quantity)
   } 
  res.render('shop', {dataCardBike, totalCmd});
});


var totalCmd = 0
router.get('/delete', function(req, res, next) {
  //console.log("query", req.query)
      dataCardBike.splice(req.query.index, 1)
      totalCmd = 0
      for (var val of dataCardBike){  
        totalCmd = totalCmd  + (val.prix * val.quantity)
        //console.log(totalCmd)
      } 

  res.render('shop', {dataCardBike, totalCmd});
});




//ajout de la quantité

router.post('/update-shop', function(req, res, next) {
  console.log("ajout",req.body.quantity)
  let indexQte = req.body.index 
    dataCardBike[indexQte].quantity = req.body.quantity
    totalCmd=0
    for(var i=0; i<dataCardBike.length; i++){
      totalCmd += (dataCardBike[i].quantity * dataCardBike[i].prix)

    }



  
  res.render('shop', {dataCardBike, totalCmd});
});

module.exports = router;
