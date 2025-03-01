'use strict';

document.querySelector('#calculate').addEventListener('click', function () {
  const bill = document.querySelector('#bill').value;

  const percentage = document.querySelector('#tip').value;

  const tip = (bill * percentage) / 100;

  const total = Number(bill) + Number(tip);

  document.querySelector('#total').textContent = total;
});
