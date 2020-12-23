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
          img:'pink',
          price:3,
          qty:3
      },
      {
        name:'Daiquiri',
        img:'pink',
        price:3,
        qty:3
      },
      {
        name:'Negroni',
        img:'pink',
        price:3,
        qty:3
      },
      {
        name:'Manhattan',
        img:'pink',
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



// =======================
//     		 PUT
// =======================



// =======================
//       	 POST
// =======================



// =======================
//        DELETE
// =======================


module.exports = router;
