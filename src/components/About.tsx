import React from "react";
import PageTitle from "./layout/PageTitle";

const About: React.FC = () =>
  <>
    <PageTitle title="Might and Magic Tools" />
    <p>
      Welcome to Might and Magic Tools. Here you'll
      find some tools and info to help you play the games.
    </p>
    <p>
      Have an idea or a request?
      Email me: enigmabrand &lt;at&gt; gmail.
    </p>
    <p>
      The source code for this webapp is <a href="https://github.com/jschnurer/mm-tools">available on github</a>.
    </p>
  </>;

export default About;