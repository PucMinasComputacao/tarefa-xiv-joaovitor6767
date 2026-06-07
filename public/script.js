const data = {
    produtos: [
        {
            id: 1,
            nome: "Smartphone Galaxy S23",
            preco: 3499.90,
            categoria: "Celulares",
            descricao: "Smartphone com 128GB"
        },
        {
            id: 2,
            nome: "Notebook Dell Inspiron 15",
            preco: 4599.00,
            categoria: "Notebooks",
            descricao: "Notebook Intel i7"
        },
        {
            id: 3,
            nome: "iPhone 15",
            preco: 5299,
            categoria: "Celulares",
            descricao: "Apple iPhone"
        }
    ]
};

const container = document.getElementById("produtos");

data.produtos.forEach(produto => {
    container.innerHTML += `
        <div class="card">
            <h3>${produto.nome}</h3>
            <p>Categoria: ${produto.categoria}</p>
            <p>Preço: R$ ${produto.preco}</p>
            <p>${produto.descricao}</p>
        </div>
    `;
});

localStorage.setItem("produtos", JSON.stringify(data.produtos));
  