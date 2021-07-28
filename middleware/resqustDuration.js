const moment = require('moment')
const fs = require('fs')

function resqustDuration(req, res, next) {
  const dateStart = new Date()
  const dateFormat = moment(dateStart).format('YYYY-MM-DD HH-mm-ss')

  next()
  res.on('finish', () => {

    const dateEnd = new Date()
    const dateDuration = dateEnd - dateStart
    const logMessage = `${dateFormat} | ${req.method} ${req.originalUrl} total time: ${dateDuration} ms\n`

    fs.appendFile('requestLog.txt', logMessage, (err) => {
      if (err) console.log(err)
    })
  })
}

module.exports = resqustDuration