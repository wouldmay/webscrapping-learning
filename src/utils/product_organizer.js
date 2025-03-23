const productOrganizer = (products) => {
    // Organiza os produtos do mais barato para o mais caro
    products.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^\d,.-]/g, '').replace(',', '.'));
        const priceB = parseFloat(b.price.replace(/[^\d,.-]/g, '').replace(',', '.'));
        return priceA - priceB;
    });

    return products
}

export default productOrganizer;