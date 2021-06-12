import React, { useState } from 'react';
import styled from 'styled-components';

const ImageLink = styled.a`
  text-decoration: none;
  background-image: none;
  text-shadow: none;
  position: relative;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

enum MediaType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  CAROUSEL_ALBUM = 'CAROUSEL_ALBUM',
}

interface InstagramFeedImageElementProps {
  mediaUrl: string;
  permalink: string;
  mediaType: MediaType;
  thumbnailUrl: string;
}

const InstagramFeedImageElement = ({
  permalink,
  mediaUrl,
  mediaType,
  thumbnailUrl,
}: InstagramFeedImageElementProps) => {
  return (
    <ImageLink href={permalink} rel="noopener noreferrer" target="_blank">
      <Image src={mediaType === MediaType.VIDEO ? thumbnailUrl : mediaUrl} />
    </ImageLink>
  );
};

export default InstagramFeedImageElement;
