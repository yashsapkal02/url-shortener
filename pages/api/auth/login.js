import { comparePassword, signToken } from "../../../lib/auth";
import dbConnect from "../../../lib/mongodb";
import User from "../../../models/User";

export default async function handler(req, res) {
  if (req.method !== "POST") 
    return res.status(405).json({ error: "Method not allowed" });

  await dbConnect();

  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const ok = await comparePassword(password, user.passwordHash);
  if (!ok) return res.status(401).json({ error: "Invalid credentials" });

  const token = signToken({ userId: user._id });

  return res.status(200).json({
    token,
    user: { name: user.name, email: user.email },
  });
}
