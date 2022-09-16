const Home = async (products) =>
{

    const view = `
            <div class="Products">
                ${products.map(product => `
                <a href="#/${product._id}/">
                    <article class="Product-item">
                        <img src="${product.img.url}" alt="${product.name}">
                        <div class="Product-item-description">
                            <p class="Product-item-category">${product.category}</p>
                            <p class="Product-item-name">${product.name}</p>
                        </div>   
                    </article>
                </a>
                `).join('')}
            </div>
        `;
    
    return view;
}

export default Home;