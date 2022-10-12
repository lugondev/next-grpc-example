// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ping_pb = require('./ping_pb.js');

function serialize_pb_MsgReply(arg) {
  if (!(arg instanceof ping_pb.MsgReply)) {
    throw new Error('Expected argument of type pb.MsgReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_MsgReply(buffer_arg) {
  return ping_pb.MsgReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_MsgRequest(arg) {
  if (!(arg instanceof ping_pb.MsgRequest)) {
    throw new Error('Expected argument of type pb.MsgRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_MsgRequest(buffer_arg) {
  return ping_pb.MsgRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_PingRequest(arg) {
  if (!(arg instanceof ping_pb.PingRequest)) {
    throw new Error('Expected argument of type pb.PingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_PingRequest(buffer_arg) {
  return ping_pb.PingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_PongReply(arg) {
  if (!(arg instanceof ping_pb.PongReply)) {
    throw new Error('Expected argument of type pb.PongReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_PongReply(buffer_arg) {
  return ping_pb.PongReply.deserializeBinary(new Uint8Array(buffer_arg));
}


var PingService = exports.PingService = {
  ping: {
    path: '/pb.Ping/Ping',
    requestStream: false,
    responseStream: false,
    requestType: ping_pb.PingRequest,
    responseType: ping_pb.PongReply,
    requestSerialize: serialize_pb_PingRequest,
    requestDeserialize: deserialize_pb_PingRequest,
    responseSerialize: serialize_pb_PongReply,
    responseDeserialize: deserialize_pb_PongReply,
  },
  msg: {
    path: '/pb.Ping/Msg',
    requestStream: false,
    responseStream: false,
    requestType: ping_pb.MsgRequest,
    responseType: ping_pb.MsgReply,
    requestSerialize: serialize_pb_MsgRequest,
    requestDeserialize: deserialize_pb_MsgRequest,
    responseSerialize: serialize_pb_MsgReply,
    responseDeserialize: deserialize_pb_MsgReply,
  },
};

exports.PingClient = grpc.makeGenericClientConstructor(PingService);
