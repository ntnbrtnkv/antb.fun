import type { NextApiRequest, NextApiResponse } from "next";
import { handleError } from "@/lib/handleError";
import links from "links.json";
import { send } from "@/lib/event";

export default handleError(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const [short, ...rest] = req.query.path as string[];

  const link = links.find((link) => link.short === short);

  console.log(rest);

  if (link) {
    await send({
      message: "redirect",
      req,
      link,
    });
    res.redirect(`${link.full}/${rest.join("/")}`);
  } else {
    await send({
      message: "redirect-not-found",
      req,
    });
    res.redirect("/404");
  }
});
