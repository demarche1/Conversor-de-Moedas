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
    estimate(document.getElementById("select").value)
}




