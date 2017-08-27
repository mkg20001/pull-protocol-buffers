"use strict"

const pull = require("pull-stream")

module.exports.encode = (proto) => {
  return pull.map(msg => proto.encode(msg))
}

module.exports.decode = (proto) => {
  return pull.map(enc => proto.decode(enc))
}
