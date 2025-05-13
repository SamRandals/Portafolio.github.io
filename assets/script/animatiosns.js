

// Selecciona TODOS los contenedores (NodeList)
const proyectContainers = document.querySelectorAll(".proyect__container");


proyectContainers.forEach(container => {
    // Busca los elementos DENTRO de cada contenedor actual
    const background = container.querySelector(".backgroundImage");
    const symbolsContainer = container.querySelector(".simbols__container");

    

    container.addEventListener("mouseenter", () => {
        if (background) background.style.display = "flex";
        if (symbolsContainer) symbolsContainer.style.display = "flex";
    });

    container.addEventListener("mouseleave", () => {
        if (background) background.style.display = "none";
        if (symbolsContainer) symbolsContainer.style.display = "none";
    });
});