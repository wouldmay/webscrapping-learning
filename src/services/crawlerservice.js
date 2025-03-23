import { crawlBrandItems } from "../crawlers/crawler.js";

const getBrandProducts = async () => {
    try {
        const products = await crawlBrandItems()
        return products
    } catch (error) {
        throw new Error(`Erro ao processar a página`)
    }
}

export { getBrandProducts }