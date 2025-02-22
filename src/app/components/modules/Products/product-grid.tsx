"use client";
import ProductCard from "./product-card";
import { useState } from "react";
import Pagination from "./pagination";

const products = [
  {
    image: "/images/3x module 1.png",
    title: "3x LED Module",
    type: "led",
  },
  {
    image: "/images/3x module 1.png",
    title: "2x LED Module",
    type: "led",
  },
  {
    image: "/images/3x module 1.png",
    title: "1x LED Module",
    type: "led",
  },
  {
    image: "/images/3x module 1.png",
    title: "Fireproof Aluminum",
    subtitle: "Composite",
    type: "composite",
  },
  {
    image: "/images/3x module 1.png",
    title: "Fireproof Aluminum",
    subtitle: "Composite",
    type: "composite",
  },

  {
    image: "/images/3x module 1.png",
    title: "1x LED Module",
    type: "led",
  },
  {
    image: "/images/3x module 1.png",
    title: "Fireproof Aluminum",
    subtitle: "Composite",
    type: "composite",
  },
  {
    image: "/images/3x module 1.png",
    title: "Fireproof Aluminum",
    subtitle: "Composite",
    type: "composite",
  },
  {
    image: "/images/3x module 1.png",
    title: "1x LED Module",
    type: "led",
  },
  {
    image: "/images/3x module 1.png",
    title: "Fireproof Aluminum",
    subtitle: "Composite",
    type: "composite",
  },
  {
    image: "/images/3x module 1.png",
    title: "Fireproof Aluminum",
    subtitle: "Composite",
    type: "composite",
  },
  {
    image: "/images/3x module 1.png",
    title: "1x LED Module",
    type: "led",
  },
  {
    image: "/images/3x module 1.png",
    title: "Fireproof Aluminum",
    subtitle: "Composite",
    type: "composite",
  },
  {
    image: "/images/3x module 1.png",
    title: "Fireproof Aluminum",
    subtitle: "Composite",
    type: "composite",
  },
  {
    image: "/images/3x module 1.png",
    title: "Fireproof Aluminum",
    subtitle: "Composite",
    type: "composite",
  },
];

export default function ProductGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            subtitle={product.subtitle}
            type={product.type}
          />
        ))}
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
