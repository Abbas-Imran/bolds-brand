import { BreadcrumbsProductDetails } from "@/app/components/modules/Products/breadcrumb";
import ContentRight from "@/app/components/modules/Products/Product-details/content-right";
import ProductDetailDescription from "@/app/components/modules/Products/Product-details/detail-description";
import ProductDetailImages from "@/app/components/modules/Products/Product-details/product-detail-images";
import RelatedProducts from "@/app/components/modules/Products/Product-details/related-products";

export default function ProductDetailsPage() {
  return (
    <div className="max-w-7xl mx-auto  md:px-40">
      <BreadcrumbsProductDetails />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-start">
        <ProductDetailImages />
        <ContentRight />
      </div>
      <div className="mt-14">
        <ProductDetailDescription />
      </div>
      <div className="mt-16">
        <RelatedProducts />
      </div>
    </div>
  );
}
