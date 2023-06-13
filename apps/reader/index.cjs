require('dotenv').config()
const fs = require('fs')
const path = require('path')

const READ_PATH = process.env.READ_PATH

const readFiles = (path = READ_PATH) => {
  const files = fs.readdirSync(path)
  for (const file of files) {
    if (file.isDirectory()) {
      readFiles(path.join(path, file))
    } else {
      console.log(file)
    }
  }
}

setInterval(() => {
  readFiles()
}, 30 * 1000)

readFiles()