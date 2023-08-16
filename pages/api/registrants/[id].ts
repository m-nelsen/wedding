import type { NextApiRequest, NextApiResponse } from "next";
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

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        // const registrant = await Registrant.findById(id);
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
        const { firstName, lastName } = req.body;

        const newRegistrant = new Registrant({ firstName, lastName });

        await newRegistrant.save();

        res.status(200).json({ success: true, data: newRegistrant });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
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
