import React, { useState } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const ImageLink = styled.a`
  text-decoration: none;
  background-image: none;
  text-shadow: none;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

const ImageOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre;
`;

interface InstagramFeedImageProps {
  instagramNode: any;
}

const InstagramFeedImage = ({ instagramNode }: InstagramFeedImageProps) => {
  const [isImageFocused, setMouseOverImage] = useState<boolean>(false);

  const childImageSharp = instagramNode.localFile && instagramNode.localFile.childImageSharp;
  return (
    <ImageLink
      href={`https://www.instagram.com/p/${instagramNode.id}/`}
      rel="noopener noreferrer"
      target="_blank"
      onMouseEnter={(): void => setMouseOverImage(true)}
      onMouseLeave={(): void => setMouseOverImage(false)}
      onFocus={(): void => setMouseOverImage(true)}
      onBlur={(): void => setMouseOverImage(false)}
    >
      {isImageFocused && (
        <ImageOverlay>
          <span role="img" aria-label="likes">
            💜
          </span>
          : {instagramNode.likes}{' '}
          <span role="img" aria-label="comments">
            💬
          </span>
          : {instagramNode.comments}
        </ImageOverlay>
      )}
      {childImageSharp && <Img fluid={childImageSharp.fluid} style={{ height: '100%' }} />}
    </ImageLink>
  );
};

export default InstagramFeedImage;
