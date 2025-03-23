// import { getBrandProducts } from "../services/crawlerservice.js";
import { crawlBrandItems } from "../crawlers/crawler.js";

// Função que busca os produtos de acordo com a marca
const getProductHandler = async (req, res) => {
    try {
        const { brand } = req.query
        const allProducts = await crawlBrandItems()

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