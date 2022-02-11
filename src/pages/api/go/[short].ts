import type { NextApiRequest, NextApiResponse } from "next";
import { handleError } from "@/lib/handleError";
import links from "links.json";
import { send } from "@/lib/event";

export default handleError(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { short } = req.query;

  const link = links.find((link) => link.short === short);

  if (link) {
    await send({
      message: "redirect",
      req,
      link,
    });
    res.redirect(link.full);
  } else {
    await send({
      message: "redirect-not-found",
      req,
    });
    res.status(404).end();
  }
});
