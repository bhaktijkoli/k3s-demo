require('dotenv').config()
const fs = require('fs')
const path = require('path')

const READ_PATH = process.env.READ_PATH
console.log("Read path", READ_PATH)

const readFiles = (dirPath = READ_PATH) => {
  const files = fs.readdirSync(dirPath)
  for (const file of files) {
    const stat = fs.statSync(path.join(dirPath, file.toString()));
    if (stat.isDirectory()) {
      readFiles(path.join(dirPath, file.toString()))
    } else {
      console.log(file)
    }
  }
}

setInterval(() => {
  readFiles()
}, 30 * 1000)

readFiles()