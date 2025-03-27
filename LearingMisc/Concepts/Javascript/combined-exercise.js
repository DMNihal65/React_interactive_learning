 // Task: Create a function that processes a list of products
// - Filter products by minimum rating
// - Calculate discounted prices
// - Sort by price
// - Format for display

// Sample data
const products = [
    { id: 1, name: 'Laptop', price: 999.99, rating: 4.5, inStock: true },
    { id: 2, name: 'Phone', price: 699.99, rating: 4.8, inStock: true },
    { id: 3, name: 'Tablet', price: 399.99, rating: 4.2, inStock: false },
    { id: 4, name: 'Smartwatch', price: 199.99, rating: 3.9, inStock: true },
    { id: 5, name: 'Headphones', price: 149.99, rating: 4.7, inStock: true },
    { id: 6, name: 'Camera', price: 799.99, rating: 4.1, inStock: false },
    { id: 7, name: 'Speaker', price: 249.99, rating: 4.4, inStock: true }
  ];
  
  // Process products function
  const processProducts = ({ 
    products, 
    minRating = 0, 
    discountPercent = 0,
    inStockOnly = false,
    sortDirection = 'asc'
  }) => {
    // Filter products
    let result = [...products];
    
    if (inStockOnly) {
      result = result.filter(product => product.inStock);
    }
    
    result = result.filter(product => product.rating >= minRating);
    
    // Apply discount
    result = result.map(product => {
      const discountAmount = product.price * (discountPercent / 100);
      const discountedPrice = product.price - discountAmount;
      
      return {
        ...product,
        originalPrice: product.price,
        price: discountedPrice,
        discount: discountPercent > 0 ? `${discountPercent}% off` : null
      };
    });
    
    // Sort by price
    result.sort((a, b) => {
      return sortDirection === 'asc' ? a.price - b.price : b.price - a.price;
    });
    
    // Format for display
    return result.map(({ id, name, price, originalPrice, discount, rating, inStock }) => {
      return {
        id,
        name,
        price: `$${price.toFixed(2)}`,
        ...(originalPrice !== price ? { originalPrice: `$${originalPrice.toFixed(2)}` } : {}),
        discount,
        rating: `${rating}/5`,
        status: inStock ? 'In Stock' : 'Out of Stock'
      };
    });
  };
  
  // Test the function with different parameters
  console.log('All products with 10% discount:');
  const allWithDiscount = processProducts({ 
    products, 
    discountPercent: 10 
  });
  console.log(allWithDiscount);
  
  console.log('\nTop-rated in-stock products (rating >= 4.5) sorted by price (high to low):');
  const topRated = processProducts({ 
    products, 
    minRating: 4.5, 
    inStockOnly: true,
    sortDirection: 'desc'
  });
  console.log(topRated);
  
  // Using async/await to simulate fetching and processing products
  const fetchAndProcessProducts = async () => {
    try {
      // Simulate API fetch
      const fetchProducts = () => {
        return new Promise((resolve) => {
          setTimeout(() => resolve(products), 1000);
        });
      };
      
      console.log('\nFetching products...');
      const fetchedProducts = await fetchProducts();
      console.log(`Fetched ${fetchedProducts.length} products`);
      
      // Process with different parameters
      const processed = processProducts({ 
        products: fetchedProducts, 
        minRating: 4.0,
        discountPercent: 15,
        inStockOnly: true
      });
      
      console.log('Processed products:');
      processed.forEach(({ name, price, originalPrice, discount, rating, status }) => {
        console.log(`${name} - ${price} ${originalPrice ? `(was ${originalPrice})` : ''} ${discount || ''} - Rated ${rating} - ${status}`);
      });
      
      return processed;
    } catch (error) {
      console.error('Error processing products:', error);
      throw error;
    }
  };
  
  // Execute the async function
  fetchAndProcessProducts()
    .then(result => {
      console.log('\nOperation completed successfully!');
    })
    .catch(error => {
      console.error('Operation failed:', error);
    });