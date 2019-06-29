var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// creates new ItemSchema object
var ItemSchema = new Schema ({
  name: {
    type: String,
    trim: true,
    required: "Please name your item."
  },
  category: {
    type: String,
    required: "Please choose an item type."
  },
  img: {
    type: String,
    // required: true
  },
  color: {
    type: String
  },
  size: {
    type: String
  },
  brand: {
    type: String
  },
  dateUpdated: {
    type: Date,
    default: Date.now
  },
  lastWorn: {
    type: Date
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

// // this creates model from the above schema using mongoose's model method
// var Item = mongoose.model("Item", ItemSchema);

// module.exports = Item;

module.exports = Item = mongoose.model("items", ItemSchema);
