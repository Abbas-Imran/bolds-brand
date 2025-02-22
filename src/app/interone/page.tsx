import Breadcrumbs from "../components/modules/Products/breadcrumb";
import Filters from "../components/modules/Products/filter";
import ProductGrid from "../components/modules/Products/product-grid";
import SearchBar from "../components/modules/Products/search-bar";
import { monsterrat } from "../styles/font";
import ScrollToTopButton from "../components/widgets/scroll-top";

export default function ProductsPage() {
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
            Showing 1-12 of 21 results
          </p>
          <ProductGrid />
          <ScrollToTopButton />
        </div>
      </div>
    </div>
  );
}
