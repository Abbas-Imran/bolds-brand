export default function TopProducts() {
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
      title: "Fireproof Aluminum",
      subtitle: "Composite",
      type: "composite",
    },
  ];

  return (
    <section className="min-h-screen py-16 rounded-t-3xl">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-xl  sm:text-2xl md:max-w-4xl m-auto border-b pb-6 border-[#B2B2B2] text-center lg:text-6xl font-bold text-gray-700">
          TOP PRODUCTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl m-auto gap-4">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl relative pb-14">
              <div className="aspect-square bg-gradient-to-b rounded-xl from-[#F0EFF5] to-[#E9E9F1]">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="absolute bottom-0 w-full">
                <div className="bg-[#2A2A2A] max-w-36 py-1 rounded-t-xl m-auto">
                  <img
                    src={"/images/Interon LOGO 3.png"}
                    alt={product.title}
                    className="h-fit m-auto"
                  />
                </div>
                <div className="bg-[#2A2A2A] p-2 py-4 text-center">
                  <h3 className="text-2xl font-medium text-white">
                    {product.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
