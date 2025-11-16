import { verifyTokenFromRequest } from "../../../lib/auth";
import dbConnect from "../../../lib/mongodb";
import Url from "../../../models/Url";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  await dbConnect();

  const user = verifyTokenFromRequest(req);
  if (!user) return res.status(401).json({ error: "Unauthorized" });

  const { id } = req.query;

  const url = await Url.findOne({ _id: id, user: user.userId });

  if (!url) {
    return res.status(404).json({ error: "URL not found or not your data" });
  }

  await url.deleteOne();

  return res.status(200).json({ success: true });
}
