"use strict"

const chai = require("chai")
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
    it("should decode and encode", () => {
      pull(
        pull.values(testdata.slice(0)),
        protostream.encode(testmsg),
        protostream.decode(testmsg),
        pull.collect((err, data) => {
          should.not.exist(err)
          assert.deepEqual(data, testdata, "invalid data returned")
        })
      )
    })
  })

  const outdata = [testmsg.encode(testdata[3])]

  describe("single", () => {
    it("should encode a single element", () => {
      pull(
        pull.values(testdata.slice(3)),
        protostream_pull.encode(testmsg),
        pull.collect((err, data) => {
          should.not.exist(err)
          assert.deepEqual(data, outdata, "invalid data returned")
        })
      )
    })

    it("should decode a single element", () => {
      pull(
        pull.values(outdata.slice(0)),
        protostream_pull.decode(testmsg),
        pull.collect((err, data) => {
          should.not.exist(err)
          assert.deepEqual(data, testdata.slice(3), "invalid data returned")
        })
      )
    })
  })
})
