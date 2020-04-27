import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import SocialIcons from './SocialIcons';

const Layout = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 780px) {
    display: grid;
    align-items: center;
    grid-template-rows: repeat(3, 1fr);
  }
`;

const Logo = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 500px;
  z-index: 1;

  @media only screen and (max-width: 780px) {
    position: initial;
    width: 300px;
    margin: 0 auto;
  }
`;

const SocialIconsWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  @media only screen and (max-width: 780px) {
    position: initial;
  }
`;

const MainSection = () => {
  const imageData = useStaticQuery(getImages);

  return (
    <Layout>
      <Logo>
        <Img fluid={imageData.logo.childImageSharp.fluid} />
      </Logo>
      <Img fluid={imageData.splashImage.childImageSharp.fluid} />
      <SocialIconsWrapper>
        <SocialIcons />
      </SocialIconsWrapper>
    </Layout>
  );
};

export default MainSection;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`;

const getImages = graphql`
  query {
    splashImage: file(relativePath: { eq: "images/main.jpg" }) {
      ...fluidImage
    }
    logo: file(relativePath: { eq: "images/logo.png" }) {
      ...fluidImage
    }
  }
`;
