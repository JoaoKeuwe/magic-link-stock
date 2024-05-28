import React from "react";
import Email from "../../emails/index";
import { render } from "@react-email/render";

const html = render(<Email />, {
  pretty: true,
});

console.log('teste' ,html);
