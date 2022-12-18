const button = document.getElementById("submit");
const select = document.getElementById('currency-select');
let dolar;
let euro; 
let btc;
let eth; 

async function getCurrencies (){
    let req = await fetch('https://brapi.dev/api/v2/currency?currency=USD-BRL%2CEUR-BRL')
    let json = await req.json();
    dolar = json.currency[0].high;
    euro = json.currency[1].high;
    //console.log(json.currency[0].high)
}
getCurrencies()
async function getCrypto (){
    let req = await fetch('https://brapi.dev/api/v2/crypto?coin=BTC%2CETH&currency=BRL')
    let json = await req.json();
    btc = json.coins[0].regularMarketDayHigh
    eth = json.coins[1].regularMarketDayHigh
    console.log(json.coins[1].regularMarketDayHigh)
}
getCrypto()


const convertValues = () => {
    const realValue = document.getElementById("realValue").value.replace(',', '.');
    const currencyReal = document.getElementById("real-value");
    const currencyConverted = document.getElementById("currencyConverted");
    

    currencyReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(realValue);

    if(select.value === 'usd'){
    currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "USD",
    }).format(realValue / dolar);
}

    if(select.value === 'eur'){
    currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "EUR",
    }).format(realValue / euro);
}

    if(select.value === 'btc'){
        currencyConverted.innerHTML = '₿ ' + (realValue / btc).toFixed(6);
    }
    if(select.value === 'eth'){
        currencyConverted.innerHTML = 'Ξ ' + (realValue / eth).toFixed(6);
    }
};

const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name');
    const currencyFlag = document.getElementById('currencyFlag');
    if(select.value == 'eur'){
        currencyName.innerHTML = "Euro"
        currencyFlag.src = './assets/euro.svg'
    }
    if(select.value == 'usd'){
        currencyName.innerHTML = "Dólar Americano"
        currencyFlag.src = './assets/dolar.svg'
    }
    if(select.value == 'btc'){
        currencyName.innerHTML = "Bitcoin"
        currencyFlag.src = './assets/bitcoin.svg'
    }
    if(select.value == 'eth'){
        currencyName.innerHTML = "Ethereum"
        currencyFlag.src = 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'
    }

    convertValues()
}

button.addEventListener("click", convertValues);
select.addEventListener('change', changeCurrency);
