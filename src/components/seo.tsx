/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';

interface Props {
  title: string;
}

const SEO = ({ title }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <html lang="en-us" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      />

      {/* <!-- Search Engine --> */}
      <meta
        property="description"
        content="West coast rock and roll that's gnarly to a funky extreme."
      />
      <meta property="image" content="https://www.gnarfunkel.com/images/main-fb.jpg" />

      {/* <!-- Schema.org for Google --> */}
      <meta itemProp="name" content="~Gnarfunkel~" />
      <meta
        itemProp="description"
        content="West coast rock and roll that's gnarly to a funky extreme."
      />
      <meta itemProp="image" content="https://www.gnarfunkel.com/images/main-fb.jpg" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="~Gnarfunkel~" />
      <meta
        property="twitter:description"
        content="West coast rock and roll that's gnarly to a funky extreme."
      />
      <meta property="twitter:site" content="@gnarfunkelband" />
      <meta property="twitter:image:src" content="https://www.gnarfunkel.com/images/main-fb.jpg" />

      {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
      <meta property="og:title" content="~Gnarfunkel~" />
      <meta
        property="og:description"
        content="West coast rock and roll that's gnarly to a funky extreme."
      />
      <meta property="og:image" content="https://www.gnarfunkel.com/images/main-fb.jpg" />
      <meta
        property="og:image:secure_url"
        content="https://www.gnarfunkel.com/images/main-fb.jpg"
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1080" />
      <meta property="og:image:height" content="820" />
      <meta property="og:url" content="https://www.gnarfunkel.com/" />
      <meta property="og:site_name" content="~Gnarfunkel~" />
      <meta property="og:type" content="website" />

      {/* Songkick Widget */}
      <script async src="//widget.songkick.com/9888034/widget.js" />
    </Helmet>
  );
};

export default SEO;
