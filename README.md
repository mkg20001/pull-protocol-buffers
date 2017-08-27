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

  - `ppb.duplex(duplex, proto)`

    Creates an easy to use protocol-buffers client

    `duplex`: A pull-stream duplex

    `proto`: The Protocol buffers message

    returns: An object with 2 functions

      - `.read(fn)`

        `fn(data)`: A function that is called whenever a message is encoded

        **NOTE: Must be called sync after creation**

      - `.write(data)`

        `data`: JSON data to encode
