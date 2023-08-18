import { useRouter } from 'next/router';
import React from 'react'

export default function ProductsPage({data}) {
  const router = useRouter();
  return (
    <div>ProductsPage</div>
  )
}

export async function getServerSideProps() {

  const response = await fetch("https://fakestoreapi.com/products/");
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}