import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10">
      <p className="text-textcol font-montserrat font-regular text-center">
        created by{" "}
        <a
          href="https://devchallenges.io/portfolio/gideon-del"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer font-bold"
        >
          Gideon
        </a>{" "}
        - devChallenges.io
      </p>
    </footer>
  );
};

export default Footer;
