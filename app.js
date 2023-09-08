var json
async function getData(){
    const data = await fetch('https://restcountries.com/v3.1/all')
    json = await data.json()
    createList()
}
var inuptValue 

getData()
function createList(){
    document.getElementById("main").innerHTML = ""
    for(var i=0;i<json.length;i++){
        if(json[i].name.common.toLowerCase().includes(inuptValue)){
            const div = document.createElement("div")
            div.classList.add("div")
            const flag = document.createElement("img")
            flag.classList.add("flag")
            flag.src = json[i].flags.png

            const name = document.createElement("h2")
            name.classList.add("name")
            name.innerHTML = json[i].name.common

            const capital = document.createElement("h3")
            capital.classList.add("capital")
            if(json[i].capital == undefined){
                capital.innerHTML = "No capital"
                capital.classList.add("red")
            }
            else{
                capital.innerHTML = json[i].capital
            }

            const population = document.createElement("h3")
            population.classList.add("population")   
            population.innerHTML = json[i].population     

            div.appendChild(name)
            div.appendChild(flag)
            div.appendChild(capital)
            div.appendChild(population)
            document.getElementById("main").appendChild(div)
        }
        else if(inuptValue = ""){
            const div = document.createElement("div")
            div.classList.add("div")
            const flag = document.createElement("img")
            flag.classList.add("flag")
            flag.src = json[i].flags.png

            const name = document.createElement("h2")
            name.classList.add("name")
            name.innerHTML = json[i].name.common

            const capital = document.createElement("h3")
            capital.classList.add("capital")
            if(json[i].capital == undefined){
                capital.innerHTML = "No capital"
                capital.classList.add("red")
            }
            else{
                capital.innerHTML = json[i].capital
            }

            const population = document.createElement("h3")
            population.classList.add("population")   
            population.innerHTML = json[i].population     

            div.appendChild(name)
            div.appendChild(flag)
            div.appendChild(capital)
            div.appendChild(population)
            document.getElementById("main").appendChild(div)
        }
    }
}


function find(){
    console.log("click*")
    inuptValue = document.getElementById("txtSearch").value.toLowerCase()
    console.log(inuptValue)
    createList()
}

document.querySelector('#txtSearch').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      find()
    }
});