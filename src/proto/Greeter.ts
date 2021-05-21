// Original file: src/proto/helloworld.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { HelloReply as _HelloReply, HelloReply__Output as _HelloReply__Output } from './HelloReply';
import type { HelloRequest as _HelloRequest, HelloRequest__Output as _HelloRequest__Output } from './HelloRequest';

export interface GreeterClient extends grpc.Client {
  SayHello(argument: _HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _HelloReply__Output) => void): grpc.ClientUnaryCall;
  SayHello(argument: _HelloRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _HelloReply__Output) => void): grpc.ClientUnaryCall;
  SayHello(argument: _HelloRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _HelloReply__Output) => void): grpc.ClientUnaryCall;
  SayHello(argument: _HelloRequest, callback: (error?: grpc.ServiceError, result?: _HelloReply__Output) => void): grpc.ClientUnaryCall;
  sayHello(argument: _HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _HelloReply__Output) => void): grpc.ClientUnaryCall;
  sayHello(argument: _HelloRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _HelloReply__Output) => void): grpc.ClientUnaryCall;
  sayHello(argument: _HelloRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _HelloReply__Output) => void): grpc.ClientUnaryCall;
  sayHello(argument: _HelloRequest, callback: (error?: grpc.ServiceError, result?: _HelloReply__Output) => void): grpc.ClientUnaryCall;
  
}

export interface GreeterHandlers extends grpc.UntypedServiceImplementation {
  SayHello: grpc.handleUnaryCall<_HelloRequest__Output, _HelloReply>;
  
}

export interface GreeterDefinition extends grpc.ServiceDefinition {
  SayHello: MethodDefinition<_HelloRequest, _HelloReply, _HelloRequest__Output, _HelloReply__Output>
}
