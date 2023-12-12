import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import dbConnect from "../../../utils/dbConnect";
import Registrant from "../../../models/Registrants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  const session = await getServerSession(req, res, authOptions);

  const isSessionActive = () => {
    if (!session) {
      return res.status(401).json({ errorMessage: "Not authorized" });
    }
  };

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        isSessionActive();

        const registrant = await Registrant.find({});

        if (!registrant) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: registrant });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const {
          firstName,
          lastName,
          attendanceStatus,
          preferredEntree,
          dietaryRestrictions,
          guests = [],
        } = req.body;

        const newRegistrant = new Registrant({
          firstName,
          lastName,
          attendanceStatus,
          preferredEntree,
          dietaryRestrictions,
          guests,
        });

        await newRegistrant.save();

        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        isSessionActive();

        const registrant = await Registrant.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!registrant) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: registrant });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        isSessionActive();

        const deletedRegistrant = await Registrant.deleteOne({ _id: id });
        if (!deletedRegistrant) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
