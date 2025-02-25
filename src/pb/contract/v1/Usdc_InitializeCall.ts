// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0

import { Writer, Reader } from "as-proto/assembly";
import { Timestamp } from "../../google/protobuf/Timestamp";

export class Usdc_InitializeCall {
  static encode(message: Usdc_InitializeCall, writer: Writer): void {
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
    writer.string(message.tokenName);

    writer.uint32(58);
    writer.string(message.tokenSymbol);

    writer.uint32(66);
    writer.string(message.tokenCurrency);

    writer.uint32(72);
    writer.uint64(message.tokenDecimals);

    writer.uint32(82);
    writer.bytes(message.newMasterMinter);

    writer.uint32(90);
    writer.bytes(message.newPauser);

    writer.uint32(98);
    writer.bytes(message.newBlacklister);

    writer.uint32(106);
    writer.bytes(message.newOwner);
  }

  static decode(reader: Reader, length: i32): Usdc_InitializeCall {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Usdc_InitializeCall();

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
          message.tokenName = reader.string();
          break;

        case 7:
          message.tokenSymbol = reader.string();
          break;

        case 8:
          message.tokenCurrency = reader.string();
          break;

        case 9:
          message.tokenDecimals = reader.uint64();
          break;

        case 10:
          message.newMasterMinter = reader.bytes();
          break;

        case 11:
          message.newPauser = reader.bytes();
          break;

        case 12:
          message.newBlacklister = reader.bytes();
          break;

        case 13:
          message.newOwner = reader.bytes();
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
  tokenName: string;
  tokenSymbol: string;
  tokenCurrency: string;
  tokenDecimals: u64;
  newMasterMinter: Uint8Array;
  newPauser: Uint8Array;
  newBlacklister: Uint8Array;
  newOwner: Uint8Array;

  constructor(
    callTxHash: string = "",
    callBlockTime: Timestamp | null = null,
    callBlockNumber: u64 = 0,
    callOrdinal: u64 = 0,
    callSuccess: bool = false,
    tokenName: string = "",
    tokenSymbol: string = "",
    tokenCurrency: string = "",
    tokenDecimals: u64 = 0,
    newMasterMinter: Uint8Array = new Uint8Array(0),
    newPauser: Uint8Array = new Uint8Array(0),
    newBlacklister: Uint8Array = new Uint8Array(0),
    newOwner: Uint8Array = new Uint8Array(0)
  ) {
    this.callTxHash = callTxHash;
    this.callBlockTime = callBlockTime;
    this.callBlockNumber = callBlockNumber;
    this.callOrdinal = callOrdinal;
    this.callSuccess = callSuccess;
    this.tokenName = tokenName;
    this.tokenSymbol = tokenSymbol;
    this.tokenCurrency = tokenCurrency;
    this.tokenDecimals = tokenDecimals;
    this.newMasterMinter = newMasterMinter;
    this.newPauser = newPauser;
    this.newBlacklister = newBlacklister;
    this.newOwner = newOwner;
  }
}
