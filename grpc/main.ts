import { credentials, Metadata } from '@grpc/grpc-js';
import { PingClient } from "../generated/ping_grpc_pb"
import { PingRequest, PongReply } from "../generated/ping_pb"

/**
 * gRPC GreeterClient Service
 */

class ClientService {
    private readonly pingClient = new PingClient('localhost:50051', credentials.createInsecure())

    ping(): Promise<PongReply> {
        const pingReq = new PingRequest()
        const metadata = new Metadata()
        metadata.add("authorization", "JWT-example")
        return new Promise((resolve, reject) => {
            this.pingClient.ping(pingReq, metadata, (error, response) => {
                if (error) reject(error)
                if (response) resolve(response)
            })
        })
    }

}

export const clientService = new ClientService();
