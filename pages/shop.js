import Layout from "../components/layout/layout";
import Product from "../components/shop/Product";

function shop() {
  const products = [
    {
      name: "Product 1",
      price: "$10.99",
      imageUrl: "/assets/imgs/news/news-4.jpg",
    },
    {
      name: "Product 2",
      price: "$29.99",
      imageUrl: "/product2.jpg",
    },
    {
      name: "Product 3",
      price: "$9.99",
      imageUrl: "/product3.jpg",
    },
    {
      name: "Product 4",
      price: "$15.99",
      imageUrl: "/product4.jpg",
    },
  ];
  return (
    <>
      <Layout>
        <main className="container">
          <div className="flex flex-col lg:flex-row mt-24">
            <div className="w-full lg:w-1/4 bg-gray-200 p-4 mr-3">
              {/* Filters component goes here */}
            </div>
            <div className="w-full lg:w-3/4">
              <div className="grid grid-cols-3 gap-3">
                {products.map((product) => (
                  <Product key={product.name} product={product} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

export default shop;