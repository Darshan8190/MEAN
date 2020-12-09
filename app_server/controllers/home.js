var express = require('express');

const homePage = (req, res, next) => res.render('index', { title: 'Home' });
  
module.exports = {
    homePage
}