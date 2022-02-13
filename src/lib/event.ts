import { captureMessage, setUser, setTags, flush } from "@sentry/nextjs";
import { NextApiRequest } from "next";
import { getClientIp } from "request-ip";
import { lookup } from "geoip-lite";

export const send = async ({
  message,
  req,
  link,
}: {
  message: string;
  req: NextApiRequest;
  link?: {
    short: string;
    full: string;
  };
}) => {
  setUser({
    ip_address: "{{auto}}",
  });
  const ip = getClientIp(req);
  const geo = lookup(ip ?? "");
  setTags({
    ip,
    country: geo?.country,
    city: geo?.city,
  });
  if (link) {
    setTags({
      short: link.short,
      full: link.full,
    });
  }
  captureMessage(message);
  await flush(2000);
};
