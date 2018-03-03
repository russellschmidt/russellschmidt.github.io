import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import g from "glamorous";
import { css } from "glamor";

import { rhythm } from "../utils/typography";

let container = css({
  height: `calc(100vh - 248px)`,
});

const blogPostsContainer = css({
  display: `grid`,
  gridTemplateColumns: `repeat(12, 8%)`,
  gridTemplateRows: `auto`,
  width: `100%`,
  justifyContent: `space-evenly`,
});

let imageContainer = css({

});

let sidebarContainer = css({

});

let articleContainer = css({

});

export default () => (
  <div className={container}>
    <Helmet title={`About Russell Schmidt, a developer in Los Angeles, CA`}/>
    <h1>About</h1>
    <div className={blogPostsContainer}>
      <div className={imageContainer}>
      </div>
      <div className={sidebarContainer}>
      </div>
      <div className={articleContainer}>
      </div>
    </div>
  </div>
);
