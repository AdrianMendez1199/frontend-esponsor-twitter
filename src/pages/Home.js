import React from 'react';

// import Card from '../components/Card';
import Navbar from '../components/Navbar';
// import API from '../helpers/api';
// import usePosts from '../hooks/usePosts';

const Home = () => (
  <div className="home-container">
    <Navbar />
    {/* {posts.data && posts.data.map((post) => (
        <Card content={post.body} user={post.user.name} key={post.id} />
      ))} */}
  </div>
);
export default Home;
