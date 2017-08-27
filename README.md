# pull-protocol-buffers

[![Build Status](https://travis-ci.org/mkg20001/pull-protocol-buffers.svg?branch=master)](https://travis-ci.org/mkg20001/pull-protocol-buffers) [![codecov](https://codecov.io/gh/mkg20001/pull-protocol-buffers/branch/master/graph/badge.svg)](https://codecov.io/gh/mkg20001/pull-protocol-buffers)

Protocol Buffers length-prefixed pull-stream encoder/decoder

# API
  - `ppb.encode(proto)`

    Encodes messages that come in

    `proto`: The Protocol buffers message

    returns: A length-prefixed duplex

  - `ppb.decode(proto)`

    Decodes protocol-buffers that come in

    `proto`: The Protocol buffers message

    returns: A length-prefixed duplex
