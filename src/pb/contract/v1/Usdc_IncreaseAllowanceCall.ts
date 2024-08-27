// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0

import { Writer, Reader } from "as-proto/assembly";
import { Timestamp } from "../../google/protobuf/Timestamp";

export class Usdc_IncreaseAllowanceCall {
  static encode(message: Usdc_IncreaseAllowanceCall, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.callTxHash);

    const callBlockTime = message.callBlockTime;
    if (callBlockTime !== null) {
      writer.uint32(18);
      writer.fork();
      Timestamp.encode(callBlockTime, writer);
      writer.ldelim();
    }

    writer.uint32(24);
    writer.uint64(message.callBlockNumber);

    writer.uint32(32);
    writer.uint64(message.callOrdinal);

    writer.uint32(40);
    writer.bool(message.callSuccess);

    writer.uint32(50);
    writer.bytes(message.spender);

    writer.uint32(58);
    writer.string(message.increment);

    writer.uint32(64);
    writer.bool(message.outputParam0);
  }

  static decode(reader: Reader, length: i32): Usdc_IncreaseAllowanceCall {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Usdc_IncreaseAllowanceCall();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.callTxHash = reader.string();
          break;

        case 2:
          message.callBlockTime = Timestamp.decode(reader, reader.uint32());
          break;

        case 3:
          message.callBlockNumber = reader.uint64();
          break;

        case 4:
          message.callOrdinal = reader.uint64();
          break;

        case 5:
          message.callSuccess = reader.bool();
          break;

        case 6:
          message.spender = reader.bytes();
          break;

        case 7:
          message.increment = reader.string();
          break;

        case 8:
          message.outputParam0 = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  callTxHash: string;
  callBlockTime: Timestamp | null;
  callBlockNumber: u64;
  callOrdinal: u64;
  callSuccess: bool;
  spender: Uint8Array;
  increment: string;
  outputParam0: bool;

  constructor(
    callTxHash: string = "",
    callBlockTime: Timestamp | null = null,
    callBlockNumber: u64 = 0,
    callOrdinal: u64 = 0,
    callSuccess: bool = false,
    spender: Uint8Array = new Uint8Array(0),
    increment: string = "",
    outputParam0: bool = false
  ) {
    this.callTxHash = callTxHash;
    this.callBlockTime = callBlockTime;
    this.callBlockNumber = callBlockNumber;
    this.callOrdinal = callOrdinal;
    this.callSuccess = callSuccess;
    this.spender = spender;
    this.increment = increment;
    this.outputParam0 = outputParam0;
  }
}
