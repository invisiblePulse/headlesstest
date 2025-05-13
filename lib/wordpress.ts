import axios from 'axios';

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || 'https://worldpulsetrends.com/wp-json/wp/v2';

export async function getPosts() {
  try {
    const response = await axios.get(`${WP_API_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPost(slug: string) {
  try {
    const response = await axios.get(`${WP_API_URL}/posts?slug=${slug}`);
    return response.data[0] || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}