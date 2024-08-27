import { log } from "@graphprotocol/graph-ts";
import { Protobuf } from "as-proto/assembly";
import { JSON } from "assemblyscript-json";
import { Call, Event } from "../generated/schema";
import { Events } from "./pb/contract/v1/Events";
import { Calls } from "./pb/contract/v1/Calls";
import { EventsCalls } from "./pb/contract/v1/EventsCalls";


export function handleEventsAndCalls(bytes: Uint8Array): void {
  const eventsCalls: EventsCalls = Protobuf.decode<EventsCalls>(
    bytes,
    EventsCalls.decode
  );
  const events: Events | null = eventsCalls.events;
  if (events === null) {
    return;
  }
  const calls: Calls | null = eventsCalls.calls;
  if (calls === null) {
    return;
  }

  // Below you will find examples of how to save the decoded events.
  // These are only examples, you can modify them to suit your needs.
  for (let i = 0; i < events.usdcAdminChangeds.length; i++) {
    const e = events.usdcAdminChangeds[i];
    let evt = new Event(ID(e.evtTxHash, i));
    let obj = new JSON.Obj();
    obj.set("evtTxHash", e.evtTxHash);
    obj.set("evtIndex", e.evtIndex);
    obj.set("evtBlockTime", e.evtBlockTime);
    obj.set("evtBlockNumber", e.evtBlockNumber);
    obj.set("newAdmin", e.newAdmin);
    obj.set("previousAdmin", e.previousAdmin);
    evt.jsonValue = obj.toString();
    evt.type = "adminChanged";
    evt.save();
  }
  
  for (let i = 0; i < events.usdcApprovals.length; i++) {
    const e = events.usdcApprovals[i];
    let evt = new Event(ID(e.evtTxHash, i));
    let obj = new JSON.Obj();
    obj.set("evtTxHash", e.evtTxHash);
    obj.set("evtIndex", e.evtIndex);
    obj.set("evtBlockTime", e.evtBlockTime);
    obj.set("evtBlockNumber", e.evtBlockNumber);
    obj.set("owner", e.owner);
    obj.set("spender", e.spender);
    obj.set("value", e.value);
    evt.jsonValue = obj.toString();
    evt.type = "approval";
    evt.save();
  }
  
  for (let i = 0; i < events.usdcAuthorizationCanceleds.length; i++) {
    const e = events.usdcAuthorizationCanceleds[i];
    let evt = new Event(ID(e.evtTxHash, i));
    let obj = new JSON.Obj();
    obj.set("evtTxHash", e.evtTxHash);
    obj.set("evtIndex", e.evtIndex);
    obj.set("evtBlockTime", e.evtBlockTime);
    obj.set("evtBlockNumber", e.evtBlockNumber);
    obj.set("authorizer", e.authorizer);
    obj.set("nonce", e.nonce);
    evt.jsonValue = obj.toString();
    evt.type = "authorizationCanceled";
    evt.save();
  }
  
  for (let i = 0; i < events.usdcAuthorizationUseds.length; i++) {
    const e = events.usdcAuthorizationUseds[i];
    let evt = new Event(ID(e.evtTxHash, i));
    let obj = new JSON.Obj();
    obj.set("evtTxHash", e.evtTxHash);
    obj.set("evtIndex", e.evtIndex);
    obj.set("evtBlockTime", e.evtBlockTime);
    obj.set("evtBlockNumber", e.evtBlockNumber);
    obj.set("authorizer", e.authorizer);
    obj.set("nonce", e.nonce);
    evt.jsonValue = obj.toString();
    evt.type = "authorizationUsed";
    evt.save();
  }
  
  for (let i = 0; i < events.usdcBlacklisteds.length; i++) {
    const e = events.usdcBlacklisteds[i];
    let evt = new Event(ID(e.evtTxHash, i));
    let obj = new JSON.Obj();
    obj.set("evtTxHash", e.evtTxHash);
    obj.set("evtIndex", e.evtIndex);
    obj.set("evtBlockTime", e.evtBlockTime);
    obj.set("evtBlockNumber", e.evtBlockNumber);
    obj.set("uAccount", e.uAccount);
    evt.jsonValue = obj.toString();
    evt.type = "blacklisted";
    evt.save();
  }
  
  for (let i = 0; i < events.usdcBlacklisterChangeds.length; i++) {
    const e = events.usdcBlacklisterChangeds[i];
    let evt = new Event(ID(e.evtTxHash, i));
    let obj = new JSON.Obj();
    obj.set("evtTxHash", e.evtTxHash);
    obj.set("evtIndex", e.evtIndex);
    obj.set("evtBlockTime", e.evtBlockTime);
    obj.set("evtBlockNumber", e.evtBlockNumber);
    obj.set("newBlacklister", e.newBlacklister);
    evt.jsonValue = obj.toString();
    evt.type = "blacklisterChanged";
    evt.save();
  }
  
  for (let i = 0; i < events.usdcBurns.length; i++) {
    const e = events.usdcBurns[i];
    let evt = new Event(ID(e.evtTxHash, i));
    let obj = new JSON.Obj();
    obj.set("evtTxHash", e.evtTxHash);
    obj.set("evtIndex", e.evtIndex);
    obj.set("evtBlockTime", e.evtBlockTime);
    obj.set("evtBlockNumber", e.evtBlockNumber);
    obj.set("amount", e.amount);
    obj.set("burner", e.burner);
    evt.jsonValue = obj.toString();
    evt.type = "burn";
    evt.save();
  }
  
  for (let i = 0; i < events.usdcMasterMinterChangeds.length; i++) {
    const e = events.usdcMasterMinterChangeds[i];
    let evt = new Event(ID(e.evtTxHash, i));
    let obj = new JSON.Obj();
    obj.set("evtTxHash", e.evtTxHash);
    obj.set("evtIndex", e.evtIndex);
    obj.set("evtBlockTime", e.evtBlockTime);
    obj.set("evtBlockNumber", e.evtBlockNumber);
    obj.set("newMasterMinter", e.newMasterMinter);
    evt.jsonValue = obj.toString();
    evt.type = "masterMinterChanged";
    evt.save();
  }
  
  for (let i = 0; i < events.usdcMints.length; i++) {
    const e = events.usdcMints[i];
    let evt = new Event(ID(e.evtTxHash, i));
    let obj = new JSON.Obj();
    obj.set("evtTxHash", e.evtTxHash);
    obj.set("evtIndex", e.evtIndex);
    obj.set("evtBlockTime", e.evtBlockTime);
    obj.set("evtBlockNumber", e.evtBlockNumber);
    obj.set("amount", e.amount);
    obj.set("minter", e.minter);
    obj.set("to", e.to);
    evt.jsonValue = obj.toString();
    evt.type = "mint";
    evt.save();
  }
  
  for (let i = 0; i < events.usdcMinterConfigureds.length; i++) {
    const e = events.usdcMinterConfigureds[i];
    let evt = new Event(ID(e.evtTxHash, i));
    let obj = new JSON.Obj();
    obj.set("evtTxHash", e.evtTxHash);
    obj.set("evtIndex", e.evtIndex);
    obj.set("evtBlockTime", e.evtBlockTime);
    obj.set("evtBlockNumber", e.evtBlockNumber);
    obj.set("minter", e.minter);
    obj.set("minterAllowedAmount", e.minterAllowedAmount);
    evt.jsonValue = obj.toString();
    evt.type = "minterConfigured";
    evt.save();
  }
  
  for (let i = 0; i < events.usdcMinterRemoveds.length; i++) {
    const e = events.usdcMinterRemoveds[i];
    let evt = new Event(ID(e.evtTxHash, i));
    let obj = new JSON.Obj();
    obj.set("evtTxHash", e.evtTxHash);
    obj.set("evtIndex", e.evtIndex);
    obj.set("evtBlockTime", e.evtBlockTime);
    obj.set("evtBlockNumber", e.evtBlockNumber);
    obj.set("oldMinter", e.oldMinter);
    evt.jsonValue = obj.toString();
    evt.type = "minterRemoved";
    evt.save();
  }
  
  for (let i = 0; i < events.usdcOwnershipTransferreds.length; i++) {
    const e = events.usdcOwnershipTransferreds[i];
    let evt = new Event(ID(e.evtTxHash, i));
    let obj = new JSON.Obj();
    obj.set("evtTxHash", e.evtTxHash);
    obj.set("evtIndex", e.evtIndex);
    obj.set("evtBlockTime", e.evtBlockTime);
    obj.set("evtBlockNumber", e.evtBlockNumber);
    obj.set("newOwner", e.newOwner);
    obj.set("previousOwner", e.previousOwner);
    evt.jsonValue = obj.toString();
    evt.type = "ownershipTransferred";
    evt.save();
  }
  
  for (let i = 0; i < events.usdcPauses.length; i++) {
    const e = events.usdcPauses[i];
    let evt = new Event(ID(e.evtTxHash, i));
    let obj = new JSON.Obj();
    obj.set("evtTxHash", e.evtTxHash);
    obj.set("evtIndex", e.evtIndex);
    obj.set("evtBlockTime", e.evtBlockTime);
    obj.set("evtBlockNumber", e.evtBlockNumber);
    evt.jsonValue = obj.toString();
    evt.type = "pause";
    evt.save();
  }
  
  for (let i = 0; i < events.usdcPauserChangeds.length; i++) {
    const e = events.usdcPauserChangeds[i];
    let evt = new Event(ID(e.evtTxHash, i));
    let obj = new JSON.Obj();
    obj.set("evtTxHash", e.evtTxHash);
    obj.set("evtIndex", e.evtIndex);
    obj.set("evtBlockTime", e.evtBlockTime);
    obj.set("evtBlockNumber", e.evtBlockNumber);
    obj.set("newAddress", e.newAddress);
    evt.jsonValue = obj.toString();
    evt.type = "pauserChanged";
    evt.save();
  }
  
  for (let i = 0; i < events.usdcRescuerChangeds.length; i++) {
    const e = events.usdcRescuerChangeds[i];
    let evt = new Event(ID(e.evtTxHash, i));
    let obj = new JSON.Obj();
    obj.set("evtTxHash", e.evtTxHash);
    obj.set("evtIndex", e.evtIndex);
    obj.set("evtBlockTime", e.evtBlockTime);
    obj.set("evtBlockNumber", e.evtBlockNumber);
    obj.set("newRescuer", e.newRescuer);
    evt.jsonValue = obj.toString();
    evt.type = "rescuerChanged";
    evt.save();
  }
  
  for (let i = 0; i < events.usdcTransfers.length; i++) {
    const e = events.usdcTransfers[i];
    let evt = new Event(ID(e.evtTxHash, i));
    let obj = new JSON.Obj();
    obj.set("evtTxHash", e.evtTxHash);
    obj.set("evtIndex", e.evtIndex);
    obj.set("evtBlockTime", e.evtBlockTime);
    obj.set("evtBlockNumber", e.evtBlockNumber);
    obj.set("from", e.from);
    obj.set("to", e.to);
    obj.set("value", e.value);
    evt.jsonValue = obj.toString();
    evt.type = "transfer";
    evt.save();
  }
  
  for (let i = 0; i < events.usdcUnBlacklisteds.length; i++) {
    const e = events.usdcUnBlacklisteds[i];
    let evt = new Event(ID(e.evtTxHash, i));
    let obj = new JSON.Obj();
    obj.set("evtTxHash", e.evtTxHash);
    obj.set("evtIndex", e.evtIndex);
    obj.set("evtBlockTime", e.evtBlockTime);
    obj.set("evtBlockNumber", e.evtBlockNumber);
    obj.set("uAccount", e.uAccount);
    evt.jsonValue = obj.toString();
    evt.type = "unBlacklisted";
    evt.save();
  }
  
  for (let i = 0; i < events.usdcUnpauses.length; i++) {
    const e = events.usdcUnpauses[i];
    let evt = new Event(ID(e.evtTxHash, i));
    let obj = new JSON.Obj();
    obj.set("evtTxHash", e.evtTxHash);
    obj.set("evtIndex", e.evtIndex);
    obj.set("evtBlockTime", e.evtBlockTime);
    obj.set("evtBlockNumber", e.evtBlockNumber);
    evt.jsonValue = obj.toString();
    evt.type = "unpause";
    evt.save();
  }
  
  for (let i = 0; i < events.usdcUpgradeds.length; i++) {
    const e = events.usdcUpgradeds[i];
    let evt = new Event(ID(e.evtTxHash, i));
    let obj = new JSON.Obj();
    obj.set("evtTxHash", e.evtTxHash);
    obj.set("evtIndex", e.evtIndex);
    obj.set("evtBlockTime", e.evtBlockTime);
    obj.set("evtBlockNumber", e.evtBlockNumber);
    obj.set("implementation", e.implementation);
    evt.jsonValue = obj.toString();
    evt.type = "upgraded";
    evt.save();
  }
  
  // Below you will find examples of how to save the decoded calls.
  // These are only examples, you can modify them to suit your needs.
  for (let i = 0; i < calls.usdcCallApproves.length; i++) {
    const c = calls.usdcCallApproves[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("outputParam0", c.outputParam0);
    obj.set("spender", c.spender);
    obj.set("value", c.value);
    call.jsonValue = obj.toString();
    call.type = "approve";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallBlacklists.length; i++) {
    const c = calls.usdcCallBlacklists[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("uAccount", c.uAccount);
    call.jsonValue = obj.toString();
    call.type = "blacklist";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallBurns.length; i++) {
    const c = calls.usdcCallBurns[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("uAmount", c.uAmount);
    call.jsonValue = obj.toString();
    call.type = "burn";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallCancelAuthorization1s.length; i++) {
    const c = calls.usdcCallCancelAuthorization1s[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("authorizer", c.authorizer);
    obj.set("nonce", c.nonce);
    obj.set("r", c.r);
    obj.set("s", c.s);
    obj.set("v", c.v);
    call.jsonValue = obj.toString();
    call.type = "cancelAuthorization1";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallCancelAuthorization2s.length; i++) {
    const c = calls.usdcCallCancelAuthorization2s[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("authorizer", c.authorizer);
    obj.set("nonce", c.nonce);
    obj.set("signature", c.signature);
    call.jsonValue = obj.toString();
    call.type = "cancelAuthorization2";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallChangeAdmins.length; i++) {
    const c = calls.usdcCallChangeAdmins[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("newAdmin", c.newAdmin);
    call.jsonValue = obj.toString();
    call.type = "changeAdmin";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallConfigureMinters.length; i++) {
    const c = calls.usdcCallConfigureMinters[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("minter", c.minter);
    obj.set("minterAllowedAmount", c.minterAllowedAmount);
    obj.set("outputParam0", c.outputParam0);
    call.jsonValue = obj.toString();
    call.type = "configureMinter";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallDecreaseAllowances.length; i++) {
    const c = calls.usdcCallDecreaseAllowances[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("decrement", c.decrement);
    obj.set("outputParam0", c.outputParam0);
    obj.set("spender", c.spender);
    call.jsonValue = obj.toString();
    call.type = "decreaseAllowance";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallIncreaseAllowances.length; i++) {
    const c = calls.usdcCallIncreaseAllowances[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("increment", c.increment);
    obj.set("outputParam0", c.outputParam0);
    obj.set("spender", c.spender);
    call.jsonValue = obj.toString();
    call.type = "increaseAllowance";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallInitializes.length; i++) {
    const c = calls.usdcCallInitializes[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("newBlacklister", c.newBlacklister);
    obj.set("newMasterMinter", c.newMasterMinter);
    obj.set("newOwner", c.newOwner);
    obj.set("newPauser", c.newPauser);
    obj.set("tokenCurrency", c.tokenCurrency);
    obj.set("tokenDecimals", c.tokenDecimals);
    obj.set("tokenName", c.tokenName);
    obj.set("tokenSymbol", c.tokenSymbol);
    call.jsonValue = obj.toString();
    call.type = "initialize";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallInitializeV2s.length; i++) {
    const c = calls.usdcCallInitializeV2s[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("newName", c.newName);
    call.jsonValue = obj.toString();
    call.type = "initializeV2";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallInitializeV21s.length; i++) {
    const c = calls.usdcCallInitializeV21s[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("lostAndFound", c.lostAndFound);
    call.jsonValue = obj.toString();
    call.type = "initializeV21";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallInitializeV22s.length; i++) {
    const c = calls.usdcCallInitializeV22s[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("accountsToBlacklist", c.accountsToBlacklist);
    obj.set("newSymbol", c.newSymbol);
    call.jsonValue = obj.toString();
    call.type = "initializeV22";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallMints.length; i++) {
    const c = calls.usdcCallMints[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("outputParam0", c.outputParam0);
    obj.set("uAmount", c.uAmount);
    obj.set("uTo", c.uTo);
    call.jsonValue = obj.toString();
    call.type = "mint";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallPauses.length; i++) {
    const c = calls.usdcCallPauses[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    call.jsonValue = obj.toString();
    call.type = "pause";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallPermit1s.length; i++) {
    const c = calls.usdcCallPermit1s[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("deadline", c.deadline);
    obj.set("owner", c.owner);
    obj.set("signature", c.signature);
    obj.set("spender", c.spender);
    obj.set("value", c.value);
    call.jsonValue = obj.toString();
    call.type = "permit1";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallPermit2s.length; i++) {
    const c = calls.usdcCallPermit2s[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("deadline", c.deadline);
    obj.set("owner", c.owner);
    obj.set("r", c.r);
    obj.set("s", c.s);
    obj.set("spender", c.spender);
    obj.set("v", c.v);
    obj.set("value", c.value);
    call.jsonValue = obj.toString();
    call.type = "permit2";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallReceiveWithAuthorization1s.length; i++) {
    const c = calls.usdcCallReceiveWithAuthorization1s[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("from", c.from);
    obj.set("nonce", c.nonce);
    obj.set("signature", c.signature);
    obj.set("to", c.to);
    obj.set("validAfter", c.validAfter);
    obj.set("validBefore", c.validBefore);
    obj.set("value", c.value);
    call.jsonValue = obj.toString();
    call.type = "receiveWithAuthorization1";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallReceiveWithAuthorization2s.length; i++) {
    const c = calls.usdcCallReceiveWithAuthorization2s[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("from", c.from);
    obj.set("nonce", c.nonce);
    obj.set("r", c.r);
    obj.set("s", c.s);
    obj.set("to", c.to);
    obj.set("v", c.v);
    obj.set("validAfter", c.validAfter);
    obj.set("validBefore", c.validBefore);
    obj.set("value", c.value);
    call.jsonValue = obj.toString();
    call.type = "receiveWithAuthorization2";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallRemoveMinters.length; i++) {
    const c = calls.usdcCallRemoveMinters[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("minter", c.minter);
    obj.set("outputParam0", c.outputParam0);
    call.jsonValue = obj.toString();
    call.type = "removeMinter";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallRescueErc20s.length; i++) {
    const c = calls.usdcCallRescueErc20s[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("amount", c.amount);
    obj.set("to", c.to);
    obj.set("tokenContract", c.tokenContract);
    call.jsonValue = obj.toString();
    call.type = "rescueErc20";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallTransfers.length; i++) {
    const c = calls.usdcCallTransfers[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("outputParam0", c.outputParam0);
    obj.set("to", c.to);
    obj.set("value", c.value);
    call.jsonValue = obj.toString();
    call.type = "transfer";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallTransferFroms.length; i++) {
    const c = calls.usdcCallTransferFroms[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("from", c.from);
    obj.set("outputParam0", c.outputParam0);
    obj.set("to", c.to);
    obj.set("value", c.value);
    call.jsonValue = obj.toString();
    call.type = "transferFrom";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallTransferOwnerships.length; i++) {
    const c = calls.usdcCallTransferOwnerships[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("newOwner", c.newOwner);
    call.jsonValue = obj.toString();
    call.type = "transferOwnership";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallTransferWithAuthorization1s.length; i++) {
    const c = calls.usdcCallTransferWithAuthorization1s[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("from", c.from);
    obj.set("nonce", c.nonce);
    obj.set("signature", c.signature);
    obj.set("to", c.to);
    obj.set("validAfter", c.validAfter);
    obj.set("validBefore", c.validBefore);
    obj.set("value", c.value);
    call.jsonValue = obj.toString();
    call.type = "transferWithAuthorization1";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallTransferWithAuthorization2s.length; i++) {
    const c = calls.usdcCallTransferWithAuthorization2s[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("from", c.from);
    obj.set("nonce", c.nonce);
    obj.set("r", c.r);
    obj.set("s", c.s);
    obj.set("to", c.to);
    obj.set("v", c.v);
    obj.set("validAfter", c.validAfter);
    obj.set("validBefore", c.validBefore);
    obj.set("value", c.value);
    call.jsonValue = obj.toString();
    call.type = "transferWithAuthorization2";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallUnBlacklists.length; i++) {
    const c = calls.usdcCallUnBlacklists[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("uAccount", c.uAccount);
    call.jsonValue = obj.toString();
    call.type = "unBlacklist";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallUnpauses.length; i++) {
    const c = calls.usdcCallUnpauses[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    call.jsonValue = obj.toString();
    call.type = "unpause";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallUpdateBlacklisters.length; i++) {
    const c = calls.usdcCallUpdateBlacklisters[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("uNewBlacklister", c.uNewBlacklister);
    call.jsonValue = obj.toString();
    call.type = "updateBlacklister";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallUpdateMasterMinters.length; i++) {
    const c = calls.usdcCallUpdateMasterMinters[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("uNewMasterMinter", c.uNewMasterMinter);
    call.jsonValue = obj.toString();
    call.type = "updateMasterMinter";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallUpdatePausers.length; i++) {
    const c = calls.usdcCallUpdatePausers[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("uNewPauser", c.uNewPauser);
    call.jsonValue = obj.toString();
    call.type = "updatePauser";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallUpdateRescuers.length; i++) {
    const c = calls.usdcCallUpdateRescuers[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("newRescuer", c.newRescuer);
    call.jsonValue = obj.toString();
    call.type = "updateRescuer";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallUpgradeTos.length; i++) {
    const c = calls.usdcCallUpgradeTos[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("newImplementation", c.newImplementation);
    call.jsonValue = obj.toString();
    call.type = "upgradeTo";
    call.save();
  }
  
  for (let i = 0; i < calls.usdcCallUpgradeToAndCalls.length; i++) {
    const c = calls.usdcCallUpgradeToAndCalls[i];
    let call = new Call(ID(c.callTxHash, i));
    let obj = new JSON.Obj();
    obj.set("callTxHash", c.callTxHash);
    obj.set("callBlockTime", c.callBlockTime);
    obj.set("callBlockNumber", c.callBlockNumber);
    obj.set("callOrdinal", c.callOrdinal);
    obj.set("callSuccess", c.callSuccess);
    obj.set("data", c.data);
    obj.set("newImplementation", c.newImplementation);
    call.jsonValue = obj.toString();
    call.type = "upgradeToAndCall";
    call.save();
  }
  
}

function ID(trxHash: string, i: u32): string {
  return trxHash + "-" + i.toString();
}
