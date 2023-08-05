import Image from "next/image";
import "@/app/home.scss";
import Link from "next/link";

async function getData() {
  const response = await fetch(
    "https://vodiy-parfum-backend.vercel.app/api/v1/category",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
}

export default async function Home() {
  const category = await getData();
  return (
    <section>
      <div className="container">
        <div className="category">
          <div className="category_title">
            <h1>Categories</h1>
          </div>
          <div className="category_cards">
            {category.map((category) => {
              return (
                <div key={category._id} className="items">
                  <Image
                    src={category.images.url}
                    width="56"
                    height="56"
                    alt=""
                  />
                  <Link href={`category/${category._id}`}>{category.name}</Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
