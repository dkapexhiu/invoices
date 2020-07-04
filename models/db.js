const mongoose = require("mongoose");

mongoose.connect('mongodb://invoicesuser:invoicesuser1234@ds125362.mlab.com:25362/invoices', { useNewUrlParser: true }, err => {
  if (!err) {
    console.log("MongoDB Connection Successful");
  } else {
    console.log("Error in DB connection : " + err);
  }
});

require("./invoice.model");
require("./customer.model");
