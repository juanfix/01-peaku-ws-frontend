import trabookApi from '../api/trabookApi';

export const getPlansWithDiscount = async () => {
  const { data: response } = await trabookApi.get('/plan-has-city/discount');
  return response;
};
