const dropdowns = document.querySelectorAll(".dropdown select")
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg")


document.addEventListener("load", () => {
    updateExchangeRate();
})

for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option")
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected"
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected"
        }
        select.append(newOption)
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    // whatever was selected, from line no 24 for ex usd so now element holds USD and element.value means USD.value which is US and that got stored in currCode. 
    let currCode = element.value;
    let countryCode = countryList[currCode]; // Go inside this object, find the property whose key is equal to the string inside currCode(USD, INR), and give me its vale for USD-US for INR-IN.
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input")
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = 1;
    }


    // console.log(fromCurr.value, toCurr.value);
    const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurr.value.toLowerCase()}.json`;

    const res = await fetch(URL);
    const data = await res.json();

    const rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()]

    const converted = amtVal * rate;
    // console.log("Rate:", rate, "Converted:", converted);

    msg.innerText = `${amtVal} ${fromCurr.value} = ${converted} ${toCurr.value}`
}