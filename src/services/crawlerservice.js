import { crawlBrandItems } from "../crawlers/crawler.js";

const getBrandProducts = async (brand) => {
    try {
        const products = await crawlBrandItems(brand)
        return products
    } catch (error) {
        throw new Error(`Erro ao processar a página`)
    }
}

export { getBrandProducts }