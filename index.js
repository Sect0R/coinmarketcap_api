const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

if (!process.env.npm_config_api_key) {
    console.error('--api_key argument is required');
    process.exit();
}

const PORT = process.env.npm_config_port || 5000;
const CMC_PRO_API_KEY = process.env.npm_config_api_key;

const requestOptions = {
    convert: 'USD',
    headers: {
        'X-CMC_PRO_API_KEY': CMC_PRO_API_KEY,
    },
};

//Init Middleware
app.use([express.json({extended: false}), cors()]);

app.get('/list', (req, res) => {
    if (Number(req.query.start) < 1) {
        res.json({
            success: false,
            error: 'Start must be greater than 0',
        });
    }

    const start = req.query.start || 1;
    const limit = req.query.limit || 10;

    requestOptions.convert = req.query.convert || 'USD';

    axios.get(
        `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=${start}&limit=${limit}`,
        requestOptions,
    ).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        res.json(error);
    });
});

//App listen to PORT
app.listen(PORT, function () {
    console.log(`Express server listening on port ${PORT}`);
});
