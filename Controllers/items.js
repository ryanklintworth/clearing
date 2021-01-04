// CONTROLLERS FILE SETUP
//————7 restful routes————

// =======================
//      DEPENDENCIES
// =======================
const express = require('express');
const router = express.Router();
const Item = require('../models/item_schema.js');

// =======================
//     	   NAV
// =======================
router.get('/about', (req, res) => {
    res.render('about.ejs');
})

router.get('/events', (req, res) => {
    res.render('events.ejs');
})

router.get('/projects', (req, res) => {
    res.render('projects.ejs');
})

// =======================
//  	    ROUTES
// =======================


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
    })
})

// =======================
//    	   SEED
// =======================
router.get('/admin/seed', (req, res) => {
  Item.create(
    [
      {
        name:'Spaces/Balance',
        img:'https://f4.bcbits.com/img/a2626792907_2.jpg',
        price:3,
        description:'The Old Fashioned is one of the oldest cocktails, developed during the 19th century. Originally, an "old fashioned" cocktail was a standard cocktail created by combining spirits, bitters, water, and sugar. ',
        qty:3
      },
      {
        name:'Point of View',
        img:'https://f4.bcbits.com/img/a2982721089_2.jpg',
        price:3,
        description:'When it comes to the Daiquiri, you need to set aside your preconceptions about sickly-sweet slushy concoctions. ',
        qty:3
      },
      {
        name:'Moonbath',
        img:'https://f4.bcbits.com/img/a2973512665_2.jpg',
        price:3,
        description:'The Negroni is a world-famous Italian aperitivo created in Florence, Italy in 1919. The cocktail traditionally mixes gin, sweet vermouth, and the iconic Italian red bitter Campari, though the use of other bitters is a source of debate. As the story goes, the drink was invented after Count Camillo Negroni requested an Americano with more kick while imbibing at the city’s Caffe Giacosa. The resulting cocktail, which included gin, was named in honor of the Count. The Negroni is often served before a meal in order to stimulate the appetite, but is versatile enough to be enjoyed at any time. ',
        qty:3
      },
      {
        name:'Be There',
        img:'https://f4.bcbits.com/img/a0332022896_2.jpg',
        price:3,
        description:'Legend has it that the Manhattan originated in New York City, sometime in the 1870s, mixed together in honor of hometown presidential candidate Samuel J. Tilden. ',
        qty:3
      },
      {
        name:'Differences',
        img:'https://f4.bcbits.com/img/a2465165707_2.jpg',
        price:3,
        description:'The Old Fashioned is one of the oldest cocktails, developed during the 19th century. Originally, an "old fashioned" cocktail was a standard cocktail created by combining spirits, bitters, water, and sugar. ',
        qty:3
      },
      {
        name:'Lights. Clearing.',
        img:'https://f4.bcbits.com/img/a2932362510_2.jpg',
        price:3,
        description:'When it comes to the Daiquiri, you need to set aside your preconceptions about sickly-sweet slushy concoctions. ',
        qty:3
      },
      {
        name:'Threat',
        img:'https://f4.bcbits.com/img/a2745731794_2.jpg',
        price:3,
        description:'The Negroni is a world-famous Italian aperitivo created in Florence, Italy in 1919. The cocktail traditionally mixes gin, sweet vermouth, and the iconic Italian red bitter Campari, though the use of other bitters is a source of debate. As the story goes, the drink was invented after Count Camillo Negroni requested an Americano with more kick while imbibing at the city’s Caffe Giacosa. The resulting cocktail, which included gin, was named in honor of the Count. The Negroni is often served before a meal in order to stimulate the appetite, but is versatile enough to be enjoyed at any time. ',
        qty:3
      },
      {
        name:'LET GO',
        img:'https://f4.bcbits.com/img/a3366992640_2.jpg',
        price:3,
        description:'Legend has it that the Manhattan originated in New York City, sometime in the 1870s, mixed together in honor of hometown presidential candidate Samuel J. Tilden. ',
        qty:3
      },
      {
        name:'scratch',
        img:'https://f4.bcbits.com/img/a2882240015_2.jpg',
        price:3,
        description:'The Old Fashioned is one of the oldest cocktails, developed during the 19th century. Originally, an "old fashioned" cocktail was a standard cocktail created by combining spirits, bitters, water, and sugar. ',
        qty:3
      },
      {
        name:'Keepsake',
        img:'https://f4.bcbits.com/img/a1252952152_2.jpg',
        price:3,
        description:'When it comes to the Daiquiri, you need to set aside your preconceptions about sickly-sweet slushy concoctions. ',
        qty:3
      },
      {
        name:'Stride',
        img:'https://f4.bcbits.com/img/a1782609472_2.jpg',
        price:3,
        description:'The Negroni is a world-famous Italian aperitivo created in Florence, Italy in 1919. The cocktail traditionally mixes gin, sweet vermouth, and the iconic Italian red bitter Campari, though the use of other bitters is a source of debate. As the story goes, the drink was invented after Count Camillo Negroni requested an Americano with more kick while imbibing at the city’s Caffe Giacosa. The resulting cocktail, which included gin, was named in honor of the Count. The Negroni is often served before a meal in order to stimulate the appetite, but is versatile enough to be enjoyed at any time. ',
        qty:3
      },
      {
        name:'No Titles',
        img:'https://f4.bcbits.com/img/a2046075342_2.jpg',
        price:3,
        description:'Legend has it that the Manhattan originated in New York City, sometime in the 1870s, mixed together in honor of hometown presidential candidate Samuel J. Tilden. ',
        qty:3
      },
      {
        name:'13 Pictures',
        img:'https://f4.bcbits.com/img/a2889208310_2.jpg',
        price:3,
        description:'The Old Fashioned is one of the oldest cocktails, developed during the 19th century. Originally, an "old fashioned" cocktail was a standard cocktail created by combining spirits, bitters, water, and sugar. ',
        qty:3
      },
      {
        name:'Tape Drag',
        img:'https://f4.bcbits.com/img/a2082331891_2.jpg',
        price:3,
        description:'When it comes to the Daiquiri, you need to set aside your preconceptions about sickly-sweet slushy concoctions. ',
        qty:3
      },
      {
        name:'distance',
        img:'https://f4.bcbits.com/img/a0085759493_2.jpg',
        price:3,
        description:'The Negroni is a world-famous Italian aperitivo created in Florence, Italy in 1919. The cocktail traditionally mixes gin, sweet vermouth, and the iconic Italian red bitter Campari, though the use of other bitters is a source of debate. As the story goes, the drink was invented after Count Camillo Negroni requested an Americano with more kick while imbibing at the city’s Caffe Giacosa. The resulting cocktail, which included gin, was named in honor of the Count. The Negroni is often served before a meal in order to stimulate the appetite, but is versatile enough to be enjoyed at any time. ',
        qty:3
      },
      {
        name:'cold night',
        img:'https://f4.bcbits.com/img/a3685371929_2.jpg',
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

module.exports = router;
