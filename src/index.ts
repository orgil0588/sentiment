import { crawler } from './crawler';
import { pair } from './constants';



const loop = async () => {
    const arr = []
    await Promise.all(pair.map(async (url) => {
        const crawl = await crawler(url)
        arr.push(crawl)
    }))
    return arr
}
const convert = async () => {
    const a = await loop()

    let aud = 0
    let cad = 0
    let usd = 0
    let eur = 0
    let nzd = 0
    let chf = 0
    let jpy = 0
    let gbp = 0


    Promise.all(
        a.map(e => {
            if (e.trend === "short") {
                e.trend = 'long'
                e.value = 100 - e.value
            }
            e.value = e.value - 50
            const splitter = e.pair.split('-')
            splitter[0] === 'aud' ? aud += e.value : (splitter[1] === 'aud' ? aud += (e.value * -1) : '')
            splitter[0] === 'usd' ? usd += e.value : (splitter[1] === 'usd' ? usd += (e.value * -1) : '')
            splitter[0] === 'cad' ? cad += e.value : (splitter[1] === 'cad' ? cad += (e.value * -1) : '')
            splitter[0] === 'eur' ? eur += e.value : (splitter[1] === 'eur' ? eur += (e.value * -1) : '')
            splitter[0] === 'nzd' ? nzd += e.value : (splitter[1] === 'nzd' ? nzd += (e.value * -1) : '')
            splitter[0] === 'chf' ? chf += e.value : (splitter[1] === 'chf' ? chf += (e.value * -1) : '')
            splitter[0] === 'jpy' ? jpy += e.value : (splitter[1] === 'jpy' ? jpy += (e.value * -1) : '')
            splitter[0] === 'gbp' ? gbp += e.value : (splitter[1] === 'gbp' ? gbp += (e.value * -1) : '')

        })
    )

    const dict = {
        aud: parseInt((aud / 7 * 10).toString()) / 10,
        cad: parseInt((cad / 7 * 10).toString()) / 10,
        eur: parseInt((eur / 7 * 10).toString()) / 10,
        usd: parseInt((usd / 7 * 10).toString()) / 10,
        nzd: parseInt((nzd / 7 * 10).toString()) / 10,
        gbp: parseInt((gbp / 7 * 10).toString()) / 10,
        chf: parseInt((chf / 7 * 10).toString()) / 10,
        jpy: parseInt((jpy / 7 * 10).toString()) / 10,
    }
    console.log(dict)
    return dict


}

const result = async () => {

    const dict = await convert()
    const result = [
        {
            pair: 'aud-cad',
            value: 0
        },
        {
            pair: 'aud-chf',
            value: 0
        },
        {
            pair: 'aud-jpy',
            value: 0
        },
        {
            pair: 'aud-nzd',
            value: 0
        },
        {
            pair: 'aud-usd',
            value: 0
        },
        {
            pair: 'cad-chf',
            value: 0
        },
        {
            pair: 'cad-jpy',
            value: 0
        },
        {
            pair: 'chf-jpy',
            value: 0
        },
        {
            pair: 'eur-aud',
            value: 0
        },
        {
            pair: 'eur-cad',
            value: 0
        },
        {
            pair: 'eur-chf',
            value: 0
        },
        {
            pair: 'eur-jpy',
            value: 0
        },
        {
            pair: 'eur-gbp',
            value: 0
        },
        {
            pair: 'eur-nzd',
            value: 0
        },
        {
            pair: 'eur-usd',
            value: 0
        },
        {
            pair: 'gbp-aud',
            value: 0
        },
        {
            pair: 'gbp-chf',
            value: 0
        },
        {
            pair: 'gbp-jpy',
            value: 0
        },
        {
            pair: 'gbp-nzd',
            value: 0
        },
        {
            pair: 'gbp-usd',
            value: 0
        },
        {
            pair: 'nzd-chf',
            value: 0
        },
        {
            pair: 'nzd-jpy',
            value: 0
        },
        {
            pair: 'nzd-usd',
            value: 0
        },
        {
            pair: 'usd-cad',
            value: 0
        },
        {
            pair: 'usd-chf',
            value: 0
        },
        {
            pair: 'usd-jpy',
            value: 0
        },
    ]

    result.map(e => {
        e.pair === 'aud-cad' ? e.value = dict.aud + (dict.cad * -1) : ''
        e.pair === 'aud-chf' ? e.value = dict.aud + (dict.chf * -1) : ''
        e.pair === 'aud-jpy' ? e.value = dict.aud + (dict.jpy * -1) : ''
        e.pair === 'aud-nzd' ? e.value = dict.aud + (dict.nzd * -1) : ''
        e.pair === 'aud-usd' ? e.value = dict.aud + (dict.usd * -1) : ''
        e.pair === 'cad-chf' ? e.value = dict.cad + (dict.chf * -1) : ''
        e.pair === 'cad-jpy' ? e.value = dict.cad + (dict.jpy * -1) : ''
        e.pair === 'chf-jpy' ? e.value = dict.chf + (dict.jpy * -1) : ''
        e.pair === 'eur-aud' ? e.value = dict.eur + (dict.aud * -1) : ''
        e.pair === 'eur-cad' ? e.value = dict.eur + (dict.cad * -1) : ''
        e.pair === 'eur-chf' ? e.value = dict.eur + (dict.chf * -1) : ''
        e.pair === 'eur-jpy' ? e.value = dict.eur + (dict.jpy * -1) : ''
        e.pair === 'eur-gbp' ? e.value = dict.eur + (dict.gbp * -1) : ''
        e.pair === 'eur-nzd' ? e.value = dict.eur + (dict.nzd * -1) : ''
        e.pair === 'eur-usd' ? e.value = dict.eur + (dict.usd * -1) : ''
        e.pair === 'gbp-aud' ? e.value = dict.gbp + (dict.aud * -1) : ''
        e.pair === 'gbp-chf' ? e.value = dict.gbp + (dict.chf * -1) : ''
        e.pair === 'gbp-jpy' ? e.value = dict.gbp + (dict.jpy * -1) : ''
        e.pair === 'gbp-nzd' ? e.value = dict.gbp + (dict.nzd * -1) : ''
        e.pair === 'gbp-usd' ? e.value = dict.gbp + (dict.usd * -1) : ''
        e.pair === 'nzd-chf' ? e.value = dict.chf + (dict.nzd * -1) : ''
        e.pair === 'nzd-jpy' ? e.value = dict.jpy + (dict.nzd * -1) : ''
        e.pair === 'nzd-usd' ? e.value = dict.usd + (dict.nzd * -1) : ''
        e.pair === 'usd-cad' ? e.value = dict.usd + (dict.cad * -1) : ''
        e.pair === 'usd-chf' ? e.value = dict.usd + (dict.chf * -1) : ''
        e.pair === 'usd-jpy' ? e.value = dict.usd + (dict.jpy * -1) : ''        
    })
    console.log(result)
}
result()
