import React from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import { useCtxUser } from '../userContext';

const Home = () => {
  const [user] = useCtxUser();
  return (
    <div>
      <Navbar />
      <main>
        {user && <Card username={user.name} /> }
      </main>
    </div>
  );
};

export default Home;
