const mongoose = require("mongoose");

const UserAccountSchema = new mongoose.Schema(
  {
    accountNo: {
      type: String,
    },
    availableBalance: {
      type: Number,
    },
    transactions: {
      type: Number,
    },
    withdrawals: {
      type: Number,
    },
    deposits: {
      type: Number,
    },
    fdr: {
      type: Number,
    },
    dps: {
      type: Number,
    },
    loans: {
      type: Number,
    },
    accountOwner: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserAccount", UserAccountSchema);
