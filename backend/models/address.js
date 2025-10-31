import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  label: { type: String, default: 'Home' }, // Home / Office / etc
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String },
  state: { type: String },
  district: { type: String },
  pincode: { type: String },
  country: { type: String, default: 'India' },
  isDefault: { type: Boolean, default: false }
}, { timestamps: true });

const Address = mongoose.model('Address', AddressSchema);
export default Address;