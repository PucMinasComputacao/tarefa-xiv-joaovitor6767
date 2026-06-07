const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

const categorias = {};

produtos.forEach(produto => {
    categorias[produto.categoria] =
        (categorias[produto.categoria] || 0) + 1;
});

const ctx = document.getElementById("graficoCategorias");

new Chart(ctx, {
    type: "pie",
    data: {
        labels: Object.keys(categorias),
        datasets: [{
            label: "Produtos",
            data: Object.values(categorias)
        }]
    }
});