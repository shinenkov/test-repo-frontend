import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const fetchPosts = async (limit: number, page: number) => {
  const response = await apiClient.get(
    `/posts?_limit=${limit}&_start=${page * limit}`
  );
  return response.data;
};

export const fetchComments = async (postId: number) => {
  const response = await apiClient.get(`/comments?postId=${postId}`);
  return response.data;
};

export const updatePostBody = async (postId: number, body: string) => {
  const response = await apiClient.patch(`/posts/${postId}`, { body });
  return response.data;
};
