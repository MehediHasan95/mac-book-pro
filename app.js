// Products Upgrade Function
function productUpgrade(input, cost) {
  const extraEquipmentCost = document.getElementById(input);

  extraEquipmentCost.innerText = cost;
  const extraCost = parseInt(extraEquipmentCost.innerText);

  const bestPriceText = document.getElementById("best-price");
  const bestPrice = parseInt(bestPriceText.innerText);

  const subTotal = extraCost + bestPrice;

  const totalPrice = document.getElementById("total-price");
  totalPrice.innerText = subTotal;
}

// Total Calculation Function
function totalCalculation(price, memory, storage, delivery) {
  const bestPrice = document.getElementById(price).innerText;
  const extraMemoryCost = document.getElementById(memory).innerText;
  const extraStorageCost = document.getElementById(storage).innerText;
  const deliveryCost = document.getElementById(delivery).innerText;

  const inTotalPrice =
    parseInt(bestPrice) +
    parseInt(extraMemoryCost) +
    parseInt(extraStorageCost) +
    parseInt(deliveryCost);

  document.getElementById("total-price").innerText = inTotalPrice;
}

// Promo Code Apply Function
function promoCode(code) {
  const promoCode = document.getElementById(code);
  const totalPriceText = document.getElementById("total-price");
  const totalPrice = parseInt(totalPriceText.innerText);

  if (promoCode.value == "stavekaku") {
    totalPriceText.innerText = totalPrice - (20 / 100) * totalPrice;

    alert("Congratulations you got 20% discount☺");
  } else {
    alert("Your promo code has expired");
  }
  promoCode.value = "";
}

// For 8GB memory
document.getElementById("memory-8gb").addEventListener("click", function () {
  productUpgrade("extra-memory-cost", 0);
  totalCalculation(
    "best-price",
    "extra-memory-cost",
    "extra-storage-cost",
    "delivery-cost"
  );
});

// For 16GB memory
document.getElementById("memory-16gb").addEventListener("click", function () {
  productUpgrade("extra-memory-cost", 100);
  totalCalculation(
    "best-price",
    "extra-memory-cost",
    "extra-storage-cost",
    "delivery-cost"
  );
});

// For 256GB Storage
document.getElementById("storage-256gb").addEventListener("click", function () {
  productUpgrade("extra-storage-cost", 0);
  totalCalculation(
    "best-price",
    "extra-memory-cost",
    "extra-storage-cost",
    "delivery-cost"
  );
});

// For 512GB Storage
document.getElementById("storage-512gb").addEventListener("click", function () {
  productUpgrade("extra-storage-cost", 100);
  totalCalculation(
    "best-price",
    "extra-memory-cost",
    "extra-storage-cost",
    "delivery-cost"
  );
});

// For 1TB Storage
document.getElementById("storage-1tb").addEventListener("click", function () {
  productUpgrade("extra-storage-cost", 180);
  totalCalculation(
    "best-price",
    "extra-memory-cost",
    "extra-storage-cost",
    "delivery-cost"
  );
});

// Delivery Free
document.getElementById("delivery-free").addEventListener("click", function () {
  productUpgrade("delivery-cost", 0);
  totalCalculation(
    "best-price",
    "extra-memory-cost",
    "extra-storage-cost",
    "delivery-cost"
  );
});

// Delivery Cost $20
document.getElementById("delivery-20tk").addEventListener("click", function () {
  productUpgrade("delivery-cost", 20);
  totalCalculation(
    "best-price",
    "extra-memory-cost",
    "extra-storage-cost",
    "delivery-cost"
  );
});

// Apply Promo Code
document.getElementById("apply-btn").addEventListener("click", function () {
  promoCode("promo-code");
});
