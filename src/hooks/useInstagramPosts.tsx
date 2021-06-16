import { useEffect, useState } from 'react';

const maxInstagramFeedPhotos = 12;

const refreshIgToken = async () => {
  const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${process.env.GATSBY_IG_TOKEN}`;
  return await fetch(url);
};

const useInstagramPosts = () => {
  const [posts, setPosts] = useState<[any]>();
  const [isLoading, setisLoading] = useState<boolean>(false);
  const baseUrl = 'https://graph.instagram.com/me/media';
  const fields = 'id,media_url,permalink,thumbnail_url,media_type';
  const url = `${baseUrl}?fields=${fields}&access_token=${process.env.GATSBY_IG_TOKEN}`;

  useEffect(() => {
    getPosts();
    refreshIgToken();
  }, []);

  const getPosts = async () => {
    setisLoading(true);
    try {
      const response = await fetch(url);
      const igPosts = await response.json();
      setPosts(igPosts.data.slice(0, maxInstagramFeedPhotos));
    } catch (e) {
      console.error('Instagram Error:', e);
    }
    setisLoading(false);
  };

  return {
    isLoading,
    posts,
  };
};

export default useInstagramPosts;
