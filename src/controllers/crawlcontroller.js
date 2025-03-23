import { getBrandProducts } from "../services/crawlerservice.js";

const crawBrandHandler = async (req, res) => {
    const { brand } = req.body

    if (!brand) {
        return res.status(400).json({
            sucess: false,
            message: "É necessário informar a marca desejada no campo 'brand'."
        })
    }

    try {
        const products = await getBrandProducts(brand)
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

export { crawBrandHandler }