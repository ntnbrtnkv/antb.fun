import { captureMessage, setUser, setTags, flush } from "@sentry/nextjs";
import { NextApiRequest } from "next";
import { getClientIp } from "request-ip";

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
  setTags({
    ip: getClientIp(req),
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
