import cheerio from 'cheerio'
import axios from "axios"
import { selector,trend } from './constants';
export const crawler = async (url:string) => {
try {
    const res = await axios.get(`https://www.ig.com/us/forex/markets-forex/${url}`)
    const $ = await cheerio.load(res.data)
    const p =await $(selector).text()
    const t = await $(trend).text()
    console.log(`In crawler ${url} ${p} ${t} --------------------------`)
    return {trend: t, value: parseInt(p.replace('%', '')), pair: url}
} catch (error) {
    return error
}
  
 };


