(() => {
  "use strict";

  const KEY = "culinaRecipes";
  const FAVORITES_KEY = "culinaFavorites";
  const USER_RECIPES_KEY = "culinaUserRecipes";
  const seedRecipes = [
    { id: 1, name: "Ensalada Cesar", category: "Almuerzos", price: 2500, rating: 4.8, time: 15, servings: 2, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80", ingredients: ["Lechuga", "Pollo", "Queso parmesano", "Aderezo Cesar"], steps: ["Lava y corta la lechuga.", "Cocina el pollo hasta dorarlo.", "Mezcla los ingredientes con el aderezo."], description: "Una ensalada fresca, completa y lista en pocos minutos." },
    { id: 2, name: "Pizza Casera", category: "Cenas", price: 5500, rating: 4.9, time: 40, servings: 4, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80", ingredients: ["Harina", "Queso", "Tomate", "Pepperoni"], steps: ["Prepara y estira la masa.", "Agrega salsa, queso y toppings.", "Hornea hasta que el borde este dorado."], description: "Pizza artesanal con una base crujiente y mucho queso." },
    { id: 3, name: "Pancakes", category: "Desayunos", price: 2200, rating: 4.9, time: 20, servings: 2, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=80", ingredients: ["Harina", "Leche", "Huevo", "Miel"], steps: ["Mezcla los ingredientes hasta integrar.", "Cocina porciones en un sarten caliente.", "Sirve con miel y fruta."], description: "Un desayuno esponjoso para comenzar el dia." },
    { id: 4, name: "Sopa de Verduras", category: "Almuerzos", price: 2800, rating: 4.7, time: 30, servings: 4, image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80", ingredients: ["Zanahoria", "Papa", "Apio", "Caldo"], steps: ["Corta las verduras.", "Sofrie ligeramente.", "Cocina con el caldo hasta suavizar."], description: "Una sopa casera, nutritiva y reconfortante." },
    { id: 5, name: "Brownie de Chocolate", category: "Postres", price: 3200, rating: 4.8, time: 35, servings: 8, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80", ingredients: ["Chocolate", "Harina", "Huevo", "Mantequilla"], steps: ["Derrite el chocolate con mantequilla.", "Integra los ingredientes.", "Hornea y deja enfriar."], description: "Brownies humedos, intensos y muy chocolatosos." },
    { id: 6, name: "Bowl de Frutas", category: "Desayunos", price: 1800, rating: 4.9, time: 10, servings: 1, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80", ingredients: ["Fresas", "Banano", "Manzana", "Yogur"], steps: ["Corta la fruta.", "Sirve con yogur.", "Agrega semillas al gusto."], description: "Una opcion fresca y energizante." }
  ];

  const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
  const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));
  const getRecipes = () => {
    const saved = read(KEY, null);
    if (saved) return saved;
    write(KEY, seedRecipes);
    return seedRecipes;
  };
  const getFavorites = () => read(FAVORITES_KEY, []).map(Number);
  const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
  const currency = (value) => new Intl.NumberFormat("es-CR", { style: "currency", currency: "CRC", maximumFractionDigits: 0 }).format(value);
  const showMessage = (text) => {
    let message = document.querySelector("#message");
    if (!message) { message = document.createElement("div"); message.id = "message"; message.className = "message"; message.setAttribute("role", "status"); document.body.append(message); }
    message.textContent = text; message.hidden = false;
    clearTimeout(showMessage.timer); showMessage.timer = setTimeout(() => { message.hidden = true; }, 2600);
  };
  const recipeCard = (recipe, removable = false) => {
    const favorite = getFavorites().includes(recipe.id);
    return `<article class="recipe-card"><div class="recipe-image-container"><img src="${escapeHtml(recipe.image)}" alt="${escapeHtml(recipe.name)}"><button class="favorite-btn" type="button" data-favorite="${recipe.id}" aria-label="Guardar ${escapeHtml(recipe.name)}"><i class="${favorite ? "fa-solid" : "fa-regular"} fa-heart"></i></button></div><div class="recipe-content"><h3>${escapeHtml(recipe.name)}</h3><p>${escapeHtml(recipe.category)} · ${recipe.time} min</p><p>★ ${recipe.rating} · ${currency(recipe.price)}</p><div class="recipe-buttons"><a class="btn" href="recipe.html?id=${recipe.id}">Ver receta</a>${removable ? `<button class="btn btn-outline" type="button" data-remove="${recipe.id}" aria-label="Eliminar de favoritos"><i class="fa-solid fa-trash"></i></button>` : ""}</div></div></article>`;
  };
  const toggleFavorite = (id) => {
    const favorites = getFavorites(); const index = favorites.indexOf(Number(id));
    if (index === -1) { favorites.push(Number(id)); showMessage("Receta agregada a favoritos."); }
    else { favorites.splice(index, 1); showMessage("Receta eliminada de favoritos."); }
    write(FAVORITES_KEY, favorites);
  };
  const setupMenu = () => {
    document.querySelectorAll("header .left-nav .icon-btn, #menuButton").forEach(button => button.addEventListener("click", () => {
      const nav = document.querySelector(".top-nav"); if (!nav) return;
      const open = nav.classList.toggle("open");
      button.setAttribute("aria-expanded", String(open));
      const icon = button.querySelector("i"); if (icon) icon.className = `fa-solid ${open ? "fa-xmark" : "fa-bars"}`;
    }));
  };
  const bindSearch = (input) => input?.addEventListener("keydown", event => { if (event.key === "Enter") window.location.href = `search.html?q=${encodeURIComponent(input.value.trim())}`; });
  const initDashboard = () => {
    const container = document.querySelector("#recipesContainer"); if (!container) return;
    const main = document.querySelector("#mainSearch"), header = document.querySelector("#headerSearch"), category = document.querySelector("#categoryFilter"), budget = document.querySelector("#budgetFilter"), count = document.querySelector("#resultsCount"), empty = document.querySelector("#noResults");
    const render = () => {
      const search = (main?.value || "").toLowerCase().trim();
      const filtered = getRecipes().filter(recipe => (!search || [recipe.name, recipe.category, ...recipe.ingredients].join(" ").toLowerCase().includes(search)) && (!category?.value || category.value === "all" || recipe.category === category.value) && (!budget?.value || budget.value === "all" || (budget.value === "low" && recipe.price < 3000) || (budget.value === "medium" && recipe.price >= 3000 && recipe.price <= 6000) || (budget.value === "high" && recipe.price > 6000)));
      container.innerHTML = filtered.map(recipeCard).join(""); if (count) count.textContent = `${filtered.length} ${filtered.length === 1 ? "receta" : "recetas"}`; if (empty) empty.hidden = Boolean(filtered.length);
    };
    [main, header].forEach(input => input?.addEventListener("input", () => { if (input === main && header) header.value = input.value; if (input === header && main) main.value = input.value; render(); }));
    [category, budget].forEach(select => select?.addEventListener("change", render));
    document.querySelector("#clearFilters")?.addEventListener("click", () => { if (main) main.value = ""; if (header) header.value = ""; if (category) category.value = "all"; if (budget) budget.value = "all"; render(); });
    document.querySelector("#categoriesContainer")?.addEventListener("click", event => { const button = event.target.closest("[data-category]"); if (!button || !category) return; category.value = button.dataset.category; render(); document.querySelector("#recipesContainer")?.scrollIntoView({ behavior: "smooth", block: "start" }); });
    document.querySelector("#searchButton")?.addEventListener("click", render); container.addEventListener("click", event => { const button = event.target.closest("[data-favorite]"); if (!button) return; toggleFavorite(button.dataset.favorite); render(); }); render();
  };
  const initSearch = () => {
    const container = document.querySelector("#searchResults"), input = document.querySelector("#searchInput"), buttons = [...document.querySelectorAll("[data-category]")]; if (!container || !input) return;
    let activeCategory = "all"; const initial = new URLSearchParams(location.search).get("q"); if (initial) input.value = initial;
    const render = () => { const term = input.value.toLowerCase().trim(); const results = getRecipes().filter(recipe => (activeCategory === "all" || recipe.category === activeCategory) && (!term || [recipe.name, recipe.category, ...recipe.ingredients].join(" ").toLowerCase().includes(term))); container.innerHTML = results.length ? results.map(recipeCard).join("") : `<p class="no-results">No encontramos recetas para tu busqueda.</p>`; };
    input.addEventListener("input", render); buttons.forEach(button => button.addEventListener("click", () => { activeCategory = button.dataset.category; buttons.forEach(item => item.classList.toggle("active", item === button)); render(); })); container.addEventListener("click", event => { const button = event.target.closest("[data-favorite]"); if (!button) return; toggleFavorite(button.dataset.favorite); render(); }); render();
  };
  const initFavorites = () => { const container = document.querySelector("#favoritesContainer"); if (!container) return; const render = () => { const favorites = getFavorites(); const recipes = getRecipes().filter(recipe => favorites.includes(recipe.id)); container.innerHTML = recipes.length ? recipes.map(recipe => recipeCard(recipe, true)).join("") : `<p class="no-results">Aun no has guardado recetas. Explora y guarda tus favoritas.</p>`; }; container.addEventListener("click", event => { const button = event.target.closest("[data-favorite], [data-remove]"); if (!button) return; toggleFavorite(button.dataset.favorite || button.dataset.remove); render(); }); render(); };
  const initRecipe = () => { const id = Number(new URLSearchParams(location.search).get("id")) || 2; const recipe = getRecipes().find(item => item.id === id) || getRecipes()[0]; const target = document.querySelector("#recipeDetail"); if (!target || !recipe) return; target.innerHTML = `<section class="recipe-hero"><img src="${escapeHtml(recipe.image)}" alt="${escapeHtml(recipe.name)}"><div class="recipe-header"><span class="tag">${escapeHtml(recipe.category)}</span><h1>${escapeHtml(recipe.name)}</h1><p>★ ${recipe.rating} · ${recipe.time} min · ${recipe.servings || 2} porciones</p><p>${escapeHtml(recipe.description)}</p><div class="recipe-actions"><button class="btn" type="button" data-favorite="${recipe.id}"><i class="${getFavorites().includes(recipe.id) ? "fa-solid" : "fa-regular"} fa-heart"></i> Guardar</button><button class="btn btn-outline" type="button" id="shareRecipe"><i class="fa-solid fa-share"></i> Compartir</button></div></div></section><section class="recipe-body"><div><h2>Ingredientes</h2><ul class="ingredients">${recipe.ingredients.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div><div><h2>Preparacion</h2><ol class="steps">${recipe.steps.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ol></div></section>`; target.addEventListener("click", async event => { const favorite = event.target.closest("[data-favorite]"); if (favorite) { toggleFavorite(favorite.dataset.favorite); initRecipe(); return; } if (event.target.closest("#shareRecipe")) { try { await navigator.clipboard.writeText(location.href); showMessage("Enlace copiado al portapapeles."); } catch { showMessage("Comparte este enlace: " + location.href); } } }); };
  const initCreateRecipe = () => { const form = document.querySelector("#recipeForm"); if (!form) return; form.addEventListener("submit", event => { event.preventDefault(); const inputs = form.querySelectorAll("input"), textareas = form.querySelectorAll("textarea"); const name = inputs[0]?.value.trim() || "", category = form.querySelector("select")?.value || "Otros", ingredients = (textareas[0]?.value || "").split(/\n|,/).map(item => item.trim()).filter(Boolean), steps = (textareas[1]?.value || "").split(/\n/).map(item => item.trim()).filter(Boolean); if (!name || !ingredients.length || !steps.length) { showMessage("Completa el nombre, ingredientes y preparacion."); return; } const recipe = { id: Date.now(), name, category, price: Number((inputs[2]?.value || "0").replace(/[^0-9]/g, "")) || 0, rating: 5, time: Number((inputs[1]?.value || "0").replace(/[^0-9]/g, "")) || 30, servings: 2, image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=900&q=80", ingredients, steps, description: `Receta creada por Chef. ${name}` }; const recipes = getRecipes(); recipes.unshift(recipe); write(KEY, recipes); const mine = read(USER_RECIPES_KEY, []); mine.unshift(recipe.id); write(USER_RECIPES_KEY, mine); showMessage("Receta publicada correctamente."); setTimeout(() => { window.location.href = "chef-user.html"; }, 700); }); };
  const initChef = () => { const container = document.querySelector("#chefRecipes"); if (!container) return; const render = () => { const mine = read(USER_RECIPES_KEY, []); const recipes = getRecipes().filter(recipe => mine.includes(recipe.id)); container.innerHTML = recipes.length ? recipes.map(recipeCard).join("") : `<p class="no-results">Todavia no tienes recetas publicadas. <a href="create-recipe.html">Crea la primera.</a></p>`; document.querySelector("#recipeTotal")?.replaceChildren(document.createTextNode(String(recipes.length))); }; render(); };
  const initLogin = () => { const form = document.querySelector("#loginForm"); if (!form) return; const submit = event => { event.preventDefault(); const email = document.querySelector("#email")?.value.trim(); if (!email || !document.querySelector("#password")?.value) { showMessage("Ingresa tu correo y contrasena."); return; } localStorage.setItem("culinaUser", email); window.location.href = "dashboard-user.html"; }; form.addEventListener("submit", submit); form.querySelector(".btn")?.addEventListener("click", submit); };
  document.addEventListener("click", event => { const logout = event.target.closest("[data-logout]"); if (logout) localStorage.removeItem("culinaUser"); });
  document.addEventListener("DOMContentLoaded", () => { setupMenu(); document.querySelectorAll(".nav-search input").forEach(bindSearch); initDashboard(); initSearch(); initFavorites(); initRecipe(); initCreateRecipe(); initChef(); initLogin(); });
})();
