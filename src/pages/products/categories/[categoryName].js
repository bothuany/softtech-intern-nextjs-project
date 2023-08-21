import React from 'react'

export default function CategoryPage({data}) {
  return (
    <div>CategoryPage</div>
  )
}
export async function getServerSideProps(context) {
    const categoryName = context.params.categoryName;
    const response = await fetch(dir.api+"products/categories/" + categoryName);
    const data = await response.json();
  
    return {
      props: {
        data,
      },
    };
  }
  