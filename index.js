"use strict"

const lp = require("pull-length-prefixed")
const pull = require("pull-stream")
const pro = require("./pull")

module.exports.encode = (proto) => {
  return pull(
    pro.encode(proto),
    lp.encode()
  )
}

module.exports.decode = (proto) => {
  return pull(
    lp.decode(),
    pro.decode(proto)
  )
}

module.exports.pull = pro
