import React from 'react';

// Libraries
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { useLocation } from '@reach/router';

const SEO = ({ title, description, img }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          canonicalUrl
          image
          organization {
            name
            url
            logo
          }
          social {
            twitter
            fbAppID
          }
        }
      }
    }
  `);

  const { pathname } = useLocation();

  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    image: img || `${siteMetadata.canonicalUrl}${siteMetadata.image}`,
    url: `${siteMetadata.canonicalUrl}${pathname}`,
    social: siteMetadata.social,
  };

  return (
    <Helmet>
      {/* General tags */}
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />

      {/* OpenGraph tags */}
      <meta property='og:url' content={seo.url} />
      <meta property='og:title' content={seo.title} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:image' content={seo.image} />
      <meta property='fb:app_id' content={seo.social.fbAppID} />

      {/* Twitter Card tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content={seo.social.twitter} />
      <meta name='twitter:title' content={seo.title} />
      <meta name='twitter:description' content={seo.description} />
      <meta name='twitter:image' content={seo.image} />
    </Helmet>
  );
};

export default SEO;
