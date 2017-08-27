# pull-protocol-buffers
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
