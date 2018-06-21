// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var Neuralyzer = Neuralyzer || {};

/**
 * @const
 * @namespace
 */
Neuralyzer.Transport = Neuralyzer.Transport || {};

/**
 * @const
 * @namespace
 */
Neuralyzer.Transport.FlatBuffers = Neuralyzer.Transport.FlatBuffers || {};

/**
 * @constructor
 */
Neuralyzer.Transport.FlatBuffers.Vector3 = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Neuralyzer.Transport.FlatBuffers.Vector3}
 */
Neuralyzer.Transport.FlatBuffers.Vector3.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @returns {number}
 */
Neuralyzer.Transport.FlatBuffers.Vector3.prototype.x = function() {
  return this.bb.readFloat32(this.bb_pos);
};

/**
 * @returns {number}
 */
Neuralyzer.Transport.FlatBuffers.Vector3.prototype.y = function() {
  return this.bb.readFloat32(this.bb_pos + 4);
};

/**
 * @returns {number}
 */
Neuralyzer.Transport.FlatBuffers.Vector3.prototype.z = function() {
  return this.bb.readFloat32(this.bb_pos + 8);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {flatbuffers.Offset}
 */
Neuralyzer.Transport.FlatBuffers.Vector3.createVector3 = function(builder, x, y, z) {
  builder.prep(4, 12);
  builder.writeFloat32(z);
  builder.writeFloat32(y);
  builder.writeFloat32(x);
  return builder.offset();
};

/**
 * @constructor
 */
Neuralyzer.Transport.FlatBuffers.TargetPlacement = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Neuralyzer.Transport.FlatBuffers.TargetPlacement}
 */
Neuralyzer.Transport.FlatBuffers.TargetPlacement.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Neuralyzer.Transport.FlatBuffers.TargetPlacement=} obj
 * @returns {Neuralyzer.Transport.FlatBuffers.TargetPlacement}
 */
Neuralyzer.Transport.FlatBuffers.TargetPlacement.getRootAsTargetPlacement = function(bb, obj) {
  return (obj || new Neuralyzer.Transport.FlatBuffers.TargetPlacement).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
Neuralyzer.Transport.FlatBuffers.TargetPlacement.prototype.id = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Neuralyzer.Transport.FlatBuffers.TargetPlacement.prototype.name = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {Neuralyzer.Transport.FlatBuffers.Vector3=} obj
 * @returns {Neuralyzer.Transport.FlatBuffers.Vector3|null}
 */
Neuralyzer.Transport.FlatBuffers.TargetPlacement.prototype.position = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? (obj || new Neuralyzer.Transport.FlatBuffers.Vector3).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Neuralyzer.Transport.FlatBuffers.TargetPlacement.startTargetPlacement = function(builder) {
  builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} id
 */
Neuralyzer.Transport.FlatBuffers.TargetPlacement.addId = function(builder, id) {
  builder.addFieldInt32(0, id, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} nameOffset
 */
Neuralyzer.Transport.FlatBuffers.TargetPlacement.addName = function(builder, nameOffset) {
  builder.addFieldOffset(1, nameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} positionOffset
 */
Neuralyzer.Transport.FlatBuffers.TargetPlacement.addPosition = function(builder, positionOffset) {
  builder.addFieldStruct(2, positionOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Neuralyzer.Transport.FlatBuffers.TargetPlacement.endTargetPlacement = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
Neuralyzer.Transport.FlatBuffers.TargetPlacement.finishTargetPlacementBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.Neuralyzer = Neuralyzer;
