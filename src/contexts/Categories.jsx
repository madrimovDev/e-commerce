import { createContext, useState, useContext, useEffect } from "react";
import query from "../services/api/api.service";

const CategoriesContext = createContext({
  isLoading: false,
  isError: false,
  categories: [],
});

CategoriesContext.displayName = "CategoriesContext";

export const useCategories = () => useContext(CategoriesContext);

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({
    isLoading: false,
    isError: false,
    categories: [],
  });

  useEffect(() => {
    setCategories({ isLoading: true, isError: false, categories: [] });
    query
      .getAllCategories()
      .then((result) => {
        if (result.name !== "AxiosError") {
          setCategories({
            isLoading: false,
            isError: false,
            categories: ["all", ...result.data],
          });
        } else {
          setCategories({
            isLoading: false,
            isError: true,
            categories: [],
          });
        }
      })
      .catch((error) => {
        setCategories({
          isLoading: false,
          isError: true,
          categories: [],
        });
      });
  }, []);

  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
