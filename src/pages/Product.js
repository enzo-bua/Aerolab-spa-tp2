import findProduct from '../utils/findProduct'
import Error404 from './Error404';

const productInfo = async (products) =>
{
    const product = findProduct(products);
    console.log(product)
    const view = product? `
                <section class="Product-detail-container">
                    <img class="Product-image"src="${product.img.hdUrl}" alt="${product.name}">
                    <div class="Product-details">
                        <p><strong>Name:</strong> ${product.name}</p>
                        <p><strong>Category:</strong> ${product.category}</p>
                        <p><strong>Cost:</strong> ${product.cost}</p>
                    </div>
                </section>
                `
                : Error404();

    return view;
};

export default productInfo;