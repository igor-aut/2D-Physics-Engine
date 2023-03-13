import { useState } from "react";



export default function App() {

  const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [onlyInStock, setOnlyInStock] = useState(false);

  return(
    <>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onlyInStock={onlyInStock} setOnlyInStock={setOnlyInStock}/>
      <CategoryTable products={products} searchQuery={searchQuery} onlyInStock={onlyInStock} category='Fruits' />
      <CategoryTable products={products} searchQuery={searchQuery} onlyInStock={onlyInStock} category='Vegetables' />
    </>
  )
}



function SearchBar({searchQuery, setSearchQuery, onlyInStock, setOnlyInStock}) {
  return (
    <form>
      <input type='text' placeholder='Search...' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
      <label>
        <input type='checkbox' checked={onlyInStock} onChange={() => setOnlyInStock(!onlyInStock)} />
        Show only products in stock
      </label>
    </form>
  );
}



function CategoryTable({products, searchQuery, onlyInStock, category}) {
  return (
    <>
      <h1>{category}</h1>
      <ul className={category.toLowerCase()}>
        {products.map((product, index) => {
          const color = product.stocked ? 'green' : 'red';
          const visible = !product.stocked && onlyInStock;
          const inSearchQuery = searchQuery ? true : false;
          return visible || inSearchQuery ? null : product.category === category && <li key={index} style={{color: color}}><p>{product.name}</p><p>{product.price}</p></li>;
        })}
      </ul>
    </>
  );
}