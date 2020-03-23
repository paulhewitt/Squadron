'use strict'
require('dotenv').config()
const http = require('http')
const express = require('express')
const { urlencoded } = require('body-parser')
const twilio = require('twilio')
const ClientCapability = twilio.jwt.ClientCapability
const VoiceResponse = twilio.twiml.VoiceResponse
const app = express()
app.use('/node_modules', express.static(__dirname + '/node_modules'))
app.use(express.static(__dirname + '/public'))
app.use(urlencoded({ extended: false }))
// GET token
app.get('/token', (request, response) => {
  const capability = new ClientCapability({
    accountSid: 'Ask Paul for Key',
    authToken: 'Ask Paul for Key'
  })

  capability.addScope(
    new ClientCapability.OutgoingClientScope({
      applicationSid: 'Ask Paul for Key' })
  )

  const token = capability.toJwt()

  response.send({
    token: token
  })
})

// POST voice call
app.post('/voice', (request, response) => {
  const voiceResponse = new VoiceResponse()
  voiceResponse.dial({
    callerId: 'Ask Paul'
  }, request.body.number)

  response.type('text/xml')
  response.send(voiceResponse.toString())
})

const server = http.createServer(app)
const port = process.env.PORT || 3000
server.listen(port, () => {
  console.log(`Express Server listening on *:${port}`)
})

module.exports = app
