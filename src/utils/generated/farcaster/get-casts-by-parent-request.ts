// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { CastId, CastIdT } from '../farcaster/cast-id';


export class GetCastsByParentRequest {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):GetCastsByParentRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsGetCastsByParentRequest(bb:flatbuffers.ByteBuffer, obj?:GetCastsByParentRequest):GetCastsByParentRequest {
  return (obj || new GetCastsByParentRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsGetCastsByParentRequest(bb:flatbuffers.ByteBuffer, obj?:GetCastsByParentRequest):GetCastsByParentRequest {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new GetCastsByParentRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

parent(obj?:CastId):CastId|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new CastId()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startGetCastsByParentRequest(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addParent(builder:flatbuffers.Builder, parentOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, parentOffset, 0);
}

static endGetCastsByParentRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createGetCastsByParentRequest(builder:flatbuffers.Builder, parentOffset:flatbuffers.Offset):flatbuffers.Offset {
  GetCastsByParentRequest.startGetCastsByParentRequest(builder);
  GetCastsByParentRequest.addParent(builder, parentOffset);
  return GetCastsByParentRequest.endGetCastsByParentRequest(builder);
}

unpack(): GetCastsByParentRequestT {
  return new GetCastsByParentRequestT(
    (this.parent() !== null ? this.parent()!.unpack() : null)
  );
}


unpackTo(_o: GetCastsByParentRequestT): void {
  _o.parent = (this.parent() !== null ? this.parent()!.unpack() : null);
}
}

export class GetCastsByParentRequestT {
constructor(
  public parent: CastIdT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const parent = (this.parent !== null ? this.parent!.pack(builder) : 0);

  return GetCastsByParentRequest.createGetCastsByParentRequest(builder,
    parent
  );
}
}