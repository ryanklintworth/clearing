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

router.get('/attending', (req, res) => {
    res.render('attending.ejs');
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
        img:'https://f4.bcbits.com/img/a2626792907_10.jpg',
        price:5,
        description:"https://bandcamp.com/EmbeddedPlayer/album=4065810588/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
        qty:3
      },
      {
        name:'Point of View',
        img:'https://f4.bcbits.com/img/a2982721089_2.jpg',
        price:5,
        description:"https://bandcamp.com/EmbeddedPlayer/album=2082256940/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
        qty:3
      },
      {
        name:'Moonbath',
        img:'https://f4.bcbits.com/img/a2973512665_2.jpg',
        price:5,
        description:"https://bandcamp.com/EmbeddedPlayer/album=4195293747/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
        qty:3
      },
      {
        name:'Be There',
        img:'https://f4.bcbits.com/img/a0332022896_2.jpg',
        price:5,
        description:"https://bandcamp.com/EmbeddedPlayer/album=699374123/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
        qty:3
      },
      {
        name:'Differences',
        img:'https://f4.bcbits.com/img/a2465165707_2.jpg',
        price:5,
        description:"https://bandcamp.com/EmbeddedPlayer/album=798146052/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
        qty:3
      },
      {
        name:'Lights',
        img:'https://f4.bcbits.com/img/a2932362510_2.jpg',
        price:5,
        description:"https://bandcamp.com/EmbeddedPlayer/album=3267829842/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
        qty:3
      },
      {
        name:'Threat',
        img:'https://f4.bcbits.com/img/a2745731794_2.jpg',
        price:5,
        description:"https://bandcamp.com/EmbeddedPlayer/album=606527530/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
        qty:3
      },
      {
        name:'LET GO',
        img:'https://f4.bcbits.com/img/a3366992640_2.jpg',
        price:5,
        description:"https://bandcamp.com/EmbeddedPlayer/album=4000605870/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
        qty:3
      },
      {
        name:'scratch',
        img:'https://f4.bcbits.com/img/a2882240015_2.jpg',
        price:5,
        description:"https://bandcamp.com/EmbeddedPlayer/album=2678158321/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
        qty:3
      },
      {
        name:'Keepsake (No Kings 2011)',
        img:'https://f4.bcbits.com/img/a1252952152_2.jpg',
        price:5,
        description:"https://bandcamp.com/EmbeddedPlayer/album=645523319/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
        qty:3
      },
      {
        name:'Stride',
        img:'https://f4.bcbits.com/img/a1782609472_2.jpg',
        price:5,
        description:"https://bandcamp.com/EmbeddedPlayer/album=126389843/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
        qty:3
      },
      {
        name:'No Titles',
        img:'https://f4.bcbits.com/img/a2046075342_2.jpg',
        price:5,
        description:"https://bandcamp.com/EmbeddedPlayer/album=3757968939/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
        qty:3
      },
      {
        name:'13 Pictures',
        img:'https://f4.bcbits.com/img/a2889208310_2.jpg',
        price:5,
        description:"https://bandcamp.com/EmbeddedPlayer/album=1488597704/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
        qty:3
      },
      {
        name:'Tape Drag',
        img:'https://f4.bcbits.com/img/a2082331891_2.jpg',
        price:5,
        description:"https://bandcamp.com/EmbeddedPlayer/album=186268606/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
        qty:3
      },
      {
        name:'distance',
        img:'https://f4.bcbits.com/img/a0085759493_2.jpg',
        price:5,
        description:"https://bandcamp.com/EmbeddedPlayer/album=3231649267/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
        qty:3
      },
      {
        name:'cold night',
        img:'https://f4.bcbits.com/img/a3685371929_2.jpg',
        price:5,
        description:"https://bandcamp.com/EmbeddedPlayer/album=3560209945/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
        qty:3
      }
    ],
    (error, data) => {
      res.redirect('/')
    }
  )
})

module.exports = router;
