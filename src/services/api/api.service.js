import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

const query = {
  getAllProducts: async () => {
    try {
      let result = await api.get("/products");
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  getAllCategories: async () => {
    try {
      let result = await api.get("products/categories");

      if (result.name === "AxiosError") {
        throw new Error("Something went wrong");
      } else {
        return result;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  getProductByCategory: async (category) => {
    try {
      let result = await api.get(`/products/category/${category}`);

      if (result.name === "AxiosError") {
        throw new Error("Something went wrong");
      } else {
        return result;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  getProductById: async (id) => {
    try {
      let result = await api.get(`/products/${id}`);

      if (result.name === "AxiosError") {
        throw new Error("Something went wrong");
      } else {
        return result;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }
};

export default query;
