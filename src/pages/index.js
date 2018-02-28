import React from "react";
import g from "glamorous";
import { css } from "glamor";

import {rhythm} from "../utils/typography";

let mainContainer = css({
  display: `grid`,
  gridTemplateColumns: `66% 33%`,
  gridTemplateRows: `50% 25% auto`,
});


export default () => (
  <div className={mainContainer}>
    <article>art1</article>
    <article>art2</article>
    <footer>foot</footer>
  </div>
);
