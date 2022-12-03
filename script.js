const button = document.getElementById("submit");
const select = document.getElementById('currency-select');

const dolar = 5.21;
const euro = 5.49;
const btc = 88837.91;

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
    

    convertValues()
}

button.addEventListener("click", convertValues);
select.addEventListener('change', changeCurrency);
