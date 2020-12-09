const express = require('express');
const mongoose = require('mongoose');
const Mobile = mongoose.model('Mobile');

const getMobiles = (req, res, err) => {
    Mobile.find().exec((err, mobileData) => {
        if (err) {
            res.status(404).json(err)
        }
        res.status(200).json(mobileData)      
    });
};


const createMobile = (req, res) => {
    Mobile.create({
        name: req.body.name,
        downPayment: req.body.downPayment,
        monthlyPrice: req.body.monthlyPrice,
        extra: req.body.extra,
        fullPrice: req.body.fullPrice,
        color: req.body.color,
        storage: req.body.storage,
        comments : req.body.comments
    }, (err, mobileData) => {
        if (err) {
            res.status(400).json(err)
        }
        else {
            res.status(201).json(mobileData);
        }
    });
};



const getSingleMobile = (req, res) => {
    Mobile.findById(req.params.mobileid).exec((err, mobileData) => {
        if (!mobileData) {
            return res
                .status(404)
                .json({
                    "message": "Mobile Device not found"
                });
                
        } else if (err) {
            return res
                .status(404)
                .json(err);    
        }
        res.status(200).json(mobileData);
    });
}



const updateMobile = (req, res) => {
    if (!req.params.mobileid) {
        res.status(404).json({ "message": "Not found, mobile_id is required" });
        return;
    }
    Mobile.findById(req.params.mobileid).exec((err, mobileData) => {
        if (!mobileData) {
            res.json(404).status({ "message": "mobile_id not found" });
            return;
        }
        else if (err) {
            res.status(400).json(err);
            return;
        }

        mobileData.name = req.body.name;
        mobileData.downPayment = req.body.downPayment;
        mobileData.monthlyPrice = req.body.monthlyPrice;
        mobileData.extra = req.body.extra;
        mobileData.fullPrice = req.body.fullPrice;
        mobileData.color = req.body.color;
        mobileData.storage = req.body.storage;
        mobileData.comments = req.body.comments;

        // Saving the mobile data to the Database
        mobileData.save((err, mobileData) => {
            if (err) {
                res.status(404).json(err);
            }
            else {
                res.status(200).json(mobileData);
            }
        });
    }
    );
};

const deleteMobile = (req, res) => {
    const Mobileid = req.params.mobileid;

    if (Mobileid) {
        Mobile.findByIdAndRemove(Mobileid).exec((err, mobileData) => {
            if (err) {
                res.status(404).json(err);
                return;
            }
            res.status(204).json(null);
        });
    }
    else{
        res.status(404).json({ "message": "No mobile_id" });
    }
}

module.exports = {
    getMobiles,
    createMobile,
    getSingleMobile,
    updateMobile,
    deleteMobile
}

