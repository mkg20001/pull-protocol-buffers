"use strict"

const lp = require("pull-length-prefixed")
const pull = require("pull-stream")
const pro = require("./pull")
const Pushable = require("pull-pushable")

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

module.exports.duplex = (conn, proto) => {
  let handler = () => {}
  pull(
    conn,
    module.exports.decode(proto),
    pull.drain(msg => handler(msg))
  )
  const p = new Pushable()
  pull(
    p,
    module.exports.encode(proto),
    conn
  )
  return {
    read: f => handler = f,
    write: data => p.push(data)
  }
}
