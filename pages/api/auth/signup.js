// pages/api/auth/signup.js
import { hashPassword, signToken } from '../../../lib/auth';
import dbConnect from '../../../lib/mongodb';
import User from '../../../models/User';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ error: 'Missing fields' });

  await dbConnect();
  const existing = await User.findOne({ email });
  if (existing) return res.status(409).json({ error: 'Email already in use' });

  const passwordHash = await hashPassword(password);
  const user = await User.create({ name, email, passwordHash });

  const token = signToken({ userId: user._id, email: user.email });
  return res.status(201).json({ token, user: { id: user._id, name: user.name, email: user.email }});
}
