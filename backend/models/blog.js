const mongoose = require('mongoose')

//defined the schema model for the url database
const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
)

const BLOG = mongoose.model('BLOG', BlogSchema) // storing the model in variable
module.exports = BLOG // exporting the model
