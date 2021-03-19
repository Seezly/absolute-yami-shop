import stripeKeys from "./stripeKeys";

const fetchOptions = {
    headers: {
        Authorization: `Bearer ${stripeKeys.secret_key}`
    }
};

let products, prices;

Promise.all(
    [fetch('https://api.stripe.com/v1/products', fetchOptions),
    fetch('https://api.stripe.com/v1/prices', fetchOptions)]
)
.then(responses => Promise.all(responses.map(res => res.json())))
.then(data => [products, prices] = data)
.catch(err => console.error(err));