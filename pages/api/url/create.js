import { verifyTokenFromRequest } from "../../../lib/auth";
import dbConnect from "../../../lib/mongodb";
import Url from "../../../models/Url";

// Inline short code generator (NO external file needed)
function generateCode(length = 6) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  await dbConnect();

  const user = verifyTokenFromRequest(req);
  if (!user) return res.status(401).json({ error: "Unauthorized" });

  const { longUrl, label, customAlias } = req.body;

  // Use custom alias OR auto generate
  const shortCode = customAlias?.trim() || generateCode(6);

  try {
    const url = await Url.create({
      user: user.userId,
      longUrl,
      label: label || "",
      shortCode,
    });

    return res.status(201).json({ success: true, url });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to create short URL" });
  }
}
