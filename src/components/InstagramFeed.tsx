import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import InstagramFeedImage from './InstagramFeedImage';

interface Edge {
  node: {
    timestamp: number;
  };
}

const ImagesLayout = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;

  @media only screen and (max-width: 780px) {
    grid-column-gap: 4px;
    grid-row-gap: 4px;
  }
`;

const MainSection = () => {
  const postData = useStaticQuery(getPosts);
  postData.allInstaNode.edges.sort(
    (postA: Edge, postB: Edge) => postB.node.timestamp - postA.node.timestamp,
  );

  return (
    <ImagesLayout>
      {postData.allInstaNode.edges.map(({ node }) => (
        <InstagramFeedImage key={node.id} instagramNode={node} />
      ))}
    </ImagesLayout>
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

const getPosts = graphql`
  query {
    allInstaNode {
      edges {
        node {
          id
          likes
          comments
          timestamp
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
