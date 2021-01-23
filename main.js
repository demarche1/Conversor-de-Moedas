
const EUR_TO_BRL = fetch("https://api.exchangeratesapi.io/latest?base=EUR").then((result) => {
    return result.json()
}).then((data) => {
    return data.rates.BRL
})

const GBP_TO_BRL = fetch("https://api.exchangeratesapi.io/latest?base=GBP").then((result) => {
    return result.json()
}).then((data) => {
    return data.rates.BRL
})

const CAD_TO_BRL = fetch("https://api.exchangeratesapi.io/latest?base=CAD").then((result) => {
    return result.json()
}).then((data) => {
    return data.rates.BRL
})


function estimate_USD(){
    let input = document.getElementById("exchenge_value_USD")
    let value = Number(input.value)
    fetch("https://api.exchangeratesapi.io/latest?base=USD")
    .then((result) => {
        return result.json()
    })
    .then((data) => {
        let rate = data.rates.BRL
        let showResult = `${(rate * value).toFixed(2)}`
        document.getElementById("result_USD").innerHTML += showResult

    })
}