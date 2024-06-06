function calculateTotal() {
    const amount = parseFloat(document.getElementById('amount').value);
    const quantity = parseInt(document.getElementById('quantity').value);

    if (isNaN(amount) || isNaN(quantity)) {
        alert('Voer geldige getallen in voor bedrag en aantal.');
        return;
    }

    const totalPrice = amount * quantity;
    const totalPriceDiv = document.getElementById('totalPrice');
    totalPriceDiv.textContent = 'Totaalbedrag: €' + totalPrice.toFixed(2);
}