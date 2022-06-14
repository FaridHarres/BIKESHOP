var express = require('express');
var router = express.Router();

var dataBike=[
  {
    id : 1,
    image: "/images/bike-1.jpg",
    nom: "BIKE 045",
    prix : 679,
    quantity: 0 
  },
  {
    id : 2,
    image: "/images/bike-2.jpg",
    nom: "ZOOK O7",
    prix : 799,
    quantity: 0   
  },
  {
    id : 3,
    image: "/images/bike-3.jpg",
    nom: "LIKO 89",
    prix : 679,
    quantity: 0   
  },
  {
    id : 4,
    image: "/images/bike-4.jpg",
    nom: "GEW08",
    prix : 1249,
    quantity: 0   
  },
  {
    id : 5,
    image: "/images/bike-5.jpg",
    nom: "KIWIT",
    prix : 899,
    quantity: 0   
  },
  {
    id : 6,
    image: "/images/bike-6.jpg",
    nom: "NASAY",
    prix : 1399,
    quantity: 0   
  },
  
]

var dataCardBike = [
  {
    image: "/images/bike-1.jpg",
    nom: "BIKE 045",
    prix : 679,
    quantity: 1 
  },
  {
    image: "/images/bike-2.jpg",
    nom: "ZOOK O7",
    prix : 799,
    quantity: 3   
  },
  {
    image: "/images/bike-3.jpg",
    nom: "LIKO 89",
    prix : 679,
    quantity: 1   
  },
  {
    image: "/images/bike-4.jpg",
    nom: "GEW08",
    prix : 1249,
    quantity: 1   
  },
  {
    image: "/images/bike-5.jpg",
    nom: "KIWIT",
    prix : 899,
    quantity: 1   
  },
  {
    image: "/images/bike-6.jpg",
    nom: "NASAY",
    prix : 1399,
    quantity: 1   
  },
 
]

var totalCmd = 0
for (var i=0; i<dataCardBike.length; i++){  
  totalCmd += (dataCardBike[i].prix * dataCardBike[i].quantity)
  
 } 

 console.log(totalCmd)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {dataBike});
});



router.get('/shop', function(req, res, next) {
  res.render('shop', {dataCardBike, totalCmd});
});

module.exports = router;
