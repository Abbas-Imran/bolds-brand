"use client";
import Breadcrumbs from "../components/modules/Products/breadcrumb";
import Filters from "../components/modules/Products/filter";
import ProductGrid, {
  products,
} from "../components/modules/Products/product-grid";
import SearchBar from "../components/modules/Products/search-bar";
import { monsterrat } from "../styles/font";
import ScrollToTopButton from "../components/widgets/scroll-top";
import { useState } from "react";

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const totalProducts = products.length;

  const startIndex = (currentPage - 1) * productsPerPage + 1;
  const endIndex = Math.min(currentPage * productsPerPage, totalProducts);

  return (
    <div className="relative min-h-screen ">
      <Breadcrumbs />
      <SearchBar />

      <div className="flex flex-col md:flex-row px-6">
        <Filters />
        <div className="w-full md:w-3/4">
          <p
            className={`${monsterrat.className} text-right text-xl text-[#262626] px-4`}
          >
            Showing {startIndex}-{endIndex} of {totalProducts} results
          </p>
          <ProductGrid
            currentPage={currentPage}
            productsPerPage={productsPerPage}
            onPageChange={setCurrentPage}
          />

          <ScrollToTopButton />
        </div>
      </div>
    </div>
  );
}
