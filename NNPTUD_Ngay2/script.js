// Câu 1: Constructor
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: 
const products = [
    new Product(1, "iPhone 15 Pro", 28000000, 10, "Smartphone", true),
    new Product(2, "Samsung S24 Ultra", 31000000, 5, "Smartphone", true),
    new Product(3, "MacBook M3", 45000000, 0, "Laptop", false),
    new Product(4, "Ốp lưng iPhone", 500000, 50, "Accessories", true),
    new Product(5, "Chuột Logitech", 1200000, 20, "Accessories", true),
    new Product(6, "Cáp sạc Type-C", 300000, 100, "Accessories", true)
];



// Câu 2 & 8: 
const tableBody = document.getElementById('q2-8-list');
for (const p of products) { // Sử dụng for...of theo đề bài
    tableBody.innerHTML += `
        <tr>
            <td>#${p.id}</td>
            <td><b>${p.name}</b></td>
            <td>${p.price.toLocaleString()}</td>
            <td>${p.quantity}</td>
            <td>${p.category}</td>
            <td>${p.isAvailable ? "🟢 Đang bán" : "🔴 Ngừng bán"}</td>
        </tr>`;
}

// Câu 3: 
const q3List = document.getElementById('q3-list');
products.map(p => ({ name: p.name, price: p.price }))
        .forEach(item => q3List.innerHTML += `<li>${item.name} - ${item.price.toLocaleString()}đ</li>`);

// Câu 4: 
const q4List = document.getElementById('q4-list');
products.filter(p => p.quantity > 0)
        .forEach(p => q4List.innerHTML += `<li>${p.name} (Kho: ${p.quantity})</li>`);

// Câu 5 & 6: 
const hasExpensive = products.some(p => p.price > 30000000);
const allAccOk = products.filter(p => p.category === "Accessories").every(p => p.isAvailable);
document.getElementById('q5-6-status').innerHTML = `
    <div class="status-item">SP > 30tr: <b>${hasExpensive ? "✅ Có" : "❌ Không"}</b></div>
    <div class="status-item">Accessories đang bán hết: <b>${allAccOk ? "✅ Đúng" : "❌ Sai"}</b></div>
`;

// Câu 7: 
const totalValue = products.reduce((sum, p) => sum + (p.price * p.quantity), 0);
document.getElementById('q7-total').innerText = totalValue.toLocaleString() + " VND";

// Câu 9: 
const q9Box = document.getElementById('q9-details');
const sample = products[0];
for (let key in sample) {
    q9Box.innerHTML += `<div>${key}: ${sample[key]}</div>`;
}

// Câu 10:
const q10List = document.getElementById('q10-list');
products.filter(p => p.isAvailable && p.quantity > 0)
        .map(p => p.name)
        .forEach(name => q10List.innerHTML += `<li>✨ ${name}</li>`);