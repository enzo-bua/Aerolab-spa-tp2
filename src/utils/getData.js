const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzIxMDc5YzM1MmE0MTAwMjE1OThjODUiLCJpYXQiOjE2NjMxMDkwMjB9.ywi3LdZ9BFAMdC3HXtVCq1ovai_AR4rk14oPG5Ivh28';
const API = `https://coding-challenge-api.aerolab.co/products?token=${token}`;

const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API;

    try 
    {
        const response = await fetch(apiURL);
        const data = response.json();
        return data;
    } catch(error) 
    {
        console.log('Fetch Error..!!', error);
    };
    
};

export default getData
