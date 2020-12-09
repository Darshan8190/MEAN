const mongoose = require('mongoose');


let mobileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  downPayment: {type : String, required : true} ,
  monthlyPrice : {type : String, required : true},
  extra : {type : String, required : true} ,
  fullPrice: { type: String, required: true },  
  color: { type: String, required: true },
  storage: { type: String, required: true },
  comments: { type: String, required: true }
})
mongoose.model('Mobile', mobileSchema);