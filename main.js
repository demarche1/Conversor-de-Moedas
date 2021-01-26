

function estimate(currency){
    let input = document.getElementById("exchenge_value")
    let value = Number(input.value)
    fetch(`https://api.exchangeratesapi.io/latest?base=${currency}`)
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL * value
        let result = rate.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("exchenge_result").innerHTML = result
    })
}

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
            estimate(select)
        }
        if(select == "CAD"){
            estimate(select)
        }
        if(select == "GBP"){
            estimate(select)
        }
        if(select == "EUR"){
            estimate(select)
        }
        if(select == "JPY"){
            estimate(select)
        }
        if(select == "CNY"){
            estimate(select)
        }
        if(select == "AUD"){
            estimate(select)
        }
        if(select == "HKD"){
            estimate(select)
        }
        if(select == "ISK"){
            estimate(select)
        }
        if(select == "PHP"){
            estimate(select)
        }
        if(select == "DKK"){
            estimate(select)
        }
        if(select == "HUF"){
            estimate(select)
        }
        if(select == "CZK"){
            estimate(select)
        }
        if(select == "RON"){
            estimate(select)
        }
        if(select == "SEK"){
            estimate(select)
        }
        if(select == "IDR"){
            estimate(select)
        }
        if(select == "INR"){
            estimate(select)
        }
        if(select == "RUB"){
            estimate(select)
        }
        if(select == "HRK"){
            estimate(select)
        }
        if(select == "THB"){
            estimate(select)
        }
        if(select == "CHF"){
            estimate(select)
        }
        if(select == "MYR"){
            estimate(select)
        }
        if(select == "BGN"){
            estimate(select)
        }
        if(select == "TRY"){
            estimate(select)
        }
        if(select == "NOK"){
            estimate(select)
        }
        if(select == "NZD"){
            estimate(select)
        }
        if(select == "ZAR"){
            estimate(select)
        }
        if(select == "MXN"){
            estimate(select)
        }
        if(select == "SGD"){
            estimate(select)
        }
        if(select == "ILS"){
            estimate(select)
        }
        if(select == "KRW"){
            estimate(select)
        }
        if(select == "PLN"){
            estimate(select)
        }
    }
    catch(err){
        alert("Aconteceu algum erro, desculpe pelo o incoveniênte")
    }
}




