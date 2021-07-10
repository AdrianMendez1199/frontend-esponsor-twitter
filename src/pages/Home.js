import React, { useEffect, useState } from 'react';

import Card from '../components/Card';
import Navbar from '../components/Navbar';
import LoadingCircle from '../components/LoadingCircle';
import usePosts from '../hooks/usePosts';

const Home = () => {
  const [page, setPage] = useState(1);
  const { data, hasMore, loading } = usePosts(page);

  const isScrolling = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop
      >= document.documentElement.offsetHeight && hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', isScrolling, { passive: true });
    return () => window.removeEventListener('scroll', isScrolling);
  }, [hasMore]);

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        {data && data.map((post) => (
          <Card
            content={post.message}
            username={post.user.username}
            key={post.id}
            createdAt={post.created_at}
          />
        ))}
        {loading && (
        <div className="loading-container">
          <LoadingCircle />
        </div>
        ) }
      </div>

      <div className="top" />
    </div>
  );
};
export default Home;
