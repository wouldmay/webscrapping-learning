import { getBrandProducts } from "../services/crawlerservice.js";

const crawBrandHandler = async (res) => {
    try {
        const products = await getBrandProducts()
        res.json({
            sucess: true,
            products
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: "Erro ao realizar o webscrapping.",
            error: error.message
        })
    }
}

const getProductHandler = async (res) => {
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

export { crawBrandHandler, getProductHandler }