import React, { useEffect, useState } from 'react';

import Card from '../components/Card';
import Navbar from '../components/Navbar';
import usePosts from '../hooks/usePosts';

const Home = () => {
  const [page, setPage] = useState(1);
  const { data, hasMore } = usePosts(page);

  const isScrolling = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop
      !== document.documentElement.offsetHeight) {
      console.log('scrolling down2');
    } else {
      console.log('hasmore', hasMore);
      if (hasMore) {
        setPage((prev) => prev + 1);
      }
      console.log('scrolling down');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', isScrolling);
    return () => window.removeEventListener('scroll', isScrolling);
  }, [hasMore]);

  return (
    <div className="home-container">
      <Navbar />
      {data.data && data.data.map((post) => (
        <Card
          content={post.message}
          username={post.user.username}
          key={post.id}
        />
      ))}
    </div>
  );
};
export default Home;
