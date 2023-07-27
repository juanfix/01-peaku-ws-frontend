import trabookApi from '../api/trabookApi';

export const getBlogs = async () => {
  const { data: response } = await trabookApi.get('/blog');
  return response;
};
