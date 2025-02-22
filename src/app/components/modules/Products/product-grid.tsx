"use client";
import ProductCard from "./product-card";
import { useState } from "react";
import Pagination from "./pagination";

export const products = [
  {
    id: 1,
    image: "/images/3x module 1.png",
    title: "3x LED Module",
    type: "led",
  },
  {
    id: 2,
    image: "/images/3x module 1.png",
    title: "2x LED Module",
    type: "led",
  },
  {
    id: 3,
    image: "/images/3x module 1.png",
    title: "1x LED Module",
    type: "led",
  },
  {
    id: 4,
    image: "/images/3x module 1.png",
    title: "2x LED Module",
    subtitle: "Composite",
    type: "composite",
  },
  {
    id: 5,
    image: "/images/3x module 1.png",
    title: "3x LED Module",
    subtitle: "Composite",
    type: "composite",
  },

  {
    id: 6,
    image: "/images/3x module 1.png",
    title: "1x LED Module",
    type: "led",
  },
  {
    id: 7,
    image: "/images/3x module 1.png",
    title: "2x LED Module",
    subtitle: "Composite",
    type: "composite",
  },
  {
    id: 8,
    image: "/images/3x module 1.png",
    title: "3x LED Module",
    subtitle: "Composite",
    type: "composite",
  },
  {
    id: 9,
    image: "/images/3x module 1.png",
    title: "1x LED Module",
    type: "led",
  },
  {
    id: 10,
    image: "/images/3x module 1.png",
    title: "1x LED Module",
    subtitle: "Composite",
    type: "composite",
  },
  {
    id: 11,
    image: "/images/3x module 1.png",
    title: "2x LED Module",
    subtitle: "Composite",
    type: "composite",
  },
  {
    id: 12,
    image: "/images/3x module 1.png",
    title: "3x LED Module",
    type: "led",
  },
  {
    id: 13,
    image: "/images/3x module 1.png",
    title: "1x LED Module",
    subtitle: "Composite",
    type: "composite",
  },
  {
    id: 14,
    image: "/images/3x module 1.png",
    title: "2x LED Module",
    subtitle: "Composite",
    type: "composite",
  },
  {
    id: 15,
    image: "/images/3x module 1.png",
    title: "3x LED Module",
    subtitle: "Composite",
    type: "composite",
  },
];

export default function ProductGrid({
  currentPage,
  productsPerPage,
  onPageChange,
}: {
  currentPage: number;
  productsPerPage: number;
  onPageChange: (page: number) => void;
}) {
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  // Calculate indexes for pagination
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {paginatedProducts.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            subtitle={product.subtitle}
            type={product.type}
            id={product.id}
          />
        ))}
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
}
