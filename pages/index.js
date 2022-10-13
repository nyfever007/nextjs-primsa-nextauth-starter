import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const { data: posts, error } = usePost();
  return <div>starter</div>;
}
