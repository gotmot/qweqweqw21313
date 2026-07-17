function bubbleSortOrders(orders) {

  if (!Array.isArray(orders)) {
    console.error('Ошибка: аргумент должен быть массивом.');
    return orders;
  }

  const n = orders.length;
  if (n <= 1) return orders;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false; 

    for (let j = 0; j < n - i - 1; j++) {
      const current = orders[j];
      const next = orders[j + 1];

      if (!isValidOrder(current) || !isValidOrder(next)) {
        console.error(`Ошибка: некорректные данные в заказе на позиции ${j} или ${j + 1}.`);
        return orders;
      }

      if (current.price > next.price) {

        [orders[j], orders[j + 1]] = [orders[j + 1], orders[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return orders;
}

function isValidOrder(order) {
  return (
    typeof order === 'object' &&
    order !== null &&
    typeof order.price === 'number' &&
    Number.isFinite(order.price) &&
    order.hasOwnProperty('orderId')
  );
}

function printOrders(orders) {
  if (!Array.isArray(orders)) return;

  orders.forEach(order => {
    if (isValidOrder(order)) {
      console.log(`Номер заказа: ${order.orderId}, Стоимость: ${order.price}`);
    } else {
      console.warn('Обнаружен некорректный заказ, пропущен при выводе.');
    }
  });
}


const orders = [
  { orderId: 101, price: 250 },
  { orderId: 102, price: 150 },
  { orderId: 103, price: 350 },
  { orderId: 104, price: 200 },
];

bubbleSortOrders(orders);
printOrders(orders);
