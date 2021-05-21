import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./proto/helloworld";
import { GreeterHandlers } from "./proto/Greeter";

const packageDefinition = protoLoader.loadSync(
  __dirname + "/proto/helloworld.proto"
);
const loadedPackageDefinition = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType; // How the types will be used

const serviceHandler: GreeterHandlers = {
  SayHello(call, callback) {
    callback(null, { message: "Hello " + call.request.name });
  },
};

function main() {
  const server = new grpc.Server();
  server.addService(loadedPackageDefinition.Greeter.service, serviceHandler);
  server.bindAsync(
    "0.0.0.0:50051",
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start();
      console.log(`gRPC server listening at 0.0.0.0:50051`);
    }
  );
}
main();
