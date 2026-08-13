// Culina Dashboard

// datos de las recetas
const recipes = [

    {
        id: 1,
        name: "Ensalada César",
        category: "Almuerzos",
        price: 2500,
        rating: 4.8,
        time: 15,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
        ingredients: [
            "Lechuga",
            "Pollo",
            "Queso",
            "Aderezo César"
        ]
    },

    {
        id: 2,
        name: "Pizza Casera",
        category: "Cenas",
        price: 5500,
        rating: 4.9,
        time: 40,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
        ingredients: [
            "Harina",
            "Queso",
            "Tomate",
            "Pepperoni"
        ]
    },

    {
        id: 3,
        name: "Pancakes",
        category: "Desayunos",
        price: 2200,
        rating: 4.9,
        time: 20,
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
        ingredients: [
            "Harina",
            "Leche",
            "Huevo",
            "Miel"
        ]
    },

    {
        id: 4,
        name: "Sopa de verduras",
        category: "Almuerzos",
        price: 2800,
        rating: 4.7,
        time: 30,
        image: "https://images.unsplash.com/photo-1547592180-85f173990554",
        ingredients: [
            "Zanahoria",
            "Papa",
            "Apio",
            "Caldo"
        ]
    },

    {
        id: 5,
        name: "Brownie de chocolate",
        category: "Postres",
        price: 3200,
        rating: 4.8,
        time: 35,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
        ingredients: [
            "Chocolate",
            "Harina",
            "Huevo",
            "Mantequilla"
        ]
    },

    {
        id: 6,
        name: "Bowl de frutas",
        category: "Desayunos",
        price: 1800,
        rating: 4.9,
        time: 10,
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
        ingredients: [
            "Fresas",
            "Banano",
            "Manzana",
            "Yogur"
        ]
    }

];


// elementos del dom
const recipesContainer =
    document.getElementById("recipesContainer");

const resultsCount =
    document.getElementById("resultsCount");

const noResults =
    document.getElementById("noResults");

const mainSearch =
    document.getElementById("mainSearch");

const headerSearch =
    document.getElementById("headerSearch");

const categoryFilter =
    document.getElementById("categoryFilter");

const budgetFilter =
    document.getElementById("budgetFilter");

const clearFilters =
    document.getElementById("clearFilters");

const categoriesContainer =
    document.getElementById("categoriesContainer");

const message =
    document.getElementById("message");


// favoritos

let favorites =
    JSON.parse(localStorage.getItem("culinaFavorites")) || [];


//renderizar recetas

function renderRecipes(recipeList) {

    recipesContainer.innerHTML = "";


    if (recipeList.length === 0) {

        noResults.hidden = false;

        resultsCount.textContent =
            "0 recetas";

        return;

    }


    noResults.hidden = true;


    resultsCount.textContent =
        `${recipeList.length} ${
            recipeList.length === 1
                ? "receta"
                : "recetas"
        }`;


    recipeList.forEach(recipe => {

        const card =
            document.createElement("article");

        card.classList.add("recipe-card");


        const isFavorite =
            favorites.includes(recipe.id);


        card.innerHTML = `

            <div class="recipe-image-container">

                <img
                    src="${recipe.image}"
                    alt="${recipe.name}">

                <button
                    class="favorite-btn"
                    type="button"
                    data-id="${recipe.id}"
                    aria-label="Agregar a favoritos">

                    <i class="${
                        isFavorite
                            ? "fa-solid"
                            : "fa-regular"
                    } fa-heart"></i>

                </button>

            </div>


            <div class="recipe-content">

                <h3>
                    ${recipe.name}
                </h3>

                <p>
                    ${recipe.category}
                </p>

                <p>
                    ⭐ ${recipe.rating}
                </p>

                <p>
                    <i class="fa-regular fa-clock"></i>
                    ${recipe.time} min
                </p>

                <p>
                    ₡${recipe.price.toLocaleString("es-CR")}
                </p>


                <a
                    href="recipe.html?id=${recipe.id}"
                    class="btn">

                    Ver receta

                </a>

            </div>

        `;


        recipesContainer.appendChild(card);

    });

}


// buscar recetas

function filterRecipes() {

    const searchTerm =
        mainSearch.value
            .toLowerCase()
            .trim();


    const selectedCategory =
        categoryFilter.value;


    const selectedBudget =
        budgetFilter.value;


    const filteredRecipes =
        recipes.filter(recipe => {


            //busqueda

            const matchesSearch =

                recipe.name
                    .toLowerCase()
                    .includes(searchTerm)

                ||

                recipe.category
                    .toLowerCase()
                    .includes(searchTerm)

                ||

                recipe.ingredients.some(
                    ingredient =>
                        ingredient
                            .toLowerCase()
                            .includes(searchTerm)
                );


         //categoria
            const matchesCategory =

                selectedCategory === "all"

                ||

                recipe.category === selectedCategory;


            //presupuesto
            let matchesBudget = true;


            if (selectedBudget === "low") {

                matchesBudget =
                    recipe.price < 3000;

            }


            if (selectedBudget === "medium") {

                matchesBudget =
                    recipe.price >= 3000 &&
                    recipe.price <= 6000;

            }


            if (selectedBudget === "high") {

                matchesBudget =
                    recipe.price > 6000;

            }


            return (

                matchesSearch &&
                matchesCategory &&
                matchesBudget

            );

        });


    renderRecipes(filteredRecipes);

}

//Sincronizar buscadores
mainSearch.addEventListener(
    "input",
    () => {

        headerSearch.value =
            mainSearch.value;

        filterRecipes();

    }
);


headerSearch.addEventListener(
    "input",
    () => {

        mainSearch.value =
            headerSearch.value;

        filterRecipes();

    }
);

//Filtro por categoría
categoryFilter.addEventListener(
    "change",
    filterRecipes
);

//Filtro por presupuesto
budgetFilter.addEventListener(
    "change",
    filterRecipes
);

//Categorias como botones
categoriesContainer.addEventListener(
    "click",
    event => {

        const categoryButton =
            event.target.closest(".category");


        if (!categoryButton) {
            return;
        }


        const category =
            categoryButton.dataset.category;


        categoryFilter.value =
            category;


        filterRecipes();


        window.scrollTo({
            top: document.getElementById(
                "recipesContainer"
            ).offsetTop - 100,

            behavior: "smooth"
        });

    }
);

//Limpiar filtros
clearFilters.addEventListener(
    "click",
    () => {

        mainSearch.value = "";

        headerSearch.value = "";

        categoryFilter.value = "all";

        budgetFilter.value = "all";


        renderRecipes(recipes);


        showMessage(
            "Filtros limpiados correctamente."
        );

    }
);

//Favoritos
recipesContainer.addEventListener(
    "click",
    event => {

        const favoriteButton =
            event.target.closest(".favorite-btn");


        if (!favoriteButton) {
            return;
        }


        const recipeId =
            Number(
                favoriteButton.dataset.id
            );


        toggleFavorite(recipeId);

    }
);

//Agregar o quitar favorito
function toggleFavorite(recipeId) {

    const index =
        favorites.indexOf(recipeId);


    if (index === -1) {

        favorites.push(recipeId);

        showMessage(
            "Receta agregada a favoritos."
        );

    } else {

        favorites.splice(index, 1);

        showMessage(
            "Receta eliminada de favoritos."
        );

    }


    localStorage.setItem(
        "culinaFavorites",
        JSON.stringify(favorites)
    );


    filterRecipes();

}
// Mensajes al dashboard
function showMessage(text) {

    message.textContent = text;

    message.hidden = false;


    setTimeout(() => {

        message.hidden = true;

    }, 2500);

}

renderRecipes(recipes);
const menuButton =
    document.getElementById("menuButton");

const topNav =
    document.querySelector(".top-nav");

// MENÚ RESPONSIVE


const menuButton =
    document.getElementById("menuButton");

const topNav =
    document.querySelector(".top-nav");

const menuIcon =
    menuButton.querySelector("i");


menuButton.addEventListener("click", () => {

    const isOpen =
        topNav.classList.toggle("open");


    if (isOpen) {

        menuIcon.classList.remove(
            "fa-bars"
        );

        menuIcon.classList.add(
            "fa-xmark"
        );

    } else {

        menuIcon.classList.remove(
            "fa-xmark"
        );

        menuIcon.classList.add(
            "fa-bars"
        );

    }

});


const menuLinks =
    topNav.querySelectorAll("a");


menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        topNav.classList.remove("open");


        menuIcon.classList.remove(
            "fa-xmark"
        );

        menuIcon.classList.add(
            "fa-bars"
        );

    });

});
});