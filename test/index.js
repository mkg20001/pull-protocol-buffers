"use strict"

const sinon = require("sinon")
const chai = require("chai")
chai.use(require("sinon-chai"))
const should = chai.should()
const assert = require("assert")

const protostream = require("..")
const protostream_pull = require("../pull")

const pull = require("pull-stream")

const pb = require("protocol-buffers")
const testmsg = pb("message Test { string content = 1 ; }").Test
const testdata = ["hello", "world", "randomnonsense⅜£¤⅜£ŁŦŁŊẞ€Ŋ", "hello world!!!1"].map(content => {
  return {
    content
  }
})

describe("pull-protocol-buffers", () => {
  describe("lp", () => {
    pull(
      pull.values(testdata.slice(1)),
      protostream.encode(testmsg),
      protostream.decode(testmsg),
      pull.collect((err, data) => {
        should.not.exist(err)
        data.should.equal(testdata)
      })
    )
  })
})
