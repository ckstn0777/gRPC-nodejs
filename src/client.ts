import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./proto/helloworld";

const packageDefinition = protoLoader.loadSync(
  __dirname + "/proto/helloworld.proto"
);
const loadedPackageDefinition = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType; // How the types will be used

function main() {
  const client = new loadedPackageDefinition.Greeter(
    "localhost:50051",
    grpc.credentials.createInsecure()
  );

  client.sayHello({ name: "you" }, function (err, response) {
    console.log("Greeting:", response.message);
  });
}
main();
