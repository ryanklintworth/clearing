// CONTROLLERS FILE SETUP
//————7 restful routes————

// =======================
//      DEPENDENCIES
// =======================
const express = require('express');
const router = express.Router();
const Item = require('../models/item_schema.js');
// =======================
//  	    ROUTES
// =======================

// =======================
//    	   SEED
// =======================
router.get('/seed', (req, res) => {
  Item.create(
    [
      {
        name:'Old Fashioned',
        img:'https://static.vinepair.com/wp-content/uploads/2018/03/Old-Fashioned-Recipe-card.jpg',
        price:3,
        description:'The Old Fashioned is one of the oldest cocktails, developed during the 19th century. Originally, an "old fashioned" cocktail was a standard cocktail created by combining spirits, bitters, water, and sugar. ',
        qty:3
      },
      {
        name:'Daiquiri',
        img:'https://static.vinepair.com/wp-content/uploads/2016/03/daiquiri-card.jpg',
        price:3,
        description:'When it comes to the Daiquiri, you need to set aside your preconceptions about sickly-sweet slushy concoctions. ',
        qty:3
      },
      {
        name:'Negroni',
        img:'https://static.vinepair.com/wp-content/uploads/2016/03/negroni-card.jpg',
        price:3,
        description:'The Negroni is a world-famous Italian aperitivo created in Florence, Italy in 1919. The cocktail traditionally mixes gin, sweet vermouth, and the iconic Italian red bitter Campari, though the use of other bitters is a source of debate. As the story goes, the drink was invented after Count Camillo Negroni requested an Americano with more kick while imbibing at the city’s Caffe Giacosa. The resulting cocktail, which included gin, was named in honor of the Count. The Negroni is often served before a meal in order to stimulate the appetite, but is versatile enough to be enjoyed at any time. ',
        qty:3
      },
      {
        name:'Manhattan',
        img:'https://static.vinepair.com/wp-content/uploads/2018/03/Manhattan-Recipe-card.jpg',
        price:3,
        description:'Legend has it that the Manhattan originated in New York City, sometime in the 1870s, mixed together in honor of hometown presidential candidate Samuel J. Tilden. ',
        qty:3
      }
    ],
    (error, data) => {
      res.redirect('/')
    }
  )
})

// =======================
//    	   GET
// =======================
router.get('/', (req, res) => {
  Item.find({}, (error, allItems) => {
    res.render(
      'index.ejs',
      {
        items: allItems
      }
    )
  })
})



// =======================
//     		 SHOW
// =======================
router.get('/:id', (req, res) => {
  Item.findById(req.params.id, (error, foundItem) => {
    res.render(
      'show.ejs',
      {
        item:foundItem
      }
    )
  })
})


// =======================
//      	 EDIT
// =======================
router.get('/:id/edit', (req, res) => {
  Item.findById(req.params.id, (error, foundItem) => {
    res.render(
      'edit.ejs',
      {
        item:foundItem
      }
    )
  })
})


// =======================
//     	   NEW
// =======================
router.get('/new', (req, res) => {
    res.render('new.ejs');
})


// =======================
//     		 PUT
// =======================
router.put('/:id', (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedItem) => {
      res.redirect('/');
  })
})


// =======================
//       	 POST
// =======================
router.post('/', (req, res) => {
  Item.create(req.body, (error, createdItem) => {
    res.redirect('/')
  })
})


// =======================
//        DELETE
// =======================
router.delete('/:id', (req, res) => {
  Item.findByIdAndRemove(req.params.id, (error, data) => {
    res.redirect('/')
  })
})

// =======================
//        BUY
// =======================
router.put('/:id/buy', (req, res) => {
  Item.findByIdAndUpdate(
    req.params.id,
    { $inc: { qty: -1 }},
    { new: true },
    (error, updatedItem) => {

      res.render(
        'show.ejs',
        {
          item:updatedItem
        }
      )
      //res.redirect('/${req.params.id}')
    }
  )
})

module.exports = router;
