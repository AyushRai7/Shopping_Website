export const loginUser = async (data) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Login failed: ${errorText}`);
      }
  
      const result = await response.json();
      return result;
    } catch (err) {
      console.error("Login error:", err.message);
      return { error: err.message };
    }
  };
  

export const fetchProducts = () =>
  fetch(`https://fakestoreapi.com/products`).then((res) => res.json());
export const fetchProductById = (id) =>
  fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json());
export const fetchCategories = () =>
  fetch(`https://fakestoreapi.com/products/categories`).then((res) =>
    res.json()
  );
export const fetchByCategory = (cat) =>
  fetch(`https://fakestoreapi.com/products/category/${cat}`).then((res) =>
    res.json()
  );
