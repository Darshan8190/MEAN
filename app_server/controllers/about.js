const express = require('express');

const about = (req, res, next) => res.render("about", {title : "About"});

module.exports = {
    about
}