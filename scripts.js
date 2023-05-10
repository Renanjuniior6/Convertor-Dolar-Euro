const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')
const dolar = 4.94
const euro = 5.43
const bitcoin = 0.0000073

const convertValues = () => {
const inputReais = document.getElementById('input-real').value
const realValueText = document.getElementById('real-value-text')
const currencyValueText = document.getElementById('currency-value-text')


realValueText.innerHTML = new Intl.NumberFormat("pt-BR", { 
    style: "currency",
    currency: "BRL",
}).format(inputReais)


if(select.value === 'US$ Dólar Americano') { 
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", { 
        style: "currency",
        currency: "USD",
    }).format(inputReais / dolar)
}


if(select.value === '€ Euro') {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", { 
        style: "currency",
        currency: "EUR",
    }).format(inputReais / euro)
}

if(select.value === 'Bitcoin') {
    currencyValueText.innerHTML = inputReais * bitcoin
}

}

changeCurrency = () => {
const currencyName = document.getElementById('currency-name')
const currencyImg = document.getElementById('currency-img')

if(select.value === 'US$ Dólar Americano') {
    currencyName.innerHTML = 'Dólar Americano'
    currencyImg.src = './assets/estados-unidos (1) 1.jpg'
}

if(select.value === '€ Euro') {
    currencyName.innerHTML = 'Euro'
    currencyImg.src = './assets/Design sem nome 1.jpg'
}

if(select.value === 'Bitcoin') {
    currencyName.innerHTML = 'Bitcoin'
    currencyImg.src = './assets/bitcoin.jpg'
}

convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)