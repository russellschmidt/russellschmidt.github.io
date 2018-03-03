import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import g from "glamorous";
import { css } from "glamor";

export default () => (
  <div>
    <Helmet title={`About Russell Schmidt, a developer in Los Angeles, CA`}/>
    <h1>About</h1>
    <p>
      <a href="mailto:me@example.com">me@example.com</a>
    </p>
  </div>
);
