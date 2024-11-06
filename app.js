let customers = [];
let items = [];

document
  .getElementById("customerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const customerId = document.getElementById("customerId").value;
    const customerName = document.getElementById("customerName").value;
    const customerAddress = document.getElementById("customerAddress").value;
    const customerGmail = document.getElementById("customerGmail").value;
    const customerPhone = document.getElementById("customerPhone").value;

    const customer = {
      id: customerId,
      name: customerName,
      address: customerAddress,
      gmail: customerGmail,
      phone: customerPhone,
    };

    customers.push(customer);
    console.log("Customer added:", customer);

    document.getElementById("customerForm").reset();
  });

document
  .getElementById("itemsForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const itemName = document.getElementById("items").value;
    const price = parseFloat(document.getElementById("prices").value);
    const quantity = parseInt(document.getElementById("qty").value);

    const item = {
      name: itemName,
      price: price,
      quantity: quantity,
    };

    items.push(item);
    console.log("Item added:", item);

    document.getElementById("itemsForm").reset();
  });
