const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const BLOG = require('./models/blog')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
  })
)

mongoose
  .connect(
    'mongodb+srv://shivkolekar01:WuC3cMJmSpD9E6v9@cluster0.c7sccmm.mongodb.net/'
  ) //mongodb://localhost:27017/blog

  .then(() => console.log('Connected to DB'))
  .catch(err => console.log(err))

// Ensure the 'uploads' directory exists
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads')
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage })

app.post('/addblog', upload.single('thumbnail'), async (req, res) => {
  try {
    const { title, description, body, author } = req.body
    const thumbnail = req.file ? req.file.path : null

    const newBlog = await BLOG.create({
      title,
      description,
      body,
      author,
      thumbnail // Add the file path if needed
    })

    return res.status(200).json({ message: 'Blog Added Successfully' })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

app.get('/blogs', async (req, res) => {
  try {
    const blogs = await BLOG.find()
    return res.status(200).json({ blogs })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

app.get('/blogs/:title', async (req, res) => {
  try {
    const title = req.params.title
    const result = await BLOG.findOne({ title })
    return res.status(200).json({ result })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
