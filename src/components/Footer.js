import React from "react";
import Link from "gatsby-link";
import g from "glamorous";
import { css } from "glamor";

import {rhythm} from "../utils/typography";

let slideItIn = css.keyframes('slideItIn', {
  '0%': {
    marginLeft: '200%',
    width: '300%',
  },
  '100%': {
    marginLeft: '0%',
    width: '300%',
  }
});

let bottomPulsate = css.keyframes('bottomPulsate', {
  '0%': { opacity: 0.85, textShadow: `0 0 20px #ff0000` },
  '25%': { opacity: 0.55, textShadow: `0 0 25px #bb3322` },
  '50%': { opacity: 0.75, textShadow: `0 0 20px #dd2222` },
  '75%': { opacity: 0.55, textShadow: `0 0 25px #aa4433` },
  '100%': { opacity: 0.85, textShadow: `0 0 20px #ff0000` },
});

let componentGrid = css({
  display: `grid`,
  gridTemplateColumns: `repeat(12, 8%)`,
  gridTemplateRows: `33px 33px`,
  borderTop: `1px solid #888`,
  width: `100%`,
  justifyContent: `space-evenly`,
});

let iconP = css({
  margin: 0,
  padding: `5px 0 0`,
  '@media (min-width: 768px)': {
    animation: `${slideItIn} 2s`,
  }
});

let iconA = css({
  margin: 0,
  padding: 0,
});

let iconImg = css({
  width: 20,
  height: 20,
});

let iconSquare = css({
  "&:hover": {
    borderRadius: `20%`,
  },
});

let iconCircle = css({
  "&:hover": {
    borderRadius: `50%`,
  },
});

let iconLinkedIn = css({
  "&:hover": {
    background: `rgba(0, 119, 181, 0.75)`,
    boxShadow: `0 0 6px 2px rgba(0, 119, 181, 0.8)`
  },
});

let iconGithub = css({
  "&:hover": {
    background: `rgba(24, 23, 23, 0.3)`,
    boxShadow: `0 0 6px 3px rgba(24, 23, 23, 0.5)`
  },
});

let iconTwitter = css({
  "&:hover": {
    background: `rgba(29, 161, 242, 0.75)`,
    boxShadow: `0 0 6px 3px rgba(29, 161, 242, 0.8)`
  },
});

let iconInstagram = css({
  "&:hover": {
    background: `rgba(228, 64, 95, 0.75)`,
    boxShadow: `0 0 6px 2px rgba(228, 64, 95, 0.8)`
  },
});

let iconGooglePlus = css({
  "&:hover": {
    background: `rgba(220, 78, 65, 0.75)`,
    boxShadow: `0 0 6px 3px rgba(220, 78, 65, 0.8)`
  },
});

let iconSnapchat = css({
  "&:hover": {
    background: `rgba(255, 252, 0, 0.75)`,
    boxShadow: `0 0 6px 2px rgba(255, 252, 0, 0.8)`
  },
});

let iconSteam = css({
  "&:hover": {
    background: `rgba(0, 0, 0, 0.3)`,
    boxShadow: `0 0 6px 3px rgba(0, 0, 0, 0.5)`
  },
});

let iconPinterest = css({
  "&:hover": {
    background: `rgba(189, 8, 28, 0.75)`,
    boxShadow: `0 0 6px 3px rgba(189, 8, 28, 0.8)`
  },
});

let iconCodeWars = css({
  "&:hover": {
    background: `rgba(173, 44, 39, 0.75)`,
    boxShadow: `0 0 6px 3px rgba(173, 44, 39, 0.8)`
  },
});

let iconStackOverflow = css({
  "&:hover": {
    background: `rgba(254, 122, 22, 0.75)`,
    boxShadow: `0 0 6px 2px rgba(254, 122, 22, 0.8)`
  },
});

let navLink = css({
  color: `#000`,
  fontStyle: `normal`,
  "&:hover": {
    textDecoration: `none`,
    animation: `${bottomPulsate} 2s ease-in infinite`,
  },
});

let footerParagraph = css({
  gridColumn: `span 3`,
  fontSize: 8,
  textAlign: `right`,
  textTransform: `uppercase`,
  "@media (min-width: 768px)": {
    fontSize: 12,
    fontWeight: 600,
    textAlign: `left`,
    margin: `auto 0`,
    gridColumn: `span 2`,
    animation: `${slideItIn} 2s`,
  }
});

export default () => (
  <footer className={componentGrid}>
    <p css={{
      gridColumn: `span 2`,
      fontSize: 9,
      margin: `auto 0`,
      textTransform: `uppercase`,
      "@media (min-width: 768px)": {
        fontSize: 14,
        animation: `${slideItIn} 2s`,
      }
    }}><Link to="/contact-me/" className={navLink} css={{fontWeight: `600`}}>Contact Me</Link></p>
    <p className={iconP} >
      <a className={iconA} href="https://linkedin.com/in/russellschmidt" target="_blank"><img className={`${iconImg} ${iconSquare} ${iconLinkedIn}`} src="https://s3.amazonaws.com/russell-personal/social-icons/linkedin.svg" alt="LinkedIn russellschmidt profile"/></a>
    </p>
    <p className={iconP}>
      <a className={iconA} href="https://github.com/russellschmidt" target="_blank"><img className={`${iconImg} ${iconCircle} ${iconGithub}`} src="https://s3.amazonaws.com/russell-personal/social-icons/github.svg" alt="GitHub russellschmidt profile"/></a>
    </p>
    <p className={iconP}>
      <a className={iconA} href="https://twitter.com/russ_eel" target="_blank"><img className={`${iconImg} ${iconCircle} ${iconTwitter}`} src="https://s3.amazonaws.com/russell-personal/social-icons/twitter.svg" alt="Twitter profile @russ-eel"/></a>
    </p>
    <p className={iconP}>
      <a className={iconA} href="https://www.instagram.com/russ_eel/" target="_blank"><img className={`${iconImg} ${iconSquare} ${iconInstagram}`} src="https://s3.amazonaws.com/russell-personal/social-icons/instagram.svg" alt="Instagram @russ_eel"/></a>
    </p>
    <p className={iconP}>
      <a className={iconA} href="https://plus.google.com/u/0/115439838839649200716" target="_blank"><img className={`${iconImg} ${iconCircle} ${iconGooglePlus}`}  src="https://s3.amazonaws.com/russell-personal/social-icons/googleplus.svg" alt="Google+ Google Plus everyone's favorite social site"/></a>
    </p>
    <p className={iconP}>
      <a className={iconA} href="http://snapchat.com/add/rms-one" target="_blank"><img className={`${iconImg} ${iconSquare} ${iconSnapchat}`} src="https://s3.amazonaws.com/russell-personal/social-icons/snapchat.svg" alt="Snapchat"/></a>
    </p>
    <p className={iconP}>
      <a className={iconA} href="http://steamcommunity.com/id/russ-eel/" target="_blank"><img className={`${iconImg} ${iconCircle} ${iconSteam}`} src="https://s3.amazonaws.com/russell-personal/social-icons/steam.svg" alt="Steam user russ-eel"/></a>
    </p>
    <p className={iconP}>
      <a className={iconA} href="https://www.pinterest.com/rschmidt0378/" target="_blank"><img className={`${iconImg} ${iconCircle} ${iconPinterest}`} src="https://s3.amazonaws.com/russell-personal/social-icons/pinterest.svg" alt="Pinterest rschmidt0378"/></a>
    </p>
    <p className={iconP}>
      <a className={iconA} href="https://www.codewars.com/users/russellschmidt" target="_blank"><img className={`${iconImg} ${iconCircle} ${iconCodeWars}`} src="https://s3.amazonaws.com/russell-personal/social-icons/codewars.svg" alt="CodeWars Russell Schmidt profile"/></a>
    </p>
    <p className={iconP}>
      <a className={iconA} href="https://stackoverflow.com/users/1834685/russell-schmidt" target="_blank"><img className={`${iconImg} ${iconSquare} ${iconStackOverflow}`} src="https://s3.amazonaws.com/russell-personal/social-icons/stackoverflow.svg" alt="Stack Overflow Russell Schmidt profile"/></a>
    </p>


    <p className={footerParagraph}>
      &copy; {new Date().getFullYear()} Russell Schmidt - All Rights Reserved
    </p>
    <p className={footerParagraph}>
      <Link className={navLink} to="/privacy/" css={{ }}>Privacy Policy</Link>
    </p>
    <p className={footerParagraph}>
      <Link className={navLink} to="/terms-of-service/" css={{ }}>Terms of Service</Link>
    </p>
    <p className={footerParagraph}> <Link className={navLink} to="/sitemap.xml" css={{ }}>Site Map</Link>
    </p>
  </footer>
);
