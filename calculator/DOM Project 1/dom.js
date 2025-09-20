const cards = document.querySelectorAll('.card-body');
function updateTotal() {
  let total = 0;
  cards.forEach(card => {
    const priceText = card.querySelector('.unit-price').textContent;
    const unitPrice = parseFloat(priceText.replace('$', ''));
    const quantity = parseInt(card.querySelector('.quantity').textContent);
    total += unitPrice * quantity;
  });
  document.querySelector('.total').textContent = `${total} $`;
}
cards.forEach(card => {
  const plusBtn = card.querySelector('.fa-plus-circle');
  const minusBtn = card.querySelector('.fa-minus-circle');
  const quantityEl = card.querySelector('.quantity');
  const deleteBtn = card.querySelector('.fa-trash-alt');
  const likeBtn = card.querySelector('.fa-heart');

  plusBtn.addEventListener('click', () => {
    quantityEl.textContent = parseInt(quantityEl.textContent) + 1;
    updateTotal();
  });
  minusBtn.addEventListener('click', () => {
    let qty = parseInt(quantityEl.textContent);
    if (qty > 0) {
      quantityEl.textContent = qty - 1;
      updateTotal();
    }
  });
  deleteBtn.addEventListener('click', () => {
    card.parentElement.remove();
    updateTotal();
  });
  likeBtn.addEventListener('click', () => {
    likeBtn.style.color = likeBtn.style.color === 'red' ? 'black' : 'red';
  });
});
updateTotal();
