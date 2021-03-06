import { useEffect, useState } from 'react';
import API from '../helpers/api';

const usePosts = (pageNumber) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    API.get(`/api/home?page=${pageNumber}`).then(async ({ data: posts }) => {
      setData((prev) => [...prev, ...posts.data]);
      setLoading(false);
      setHasMore(posts.next_page_url != null);
    }).catch(() => {
      setLoading(false);
      setError(true);
    });
  }, [pageNumber]);

  return {
    loading,
    error,
    data,
    hasMore,
    setData,
  };
};

export default usePosts;
