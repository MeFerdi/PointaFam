const products = [
    { id: 1, category: 'vegetables', name: 'Kales', price: 2.0, available: true, farmerName: 'John Doe', phoneNumber: '+1234567890', email: 'johndoe@example.com' },
    { id: 2, category: 'vegetables', name: 'Tomatoes', price: 1.5, available: false, farmerName: 'Jane Smith', phoneNumber: '+1987654321', email: 'janesmith@example.com' },
    { id: 3, category: 'fruits', name: 'Bananas', price: 2.5, available: true, farmerName: 'Michael Johnson', phoneNumber: '+1122334455', email: 'michael@example.com' },
  ];
  
  function displayProducts(category, productListId) {
    const productList = document.getElementById(productListId);
    productList.innerHTML = '';
  
    const categoryProducts = products.filter(product => product.category === category);
    categoryProducts.forEach(product => {
      const productItem = document.createElement('div');
      productItem.classList.add('product');
      productItem.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <p>${product.available ? 'Available' : 'Not Available'}</p>
        <button class="contact-btn" data-id="${product.id}" data-farmer-name="${product.farmerName}" data-phone="${product.phoneNumber}" data-email="${product.email}">Contact Farmer</button>
        <button class="add-to-cart-btn" data-id="${product.id}" ${product.available ? '' : 'disabled'}>Add to Cart</button>
      `;
      productList.appendChild(productItem);
    });
  }
  
  function addToCart(productId) {
    const productToAdd = products.find(product => product.id === productId);
    if (productToAdd) {
      const cartItemsList = document.getElementById('cart-items');
      const cartItem = document.createElement('li');
      cartItem.textContent = `${productToAdd.name} - $${productToAdd.price.toFixed(2)}`;
      cartItemsList.appendChild(cartItem);
    }
  }
  
  function contactFarmer(farmerName, phoneNumber, email) {
    alert(`Contact ${farmerName}:\nPhone: ${phoneNumber}\nEmail: ${email}`);
  }
  
  function init() {
    displayProducts('vegetables', 'vegetables-list');
    displayProducts('fruits', 'fruits-list');
  
    const productList = document.querySelectorAll('.product-list');
    productList.forEach(list => {
      list.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart-btn')) {
          const productId = parseInt(event.target.getAttribute('data-id'));
          addToCart(productId);
        } else if (event.target.classList.contains('contact-btn')) {
          const farmerName = event.target.getAttribute('data-farmer-name');
          const phoneNumber = event.target.getAttribute('data-phone');
          const email = event.target.getAttribute('data-email');
          contactFarmer(farmerName, phoneNumber, email);
        }
      });
    });
  
    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.addEventListener('click', () => {
      alert('Checkout functionality to be implemented.');
    });
  }
  
  window.addEventListener('DOMContentLoaded', init);
  
  document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
  
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const role = document.getElementById('role').value;
  
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Role:', role);
  
      signupForm.reset();
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    const blogPostsContainer = document.getElementById('blog-posts');
  
    const keyword = 'agriculture';
    fetch(`https://jsonplaceholder.typicode.com/posts?q=${keyword}`)
      .then(response => response.json())
      .then(posts => {
        posts.slice(0, 6).forEach(post => {
          const article = document.createElement('article');
          article.innerHTML = `
            <h2>${post.title}</h2>
            <p class="post-meta">Posted by User ${post.userId}</p>
            <p>${post.body}</p>
            <a href="#" class="read-more">Read More</a>
          `;
          blogPostsContainer.appendChild(article);
        });
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  });
    