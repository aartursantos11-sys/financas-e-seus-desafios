// ===== Catálogo =====
const PRODUCTS = [
  { id: 1,  name: "Smartphone Nova X12 128GB", brand: "Nova", category: "Smartphones", price: 1899.9, oldPrice: 2399.9, rating: 4.7, reviews: 1284, icon: "📱", color: "#dbeafe", tag: "-21%",
    specs: ["Tela AMOLED 6,5\" 120Hz", "Câmera tripla 50MP", "Bateria 5000mAh", "5G e NFC"] },
  { id: 2,  name: "Smartphone Nova X12 Pro 256GB", brand: "Nova", category: "Smartphones", price: 3299.0, oldPrice: 3799.0, rating: 4.8, reviews: 642, icon: "📱", color: "#e0e7ff", tag: "Lançamento",
    specs: ["Tela 6,7\" LTPO 120Hz", "Zoom óptico 5x", "Carregamento 67W", "IP68"] },
  { id: 3,  name: "Notebook Orion 15 Ryzen 7 16GB", brand: "Orion", category: "Notebooks", price: 4599.0, oldPrice: 5299.0, rating: 4.6, reviews: 398, icon: "💻", color: "#f1f5f9", tag: "-13%",
    specs: ["Ryzen 7, 8 núcleos", "16GB RAM DDR5", "SSD 512GB NVMe", "Tela 15,6\" Full HD IPS"] },
  { id: 4,  name: "Notebook Orion Air 13 Ultrafino", brand: "Orion", category: "Notebooks", price: 5899.0, oldPrice: null, rating: 4.9, reviews: 211, icon: "💻", color: "#e2e8f0", tag: null,
    specs: ["1,1 kg em alumínio", "Bateria para 18h", "Tela 2,8K 90Hz", "SSD 1TB"] },
  { id: 5,  name: "Fone Bluetooth Pulse ANC", brand: "Pulse", category: "Áudio", price: 499.9, oldPrice: 699.9, rating: 4.5, reviews: 2210, icon: "🎧", color: "#fce7f3", tag: "-29%",
    specs: ["Cancelamento de ruído ativo", "40h de bateria", "Bluetooth 5.3", "Multiponto"] },
  { id: 6,  name: "Fone In-Ear Pulse Buds", brand: "Pulse", category: "Áudio", price: 279.9, oldPrice: 349.9, rating: 4.3, reviews: 3105, icon: "🎵", color: "#ede9fe", tag: null,
    specs: ["Estojo com carga sem fio", "Resistente a suor (IPX4)", "Controle por toque", "24h com o estojo"] },
  { id: 7,  name: "Caixa de Som Portátil Boom 20W", brand: "Pulse", category: "Áudio", price: 349.0, oldPrice: null, rating: 4.6, reviews: 876, icon: "🔊", color: "#ffedd5", tag: null,
    specs: ["20W de potência", "À prova d'água IP67", "12h de bateria", "Pareamento estéreo"] },
  { id: 8,  name: "Smartwatch Fit Pro GPS", brand: "Nova", category: "Wearables", price: 899.0, oldPrice: 1199.0, rating: 4.4, reviews: 954, icon: "⌚", color: "#dcfce7", tag: "-25%",
    specs: ["GPS integrado", "Monitor cardíaco e SpO2", "Tela AMOLED 1,4\"", "Até 10 dias de bateria"] },
  { id: 9,  name: "Smart TV 55\" 4K QLED", brand: "Vision", category: "TVs", price: 2799.0, oldPrice: 3499.0, rating: 4.7, reviews: 1532, icon: "📺", color: "#cffafe", tag: "-20%",
    specs: ["Resolução 4K UHD", "HDR10+ e Dolby Vision", "3 entradas HDMI 2.1", "Assistente de voz"] },
  { id: 10, name: "Smart TV 43\" Full HD", brand: "Vision", category: "TVs", price: 1699.0, oldPrice: null, rating: 4.3, reviews: 721, icon: "📺", color: "#e0f2fe", tag: null,
    specs: ["Full HD", "Wi-Fi e Bluetooth", "Apps de streaming", "2 entradas HDMI"] },
  { id: 11, name: "Console GameStation Neo 1TB", brand: "Arcadia", category: "Games", price: 3899.0, oldPrice: 4299.0, rating: 4.9, reviews: 2874, icon: "🎮", color: "#fee2e2", tag: "Mais vendido",
    specs: ["Jogos em 4K a 120fps", "SSD de 1TB", "Ray tracing", "Controle sem fio incluso"] },
  { id: 12, name: "Controle sem Fio Pro", brand: "Arcadia", category: "Games", price: 399.0, oldPrice: 459.0, rating: 4.6, reviews: 1022, icon: "🕹️", color: "#fef3c7", tag: null,
    specs: ["Gatilhos adaptáveis", "Vibração háptica", "Bateria recarregável", "USB-C"] },
  { id: 13, name: "Tablet Nova Tab 11\" 128GB", brand: "Nova", category: "Tablets", price: 1999.0, oldPrice: 2299.0, rating: 4.5, reviews: 488, icon: "📲", color: "#e0e7ff", tag: null,
    specs: ["Tela 11\" 2K", "4 alto-falantes", "Suporte a caneta", "Bateria 8000mAh"] },
  { id: 14, name: "Câmera Mirrorless Lumen 24MP", brand: "Lumen", category: "Câmeras", price: 5499.0, oldPrice: 6199.0, rating: 4.8, reviews: 163, icon: "📷", color: "#f5f5f4", tag: "-11%",
    specs: ["Sensor APS-C 24MP", "Vídeo 4K 60fps", "Estabilização no corpo", "Lente 18-55mm inclusa"] },
  { id: 15, name: "Carregador Turbo USB-C 65W", brand: "Volt", category: "Acessórios", price: 159.9, oldPrice: 199.9, rating: 4.7, reviews: 4310, icon: "🔌", color: "#fef9c3", tag: null,
    specs: ["Tecnologia GaN", "2 portas USB-C + 1 USB-A", "Carrega notebook", "Compacto"] },
  { id: 16, name: "Power Bank 20.000mAh", brand: "Volt", category: "Acessórios", price: 189.9, oldPrice: null, rating: 4.5, reviews: 2788, icon: "🔋", color: "#dcfce7", tag: null,
    specs: ["20.000mAh", "Carga rápida 22,5W", "Display de carga", "Carrega 3 aparelhos"] },
  { id: 17, name: "Mouse Gamer RGB 16.000 DPI", brand: "Arcadia", category: "Acessórios", price: 189.0, oldPrice: 249.0, rating: 4.4, reviews: 1890, icon: "🖱️", color: "#f3e8ff", tag: null,
    specs: ["Sensor 16.000 DPI", "7 botões programáveis", "Iluminação RGB", "Cabo trançado"] },
  { id: 18, name: "Teclado Mecânico Compacto", brand: "Arcadia", category: "Acessórios", price: 329.0, oldPrice: null, rating: 4.6, reviews: 905, icon: "⌨️", color: "#e5e7eb", tag: null,
    specs: ["Switches hot-swap", "Layout 75% ABNT2", "Bluetooth + USB-C", "Retroiluminado"] },
];

const FREE_SHIPPING_FROM = 299;
const SHIPPING_FEE = 24.9;
const PIX_DISCOUNT = 0.05;

// ===== Utilitários =====
const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const $ = (sel) => document.querySelector(sel);
const stars = (r) => "★".repeat(Math.round(r)) + "☆".repeat(5 - Math.round(r));

function storageGet(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function storageSet(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* ignora */ }
}

// ===== Estado =====
const state = {
  category: "Todos",
  query: "",
  sort: "relevance",
  cart: storageGet("voltatech-cart", {}), // { [id]: qty }
};

// ===== Catálogo: render =====
function renderCategories() {
  const cats = ["Todos", ...new Set(PRODUCTS.map((p) => p.category))];
  $("#categories").innerHTML = cats
    .map((c) => `<button class="chip ${c === state.category ? "is-active" : ""}" data-cat="${c}">${c}</button>`)
    .join("");
}

function filteredProducts() {
  const q = state.query.trim().toLowerCase();
  let list = PRODUCTS.filter((p) =>
    (state.category === "Todos" || p.category === state.category) &&
    (!q || `${p.name} ${p.brand} ${p.category}`.toLowerCase().includes(q))
  );
  const sorters = {
    "price-asc": (a, b) => a.price - b.price,
    "price-desc": (a, b) => b.price - a.price,
    rating: (a, b) => b.rating - a.rating || b.reviews - a.reviews,
  };
  if (sorters[state.sort]) list = [...list].sort(sorters[state.sort]);
  return list;
}

function cardHTML(p) {
  return `
    <article class="card">
      <button class="card__media" style="background:${p.color}" data-detail="${p.id}" aria-label="Ver detalhes de ${p.name}">
        ${p.tag ? `<span class="card__tag">${p.tag}</span>` : ""}
        <span aria-hidden="true">${p.icon}</span>
      </button>
      <div class="card__body">
        <span class="card__brand">${p.brand}</span>
        <h3 class="card__name"><button data-detail="${p.id}">${p.name}</button></h3>
        <div class="stars" aria-label="Nota ${p.rating} de 5">${stars(p.rating)} <span>(${p.reviews.toLocaleString("pt-BR")})</span></div>
        ${p.oldPrice ? `<div class="price-old">${brl(p.oldPrice)}</div>` : `<div class="price-old" style="visibility:hidden">&nbsp;</div>`}
        <div class="price">${brl(p.price)}</div>
        <div class="installments">10x de ${brl(p.price / 10)} sem juros</div>
        <button class="btn btn--primary" data-add="${p.id}">Adicionar ao carrinho</button>
      </div>
    </article>`;
}

function renderGrid() {
  const list = filteredProducts();
  $("#grid").innerHTML = list.map(cardHTML).join("");
  $("#empty").hidden = list.length > 0;
  $("#resultCount").textContent = `${list.length} ${list.length === 1 ? "produto" : "produtos"}`;
}

// ===== Detalhe do produto =====
function openDetail(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  let qty = 1;
  $("#modalBody").innerHTML = `
    <div class="detail">
      <div class="detail__media" style="background:${p.color}" aria-hidden="true">${p.icon}</div>
      <div class="detail__info">
        <span class="card__brand">${p.brand} · ${p.category}</span>
        <h3>${p.name}</h3>
        <div class="stars">${stars(p.rating)} <span>${p.rating} (${p.reviews.toLocaleString("pt-BR")} avaliações)</span></div>
        <ul>${p.specs.map((s) => `<li>${s}</li>`).join("")}</ul>
        ${p.oldPrice ? `<div class="price-old">${brl(p.oldPrice)}</div>` : ""}
        <div class="price">${brl(p.price)}</div>
        <div class="installments">ou 10x de ${brl(p.price / 10)} sem juros</div>
        <div class="detail__pix">${brl(p.price * (1 - PIX_DISCOUNT))} no Pix (5% off)</div>
        <div class="detail__actions">
          <div class="qty"><button data-q="-1" aria-label="Diminuir">−</button><span id="detailQty">1</span><button data-q="1" aria-label="Aumentar">+</button></div>
          <button class="btn btn--primary" id="detailAdd">Adicionar</button>
        </div>
      </div>
    </div>`;
  const modal = $("#productModal");
  modal.querySelectorAll("[data-q]").forEach((b) =>
    b.addEventListener("click", () => {
      qty = Math.max(1, Math.min(10, qty + Number(b.dataset.q)));
      $("#detailQty").textContent = qty;
    })
  );
  $("#detailAdd").addEventListener("click", () => {
    addToCart(p.id, qty);
    modal.close();
  });
  modal.showModal();
}

// ===== Carrinho =====
function saveCart() { storageSet("voltatech-cart", state.cart); }

function addToCart(id, qty = 1) {
  state.cart[id] = Math.min(10, (state.cart[id] || 0) + qty);
  saveCart();
  renderCart();
  const p = PRODUCTS.find((x) => x.id === id);
  toast(`${p.name} adicionado ao carrinho`);
}

function setQty(id, qty) {
  if (qty <= 0) delete state.cart[id];
  else state.cart[id] = Math.min(10, qty);
  saveCart();
  renderCart();
}

function renderCart() {
  const entries = Object.entries(state.cart)
    .map(([id, qty]) => ({ p: PRODUCTS.find((x) => x.id === Number(id)), qty }))
    .filter((e) => e.p);

  const count = entries.reduce((s, e) => s + e.qty, 0);
  const subtotal = entries.reduce((s, e) => s + e.p.price * e.qty, 0);
  const shipping = subtotal === 0 ? 0 : subtotal >= FREE_SHIPPING_FROM ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;

  $("#cartCount").textContent = count;
  $("#cartItems").innerHTML = entries.length
    ? entries.map(({ p, qty }) => `
        <div class="line">
          <div class="line__thumb" style="background:${p.color}" aria-hidden="true">${p.icon}</div>
          <div>
            <div class="line__name">${p.name}</div>
            <div class="line__price">${brl(p.price)}</div>
            <button class="line__remove" data-remove="${p.id}">Remover</button>
          </div>
          <div class="qty">
            <button data-dec="${p.id}" aria-label="Diminuir">−</button><span>${qty}</span><button data-inc="${p.id}" aria-label="Aumentar">+</button>
          </div>
        </div>`).join("")
    : `<p class="drawer__empty">Seu carrinho está vazio.<br>Que tal dar uma olhada nas ofertas?</p>`;

  $("#cartSubtotal").textContent = brl(subtotal);
  $("#cartShipping").textContent = subtotal === 0 ? "—" : shipping === 0 ? "Grátis" : brl(shipping);
  $("#cartTotal").textContent = brl(total);
  $("#cartPix").textContent = subtotal ? `ou ${brl(total * (1 - PIX_DISCOUNT))} no Pix` : "";
  $("#checkout").disabled = entries.length === 0;
}

function openCart() {
  $("#cartDrawer").classList.add("is-open");
  $("#cartDrawer").setAttribute("aria-hidden", "false");
  $("#overlay").hidden = false;
}
function closeCart() {
  $("#cartDrawer").classList.remove("is-open");
  $("#cartDrawer").setAttribute("aria-hidden", "true");
  $("#overlay").hidden = true;
}

// ===== Toast =====
let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("is-visible"), 2400);
}

// ===== Eventos =====
$("#categories").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-cat]");
  if (!btn) return;
  state.category = btn.dataset.cat;
  renderCategories();
  renderGrid();
});

$("#search").addEventListener("input", (e) => {
  state.query = e.target.value;
  renderGrid();
});

$("#sort").addEventListener("change", (e) => {
  state.sort = e.target.value;
  renderGrid();
});

$("#grid").addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  const detail = e.target.closest("[data-detail]");
  if (add) addToCart(Number(add.dataset.add));
  else if (detail) openDetail(Number(detail.dataset.detail));
});

$("#cartItems").addEventListener("click", (e) => {
  const t = e.target.closest("button");
  if (!t) return;
  const id = Number(t.dataset.inc || t.dataset.dec || t.dataset.remove);
  if (t.dataset.inc) setQty(id, state.cart[id] + 1);
  if (t.dataset.dec) setQty(id, state.cart[id] - 1);
  if (t.dataset.remove) setQty(id, 0);
});

$("#openCart").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
$("#overlay").addEventListener("click", closeCart);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeCart(); });

const modal = $("#productModal");
modal.querySelector("[data-close]").addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });

$("#checkout").addEventListener("click", () => {
  state.cart = {};
  saveCart();
  renderCart();
  closeCart();
  toast("Pedido recebido! Obrigado por comprar na VoltaTech 🎉");
});

$("#newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.reset();
  toast("Inscrição confirmada! Fique de olho no seu e-mail.");
});

// ===== Início =====
renderCategories();
renderGrid();
renderCart();
