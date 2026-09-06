const ProductInfo = () => {
  let product = {
    name: "Laptop",
    price: "$1200",
    availability: "In Stock",
  };
  return (
    <div>
      <ul>
        <li>{product.name}</li>
        <li>{product.price}</li>
        <li>{product.availability}</li>
      </ul>
    </div>
  );
};

export default ProductInfo;
