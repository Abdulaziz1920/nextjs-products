"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

function CategoryPage() {
  const { categoryId } = useParams();
  useEffect(() => {
    const data = fetch(
      `https://vodiy-parfum-backend.vercel.app/api/v1/category=${categoryId}`
    );
    console.log(data);
  }, [categoryId]);

  return <div>CategoryPage</div>;
}

export default CategoryPage;
