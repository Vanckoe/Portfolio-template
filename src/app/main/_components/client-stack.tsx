"use client";

import dynamic from 'next/dynamic';

const Loading = dynamic(() => import("./loading"));

const Stack = dynamic(() => import("./stack"), {
  loading: () => <Loading />,
  ssr: false
});

const ClientStack = () => {
  return <Stack />;
};

export default ClientStack;