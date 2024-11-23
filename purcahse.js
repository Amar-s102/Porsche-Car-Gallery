const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
const purchaseContainer = document.getElementById('purchase-container');

if (cartData.length > 0) {
  let total = 300000; // Add base price
  cartData.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'receipt-item';
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover; margin-right: 10px; border-radius: 5px;">
      <div>
        <p><strong>Item:</strong> ${item.name}</p>
        <p><strong>Price:</strong> $${item.price.toFixed(2)}</p>
      </div>
    `;
    purchaseContainer.appendChild(itemDiv);
    total += item.price;
  });

  const totalDiv = document.createElement('div');
  totalDiv.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
  purchaseContainer.appendChild(totalDiv);
} else {
  purchaseContainer.innerHTML = '<p>Your cart is empty.</p>';
}
