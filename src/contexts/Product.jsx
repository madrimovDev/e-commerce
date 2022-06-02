import { createContext, useContext, useEffect, useState } from "react";
import query from "../services/api/api.service";

const ProductContext = createContext({
  products: {
    isLoading: false,
    isError: false,
    data: [],
  },
  getProduct: (id) => {},
  removeProduct: () => {},
});

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState({
    isLoading: false,
    isError: false,
    data: [],
  });

  const [id, setId] = useState(0);

  const getProduct = (id) => {
    setId(id);
  };

  const removeProduct = () => {
    setProducts({
      isLoading: false,
      isError: false,
      data: [],
    });
  };

  useEffect(() => {
    setProducts({
      isLoading: true,
      isError: false,
      data: [],
    });
    query
      .getProductById(id)
      .then((res) => {
        setProducts({
          isLoading: false,
          isError: false,
          data: res.data,
        });
      })
      .catch(() => {
        setProducts({
          isLoading: false,
          isError: true,
          data: [],
        });
      });
  }, [id]);

  return (
    <ProductContext.Provider value={{ products, getProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
