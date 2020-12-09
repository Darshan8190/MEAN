const express = require('express');
const request = require('request');

const apiOptions = {
    server : 'http://localhost:3000'
};

const _renderHomepage = function (req, res, responseBody) {
    res.render('mobileList', {
        mobiles: responseBody
    });
};

const mobilelist = function(req, res) {
    const path = '/api/mobiles';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    
    request(requestOptions, function (err, response, body) {
        _renderHomepage(req, res, body);
    });
};

const _renderDetailPage = function (req, res, responseBody) {   
    res.render('mobile-info', {
        currentMobile: responseBody
    });

};

const mobileInfo = (req, res) => {
    const path = `/api/mobiles/${req.params.mobileid}`;
    
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    
    request(requestOptions, function(err, resopnse, body) {
        _renderDetailPage(req, res, body);
    });
};

const _renderCreatePage = function (req,res) {
    res.render ('create-new-mobile', {
        title: "Create New Mobile"
    });
};

const addNewMobile = function(req, res) {
    _renderCreatePage(req,res);
};

const doAddNewMobile = function (req, res) {
    const path = '/api/mobiles';
    const postdata = {
        name: req.body.name,
        downPayment: req.body.downPayment,
        monthlyPrice : req.body.monthlyPrice,
        extra: req.body.extra,
        fullPrice: req.body.fullPrice,
           
    };
    const requestoptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: postdata
    };
    request(
    requestoptions,
    (err, response, body) => {
        if(response.statusCode === 201) {
            res.redirect('/')
        }
    }); 
};

module.exports = {
    mobilelist,
    mobileInfo,
    doAddNewMobile,
    addNewMobile
};

