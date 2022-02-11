import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { captureException, flush } from "@sentry/nextjs";

export const handleError =
  (handler: NextApiHandler) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await handler(req, res);
    } catch (err: any) {
      if (err?.name === "ValidationError") {
        return res.status(400).json({ error: err.message });
      }
      captureException(err);
      await flush(2000);
      return res.status(500).json({ error: err?.message || err });
    }
  };
