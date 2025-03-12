import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
    default: Date.now,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);