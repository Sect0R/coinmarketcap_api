# Coinmarketcap.com API wrapper

You can use it as example or for hiring tests.

## Usage

> npm run start --port=5000 --api_key=[CMC_PRO_API_KEY]

**If you don't have API KEY - follow instructions https://coinmarketcap.com/api/documentation/v1/#**

### Request example (Javascript)

```javascript

import axios from 'axios';

export default {
    fetchData(start = 1, limit = 10) {
        return axios.get(`http://localhost:5000/list?start=${start}&limit=${limit}&convert=USD`);
    },
};
```

### Response

```json
{
    "status": {
        "timestamp": "2021-10-26T11:25:24.237Z",
        "error_code": 0,
        "error_message": null,
        "elapsed": 8,
        "credit_count": 1,
        "notice": null,
        "total_count": 6784
    },
    "data": [{
        "id": 1,
        "name": "Bitcoin",
        "symbol": "BTC",
        "slug": "bitcoin",
        "num_market_pairs": 8486,
        "date_added": "2013-04-28T00:00:00.000Z",
        "tags": ["mineable", "pow", "sha-256", "store-of-value", "state-channels", "coinbase-ventures-portfolio", "three-arrows-capital-portfolio", "polychain-capital-portfolio", "binance-labs-portfolio", "arrington-xrp-capital", "blockchain-capital-portfolio", "boostvc-portfolio", "cms-holdings-portfolio", "dcg-portfolio", "dragonfly-capital-portfolio", "electric-capital-portfolio", "fabric-ventures-portfolio", "framework-ventures", "galaxy-digital-portfolio", "huobi-capital", "alameda-research-portfolio", "a16z-portfolio", "1confirmation-portfolio", "winklevoss-capital", "usv-portfolio", "placeholder-ventures-portfolio", "pantera-capital-portfolio", "multicoin-capital-portfolio", "paradigm-xzy-screener"],
        "max_supply": 21000000,
        "circulating_supply": 18854843,
        "total_supply": 18854843,
        "platform": null,
        "cmc_rank": 1,
        "last_updated": "2021-10-26T11:24:02.000Z",
        "quote": {
            "USD": {
                "price": 62872.50696639424,
                "volume_24h": 32966560258.04826,
                "volume_change_24h": 3.6317,
                "percent_change_1h": 0.0967383,
                "percent_change_24h": -0.21617743,
                "percent_change_7d": 1.10107682,
                "percent_change_30d": 45.69654194,
                "percent_change_60d": 32.31418199,
                "percent_change_90d": 55.81126995,
                "market_cap": 1185451247867.7698,
                "market_cap_dominance": 45.0082,
                "fully_diluted_market_cap": 1320322646294.28,
                "last_updated": "2021-10-26T11:24:02.000Z"
            }
        }
    }, {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "num_market_pairs": 4653,
        "date_added": "2015-08-07T00:00:00.000Z",
        "tags": ["mineable", "pow", "smart-contracts", "ethereum", "binance-smart-chain", "coinbase-ventures-portfolio", "three-arrows-capital-portfolio", "polychain-capital-portfolio", "binance-labs-portfolio", "arrington-xrp-capital", "blockchain-capital-portfolio", "boostvc-portfolio", "cms-holdings-portfolio", "dcg-portfolio", "dragonfly-capital-portfolio", "electric-capital-portfolio", "fabric-ventures-portfolio", "framework-ventures", "hashkey-capital-portfolio", "kinetic-capital", "huobi-capital", "alameda-research-portfolio", "a16z-portfolio", "1confirmation-portfolio", "winklevoss-capital", "usv-portfolio", "placeholder-ventures-portfolio", "pantera-capital-portfolio", "multicoin-capital-portfolio", "paradigm-xzy-screener"],
        "max_supply": null,
        "circulating_supply": 118082859.999,
        "total_supply": 118082859.999,
        "platform": null,
        "cmc_rank": 2,
        "last_updated": "2021-10-26T11:24:02.000Z",
        "quote": {
            "USD": {
                "price": 4212.872463547352,
                "volume_24h": 15614095121.904224,
                "volume_change_24h": -3.5576,
                "percent_change_1h": 0.02041417,
                "percent_change_24h": 1.72820293,
                "percent_change_7d": 11.00559783,
                "percent_change_30d": 42.01252784,
                "percent_change_60d": 34.4547518,
                "percent_change_90d": 81.62155764,
                "market_cap": 497468029306.70416,
                "market_cap_dominance": 18.8824,
                "fully_diluted_market_cap": 497468029306.7,
                "last_updated": "2021-10-26T11:24:02.000Z"
            }
        }
    }]
}
```
