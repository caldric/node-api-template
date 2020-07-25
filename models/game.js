// Dependency
const mongoose = require('mongoose');

// Schema
const rowSchema = new mongoose.Schema({
  1: { type: String, default: '' },
  2: { type: String, default: '' },
  3: { type: String, default: '' },
  4: { type: String, default: '' },
  5: { type: String, default: '' },
  6: { type: String, default: '' },
  7: { type: String, default: '' },
  8: { type: String, default: '' },
  9: { type: String, default: '' },
  10: { type: String, default: '' },
});

const boardSchema = new mongoose.Schema({
  A: { type: rowSchema, default: {} },
  B: { type: rowSchema, default: {} },
  C: { type: rowSchema, default: {} },
  D: { type: rowSchema, default: {} },
  E: { type: rowSchema, default: {} },
  F: { type: rowSchema, default: {} },
  G: { type: rowSchema, default: {} },
  H: { type: rowSchema, default: {} },
  I: { type: rowSchema, default: {} },
  J: { type: rowSchema, default: {} },
});

const gameSchema = new mongoose.Schema({
  board1: { type: boardSchema, default: {} },
  board2: { type: boardSchema, default: {} },
});

// const gameSchema = new mongoose.Schema({
//   userID1: { type: mongoose.ObjectId, required: true, unique: true },
//   userID2: { type: mongoose.ObjectId, required: false, unique: true },
//   carrier: { type: Number, default: 5, min: [0, 'Invalid number'] },
//   battleship: { type: Number, default: 4, min: [0, 'Invalid number'] },
//   cruiser: { type: Number, default: 3, min: [0, 'Invalid number'] },
//   submarine: { type: Number, default: 3, min: [0, 'Invalid number'] },
//   destroyer: { type: Number, default: 2, min: [0, 'Invalid number'] },
//   userBoard1: {
//     A: {
//       1: { type: String, default: 0 },
//       2: { type: String, default: 0 },
//       3: { type: String, default: 0 },
//       4: { type: String, default: 0 },
//       5: { type: String, default: 0 },
//       6: { type: String, default: 0 },
//       7: { type: String, default: 0 },
//       8: { type: String, default: 0 },
//       9: { type: String, default: 0 },
//       10: { type: String, default: 0 },
//     },
//   },
//   userBoard2: {
//     A: {
//       1: { type: String, default: 0 },
//       2: { type: String, default: 0 },
//       3: { type: String, default: 0 },
//       4: { type: String, default: 0 },
//       5: { type: String, default: 0 },
//       6: { type: String, default: 0 },
//       7: { type: String, default: 0 },
//       8: { type: String, default: 0 },
//       9: { type: String, default: 0 },
//       10: { type: String, default: 0 },
//     },
//   },
// });

// Model export
module.exports = mongoose.model('Game', gameSchema);
