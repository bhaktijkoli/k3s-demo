require('dotenv').config()
const fs = require('fs')
const path = require('path')

const WRITE_PATH = process.env.WRITE_PATH

const getCurrentDateTime = () => {
  var date = new Date();

  var year = date.getFullYear();
  var month = (date.getMonth() + 1).toString().padStart(2, '0');
  var day = date.getDate().toString().padStart(2, '0');
  var hours = date.getHours().toString().padStart(2, '0');
  var minutes = date.getMinutes().toString().padStart(2, '0');
  var seconds = date.getSeconds().toString().padStart(2, '0');

  var formattedDateTime = year + month + day + hours + minutes + seconds;

  return formattedDateTime;
}

const writeFile = () => {
  const fileName = getCurrentDateTime() + '.txt'
  fs.writeFileSync(path.join(WRITE_PATH, fileName), new Date().toString())
}

setInterval(() => {
  writeFile()
}, 30 * 1000)

writeFile()