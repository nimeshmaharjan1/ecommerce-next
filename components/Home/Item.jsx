import Image from "next/image";
import Link from "next/link";
import React from "react";

const Item = ({ product }) => {
  return (
    <div className="card bg-base-100 shadow-md z-10">
      <Link href={`product/${product.slug}`}>
        <figure>
          <Image
            className="rounded-sm"
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
          />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.brand}</p>
        <p>${product.price}</p>
        <div className="card-actions mt-2 hover:cursor-pointer">
          <Link href={`product/${product.slug}`}>
            <button className="btn btn-primary w-full hover:cursor-pointer">
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
