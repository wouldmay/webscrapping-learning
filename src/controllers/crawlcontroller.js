import { getBrandProducts } from "../services/crawlerservice.js";

const getProductHandler = async (req, res) => {
    try {
        const { brand } = req.query
        const allProducts = await getBrandProducts()

        const filteredProducts = brand
            ? allProducts.filter(product => product.name.toLowerCase().includes(brand.toLowerCase()))
            : allProducts

        res.json({
            sucess: true,
            products: filteredProducts
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: "Erro ao buscar os produtos.",
            error: error.message
        })
    }
}

export { getProductHandler }