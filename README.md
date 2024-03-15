1. Define productDetails array containing product information.
2. Define an empty shoppingCart array to store selected products.
3. Select the necessary DOM elements using querySelector.

4. Define removeFromCart function:
   a. Accept productId as a parameter.
   b. Find the index of the product in the shoppingCart array.
   c. If found, remove the product from the shoppingCart.
   d. Call updateCartDisplay to refresh the cart display.

5. Define onsubmitForm function:
   a. Prevent the default form submission behavior.
   b. Get the input and select elements' values.
   c. Filter shoppingCart items based on the input value and selected sort order.
   d. Log the filtered items.

6. Define clearCart function:
   a. Set shoppingCart to an empty array.
   b. Call updateCartDisplay to refresh the cart display.

7. Define updateCartDisplay function:
   a. Check if shoppingCart is empty and display a message if true.
   b. If not empty:
      i. Create filterContainer HTML with a form, input, submit button, and select dropdown.
      ii. Create cartProductsContainer HTML to display cart items with remove buttons.
      iii. Create cartSummary HTML with total and average amounts.
      iv. Append filterContainer, cartProductsContainer, and cartSummary to cartContainer.

8. Call updateCartDisplay initially to display the initial cart content.

9. Define addToCart function:
   a. Accept productId as a parameter.
   b. Find the index of the product in the shoppingCart array.
   c. If found, update the quantity of the existing product.
   d. If not found, add the product to the shoppingCart.
   e. Call updateCartDisplay to refresh the cart display.

10. Define displayProduct function:
   a. Accept a product object as a parameter.
   b. Destructure product object to get id, name, price, image, and quantity.
   c. Create a productContainer HTML with image, details, and add to cart button.
   d. Append productContainer to containerElement.

11. Loop through each product in productDetails and call displayProduct to display each product.

12. Append containerElement to productCard.

13. The script is designed to handle user interactions like adding/removing items from the cart and updating the display accordingly.
