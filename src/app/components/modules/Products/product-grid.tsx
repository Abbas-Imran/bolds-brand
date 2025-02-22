"use client";
import ProductCard from "./product-card";
import { useState } from "react";
import Pagination from "./pagination";

export const products = [
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
