const express = require('express');

const displayPage = (req,res,next) => res.render("display", {title : 'Display'});

module.exports = {
    displayPage
}