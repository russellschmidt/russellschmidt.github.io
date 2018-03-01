import React from "react";
import Link from "gatsby-link";
import g from "glamorous";
import { css } from "glamor";

import {rhythm} from "../utils/typography";

let componentGrid = css({
  display: `grid`,
  gridTemplateColumns: `repeat(12, 8%)`,
  gridTemplateRows: `auto`,
  borderTop: `1px solid #333`,
  width: `100%`,
  justifyContent: `space-evenly`,
});

export default () => (
  <footer className={componentGrid}>
    <p>hi</p>
  </footer>
);
