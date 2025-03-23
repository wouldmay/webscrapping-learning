import axios from 'axios';
import * as cheerio from 'cheerio';
import productOrganizer from '../utils/product_organizer.js';

const BASE_URL = 'https://webscraper.io/test-sites/e-commerce/static/computers/laptops';


// Func para coletar os produtos do site e suas informações
const crawlBrandItems = async () => {
    try {

        let products = []
        let currentPage = 1
        let lastPage = 1

        // const response = await axios.get(BASE_URL)
        const firstPageResponse  = await axios.get(BASE_URL)
        const $firstPage = cheerio.load(firstPageResponse.data)

        lastPage = Math.max(...$firstPage('.pagination .page-item a').map((i, el) => parseInt($firstPage(el).text()) || 1).get())

        console.log(`Numero total de páginas: ${lastPage}`)

        for (currentPage = 1; currentPage <= lastPage; currentPage++) {
            
            const url = `${BASE_URL}?page=${currentPage}`
            const response = await axios.get(url)
            const $ = cheerio.load(response.data)

            $('.col-md-4.col-xl-4.col-lg-4').each((index, element) => {
                // Coleta de dados dos produtos
                const productName = $(element).find('.title').attr('title').trim();
                const productPrice = $(element).find('.price').text().trim();
                const productDescription = $(element).find('.description').text().trim();
                const productReview = $(element).find('.review-count').text().trim();
                const productLink = 'https://webscraper.io' + $(element).find('.title').attr('href');

                products.push({
                    name: productName,
                    price: productPrice,
                    description: productDescription,
                    review: productReview,
                    link: productLink
                })
            })
        }
        
        productOrganizer(products)

        return products
    } catch (error) {
        console.log(`Erro ao acessar a página ${BASE_URL}`, error)
        throw error
    }
};

export { crawlBrandItems }