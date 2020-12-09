var express = require('express');
var router = express.Router();

// Controllers
const homePageController = require('../controllers/home');
const aboutController = require('../controllers/about');
const displayController = require('../controllers/display');

const listDisplayController = require('../controllers/mobile');


// Home page
router.get('/', homePageController.homePage)

// About page
router.get('/about',aboutController.about);

// Display page
router.get('/display',displayController.displayPage);

// MobileList page
router.get('/list', listDisplayController.mobilelist);
router.get('/mobiles/:mobileid', listDisplayController.mobileInfo);

router.route('/new')
    .get(listDisplayController.addNewMobile)
    .post(listDisplayController.doAddNewMobile);

module.exports = router;


