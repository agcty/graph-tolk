// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class InboxAdded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("name", Value.fromString(""));
    this.set("description", Value.fromString(""));
    this.set("condition_nftContract", Value.fromBytes(Bytes.empty()));
    this.set("condition_count", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save InboxAdded entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save InboxAdded entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("InboxAdded", id.toString(), this);
    }
  }

  static load(id: string): InboxAdded | null {
    return changetype<InboxAdded | null>(store.get("InboxAdded", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    return value!.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }

  get condition_nftContract(): Bytes {
    let value = this.get("condition_nftContract");
    return value!.toBytes();
  }

  set condition_nftContract(value: Bytes) {
    this.set("condition_nftContract", Value.fromBytes(value));
  }

  get condition_count(): BigInt {
    let value = this.get("condition_count");
    return value!.toBigInt();
  }

  set condition_count(value: BigInt) {
    this.set("condition_count", Value.fromBigInt(value));
  }
}

export class KeyAdded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("sender", Value.fromBytes(Bytes.empty()));
    this.set("key", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save KeyAdded entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save KeyAdded entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("KeyAdded", id.toString(), this);
    }
  }

  static load(id: string): KeyAdded | null {
    return changetype<KeyAdded | null>(store.get("KeyAdded", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get key(): string {
    let value = this.get("key");
    return value!.toString();
  }

  set key(value: string) {
    this.set("key", Value.fromString(value));
  }
}

export class Send extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("sender", Value.fromBytes(Bytes.empty()));
    this.set("receiver", Value.fromBytes(Bytes.empty()));
    this.set("content", Value.fromString(""));
    this.set("inboxName", Value.fromString(""));
    this.set("encrypted", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Send entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Send entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Send", id.toString(), this);
    }
  }

  static load(id: string): Send | null {
    return changetype<Send | null>(store.get("Send", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get receiver(): Bytes {
    let value = this.get("receiver");
    return value!.toBytes();
  }

  set receiver(value: Bytes) {
    this.set("receiver", Value.fromBytes(value));
  }

  get content(): string {
    let value = this.get("content");
    return value!.toString();
  }

  set content(value: string) {
    this.set("content", Value.fromString(value));
  }

  get inboxName(): string {
    let value = this.get("inboxName");
    return value!.toString();
  }

  set inboxName(value: string) {
    this.set("inboxName", Value.fromString(value));
  }

  get encrypted(): boolean {
    let value = this.get("encrypted");
    return value!.toBoolean();
  }

  set encrypted(value: boolean) {
    this.set("encrypted", Value.fromBoolean(value));
  }
}