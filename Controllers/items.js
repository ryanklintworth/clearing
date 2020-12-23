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
        qty:3
      },
      {
        name:'Daiquiri',
        img:'https://static.vinepair.com/wp-content/uploads/2016/03/daiquiri-card.jpg',
        price:3,
        qty:3
      },
      {
        name:'Negroni',
        img:'https://static.vinepair.com/wp-content/uploads/2016/03/negroni-card.jpg',
        price:3,
        qty:3
      },
      {
        name:'Manhattan',
        img:'https://static.vinepair.com/wp-content/uploads/2018/03/Manhattan-Recipe-card.jpg',
        price:3,
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
  Item.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedModel) => {
      res.redirect('/items');
  })
})


// =======================
//       	 POST
// =======================
router.post('/', (req, res) => {
  Item.create(req.body, (error, createdItem) => {
    res.redirect('/items')
  })
})


// =======================
//        DELETE
// =======================
router.delete('/:id', (req, res) => {
  Item.findByIdAndRemove(req.params.id, (error, data) => {
    res.redirect('/items')
  })
})

module.exports = router;
