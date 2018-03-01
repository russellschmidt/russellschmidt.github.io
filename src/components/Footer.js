import React from "react";
import Link from "gatsby-link";
import g from "glamorous";
import { css } from "glamor";

import {rhythm} from "../utils/typography";

let gridContainer = css({
  height: `100%`,
  width: `100%`,
  display: `grid`,
  gridTemplateColumns: `repeat(12, 8.333%)`,
  gridTemplateRows: `10vh auto 5vh`,
})

export default () => (
  <footer>
    <h6>I am foooter</h6>
  </footer>
);
