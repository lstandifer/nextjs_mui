import React from 'react';
import { useRouter } from 'next/router';

const Id = () => {
  const router = useRouter();

  return <div>User Id: {router.query.id}</div>;
};

export default Id;
