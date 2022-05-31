import { createContext, useState, useContext, useEffect } from "react";
import query from "../services/api/api.service";

const ProductsByCategoryContext = createContext({
  products: {
    isLoading: false,
    isError: false,
    products: [],
  },
  getProductsByCategory: (category) => {},
});

ProductsByCategoryContext.displayName = "ProductsByCategoryContext";

export const useProductsByCategory = () =>
  useContext(ProductsByCategoryContext);

const ProductsByCategoryProvider = ({ children }) => {
  const [category, setCategory] = useState("all");
  const [products, setProducts] = useState({
    isLoading: false,
    isError: false,
    products: [],
  });

  const getProductsByCategory = (category) => {
    setCategory(category);
  };

  useEffect(() => {
    if (category === "all") return;
    else {
      setProducts({ isLoading: true, isError: false, products: [] });
      query
        .getProductByCategory(category)
        .then((result) => {
          if (result.name !== "AxiosError") {
            setProducts({
              isLoading: false,
              isError: false,
              products: result.data,
            });
          } else {
            setProducts({
              isLoading: false,
              isError: true,
              products: [],
            });
          }
        })
        .catch((error) => {
          setProducts({
            isLoading: false,
            isError: true,
            products: [],
          });
        });
    }
  }, [category]);

  return (
    <ProductsByCategoryContext.Provider
      value={{ products, getProductsByCategory }}
    >
      {children}
    </ProductsByCategoryContext.Provider>
  );
};

export default ProductsByCategoryProvider;
