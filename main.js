

// Estimate functions

function estimate_USD(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=USD")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_CAD(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=CAD")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_GBP(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=GBP")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_EUR(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=EUR")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_JPY(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=JPY")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(3)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_CNY(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=CNY")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_AUD(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=AUD")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_HKD(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=HKD")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_ISK(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=ISK")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(3)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_PHP(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=PHP")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_DKK(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=DKK")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_HUF(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=HUF")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(3)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_CZK(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=CZK")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_RON(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=RON")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_SEK(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=SEK")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_IDR(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=IDR")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(5)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_INR(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=INR")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_RUB(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=RUB")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_HRK(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=HRK")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_THB(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=THB")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_CHF(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=CHF")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_MYR(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=MYR")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_BGN(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=BGN")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_TRY(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=TRY")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_NOK(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=NOK")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_NZD(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=NZD")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_ZAR(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=ZAR")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_MXN(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=MXN")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_SGD(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=SGD")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_ILS(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=ILS")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_KRW(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=KRW")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(4)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}

function estimate_PLN(){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=PLN")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `R$ ${(rate * value).toFixed(2)}`
        document.getElementById("exchenge_result").innerHTML = showResult

    })
}
/////////////////////////

function date(){
    fetch("https://api.exchangeratesapi.io/latest?base=USD")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        const date = data.date
        let show_date = `Cotação ${date}`
        document.getElementById("title_date").innerHTML = show_date
    })
}

function exchenge(){
    let select = document.getElementById("select").value
    try{
        if(select == "USD"){
            estimate_USD()
        }
        if(select == "CAD"){
            estimate_CAD()
        }
        if(select == "GBP"){
            estimate_GBP()
        }
        if(select == "EUR"){
            estimate_EUR()
        }
        if(select == "JPY"){
            estimate_JPY()
        }
        if(select == "CNY"){
            estimate_CNY()
        }
        if(select == "AUD"){
            estimate_AUD()
        }
        if(select == "HKD"){
            estimate_HKD()
        }
        if(select == "ISK"){
            estimate_ISK()
        }
        if(select == "PHP"){
            estimate_PHP()
        }
        if(select == "DKK"){
            estimate_DKK()
        }
        if(select == "HUF"){
            estimate_HUF()
        }
        if(select == "CZK"){
            estimate_CZK()
        }
        if(select == "RON"){
            estimate_RON()
        }
        if(select == "SEK"){
            estimate_SEK()
        }
        if(select == "IDR"){
            estimate_IDR()
        }
        if(select == "INR"){
            estimate_INR()
        }
        if(select == "RUB"){
            estimate_RUB()
        }
        if(select == "HRK"){
            estimate_HRK()
        }
        if(select == "THB"){
            estimate_THB()
        }
        if(select == "CHF"){
            estimate_CHF()
        }
        if(select == "MYR"){
            estimate_MYR()
        }
        if(select == "BGN"){
            estimate_BGN()
        }
        if(select == "TRY"){
            estimate_TRY()
        }
        if(select == "NOK"){
            estimate_NOK()
        }
        if(select == "NZD"){
            estimate_NZD()
        }
        if(select == "ZAR"){
            estimate_ZAR()
        }
        if(select == "MXN"){
            estimate_MXN()
        }
        if(select == "SGD"){
            estimate_SGD()
        }
        if(select == "ILS"){
            estimate_ILS()
        }
        if(select == "KRW"){
            estimate_KRW()
        }
        if(select == "PLN"){
            estimate_PLN()
        }
    }
    catch(err){
        alert("Aconteceu algum erro, desculpe pelo o incoveniênte")
    }
}