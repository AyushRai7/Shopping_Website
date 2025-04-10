import Navbar from '../components/Header';
import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';
import { fetchProducts, fetchCategories, fetchByCategory } from '../api';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
    fetchCategories().then(setCategories);
  }, []);

  const filterByCategory = (cat) =>
    cat === 'all'
      ? fetchProducts().then(setProducts)
      : fetchByCategory(cat).then(setProducts);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="filter-bar">
          <button onClick={() => filterByCategory('all')}>All</button>
          {categories.map((cat) => (
            <button key={cat} onClick={() => filterByCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
      
    </>
  );
}
