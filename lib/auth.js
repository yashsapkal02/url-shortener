// lib/auth.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error("Please set JWT_SECRET in .env.local");

// Hash password before saving user
export async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

// Compare plain password with hashed password
export async function comparePassword(plain, hashed) {
  return await bcrypt.compare(plain, hashed);
}

// Create a signed JWT token
export function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

// Verify JWT token and extract user info
export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (e) {
    return null;
  }
}

// Extract token automatically from request (API routes)
export function verifyTokenFromRequest(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return null;

  const token = authHeader.split(" ")[1];
  return verifyToken(token);
}
