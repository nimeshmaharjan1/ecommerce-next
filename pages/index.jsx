import Head from "next/head";
import Image from "next/image";
import Item from "../components/Home/Item";
import Layout from "../components/Layout";
import data from "../utils/data";
export default function Home() {
  return (
    <Layout title={"Home"}>
      <section className="home-section mt-3 mb-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {data.products.map((product) => (
            <Item product={product} key={product.slug}></Item>
          ))}
        </div>
      </section>
    </Layout>
  );
}
