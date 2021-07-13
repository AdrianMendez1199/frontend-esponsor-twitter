import React, { useEffect, useState } from 'react';

import Card from '../components/Card';
import Navbar from '../components/Navbar';
import LoadingCircle from '../components/LoadingCircle';
import Post from '../components/Post';
import Modal from '../components/Modal';
import PostForm from '../components/PostForm';
import usePosts from '../hooks/usePosts';

const Home = () => {
  const [page, setPage] = useState(1);
  const {
    data, hasMore, loading, setData,
  } = usePosts(page);
  const modalRef = React.createRef();

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

  const handleClick = () => {
    modalRef.current.style.display = 'block';
  };

  return (
    <div className="home-container">
      <Navbar />

      <Modal ref={modalRef}>
        <PostForm
          setData={setData}
          handleClose={handleClick}
        />
      </Modal>

      <div className="post-container__home">
        <Post handleClick={handleClick} />
      </div>

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
