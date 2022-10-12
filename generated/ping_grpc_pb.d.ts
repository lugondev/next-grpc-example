// package: pb
// file: ping.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as ping_pb from "./ping_pb";

interface IPingService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    ping: IPingService_IPing;
    msg: IPingService_IMsg;
}

interface IPingService_IPing extends grpc.MethodDefinition<ping_pb.PingRequest, ping_pb.PongReply> {
    path: "/pb.Ping/Ping";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ping_pb.PingRequest>;
    requestDeserialize: grpc.deserialize<ping_pb.PingRequest>;
    responseSerialize: grpc.serialize<ping_pb.PongReply>;
    responseDeserialize: grpc.deserialize<ping_pb.PongReply>;
}
interface IPingService_IMsg extends grpc.MethodDefinition<ping_pb.MsgRequest, ping_pb.MsgReply> {
    path: "/pb.Ping/Msg";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ping_pb.MsgRequest>;
    requestDeserialize: grpc.deserialize<ping_pb.MsgRequest>;
    responseSerialize: grpc.serialize<ping_pb.MsgReply>;
    responseDeserialize: grpc.deserialize<ping_pb.MsgReply>;
}

export const PingService: IPingService;

export interface IPingServer extends grpc.UntypedServiceImplementation {
    ping: grpc.handleUnaryCall<ping_pb.PingRequest, ping_pb.PongReply>;
    msg: grpc.handleUnaryCall<ping_pb.MsgRequest, ping_pb.MsgReply>;
}

export interface IPingClient {
    ping(request: ping_pb.PingRequest, callback: (error: grpc.ServiceError | null, response: ping_pb.PongReply) => void): grpc.ClientUnaryCall;
    ping(request: ping_pb.PingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ping_pb.PongReply) => void): grpc.ClientUnaryCall;
    ping(request: ping_pb.PingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ping_pb.PongReply) => void): grpc.ClientUnaryCall;
    msg(request: ping_pb.MsgRequest, callback: (error: grpc.ServiceError | null, response: ping_pb.MsgReply) => void): grpc.ClientUnaryCall;
    msg(request: ping_pb.MsgRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ping_pb.MsgReply) => void): grpc.ClientUnaryCall;
    msg(request: ping_pb.MsgRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ping_pb.MsgReply) => void): grpc.ClientUnaryCall;
}

export class PingClient extends grpc.Client implements IPingClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public ping(request: ping_pb.PingRequest, callback: (error: grpc.ServiceError | null, response: ping_pb.PongReply) => void): grpc.ClientUnaryCall;
    public ping(request: ping_pb.PingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ping_pb.PongReply) => void): grpc.ClientUnaryCall;
    public ping(request: ping_pb.PingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ping_pb.PongReply) => void): grpc.ClientUnaryCall;
    public msg(request: ping_pb.MsgRequest, callback: (error: grpc.ServiceError | null, response: ping_pb.MsgReply) => void): grpc.ClientUnaryCall;
    public msg(request: ping_pb.MsgRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ping_pb.MsgReply) => void): grpc.ClientUnaryCall;
    public msg(request: ping_pb.MsgRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ping_pb.MsgReply) => void): grpc.ClientUnaryCall;
}
