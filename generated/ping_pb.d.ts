// package: pb
// file: ping.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class PingRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PingRequest): PingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PingRequest;
    static deserializeBinaryFromReader(message: PingRequest, reader: jspb.BinaryReader): PingRequest;
}

export namespace PingRequest {
    export type AsObject = {
    }
}

export class PongReply extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): PongReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PongReply.AsObject;
    static toObject(includeInstance: boolean, msg: PongReply): PongReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PongReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PongReply;
    static deserializeBinaryFromReader(message: PongReply, reader: jspb.BinaryReader): PongReply;
}

export namespace PongReply {
    export type AsObject = {
        message: string,
    }
}

export class MsgRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgRequest): MsgRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgRequest;
    static deserializeBinaryFromReader(message: MsgRequest, reader: jspb.BinaryReader): MsgRequest;
}

export namespace MsgRequest {
    export type AsObject = {
    }
}

export class MsgReply extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): MsgReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgReply.AsObject;
    static toObject(includeInstance: boolean, msg: MsgReply): MsgReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgReply;
    static deserializeBinaryFromReader(message: MsgReply, reader: jspb.BinaryReader): MsgReply;
}

export namespace MsgReply {
    export type AsObject = {
        message: string,
    }
}
