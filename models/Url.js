// models/Url.js
import mongoose from 'mongoose';

const UrlSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  label: { type: String, default: '' },
  longUrl: { type: String, required: true },
  shortCode: { type: String, required: true, unique: true },
  clicks: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.models.Url || mongoose.model('Url', UrlSchema);
