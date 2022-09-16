import Header from '../templates/Header';
import Home from '../pages/Home';
import Products from '../pages/Product';
import Error404 from '../pages/Error404'

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import getData from '../utils/getData';

const routes = {
    '/': Home,
    '/:id': Products,
    '/contact':"Contact"
};

const router = async () => {
    const products = await getData()
    const header = null ||  document.getElementById('header');
    const content = null ||  document.getElementById('content');

    header.innerHTML= await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render(products);

};

export default router;
