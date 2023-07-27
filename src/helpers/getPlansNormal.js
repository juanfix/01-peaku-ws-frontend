import trabookApi from '../api/trabookApi';

export const getPlansNormal = async () => {
  const { data: response } = await trabookApi.get('/plan-has-city');
  return response;
};
