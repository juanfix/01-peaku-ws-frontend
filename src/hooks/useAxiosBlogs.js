import { useState, useEffect } from 'react';

import { getBlogs } from '../helpers/getBlogs';
import { dataBlogs } from '../data/blogs';

export const useAxiosBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blog = getBlogs();
    blog
      .then((results) => {
        const { data } = results;
        setBlogs(data);
      })
      .catch((err) => {
        console.log(err);
        const { data } = dataBlogs;
        setBlogs(data);
      });
  }, []);

  return {
    blogs,
  };
};
