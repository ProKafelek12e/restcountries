var json
var tab
async function getData(){
    const data = await fetch('https://restcountries.com/v3.1/all')
    json = await data.json()
    createList()
}
var inuptValue 

getData()

function createList(){
    document.getElementById("main").innerHTML = ""
    for(let i=0;i<json.length;i++){
        //regions filter
        for(let k=0;k<=filtr.length;k++){
            if(json[i].region==filtr[k]){
                //search
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
}

var filtr = []
function filter(){
    tab =[
        {name:"Oceania",check:document.getElementById("oc").checked},
        {name:"Africa",check:document.getElementById("af").checked},
        {name:"Americas",check:document.getElementById("am").checked},
        {name:"Antarctica",check:document.getElementById("an").checked},
        {name:"Europe",check:document.getElementById("eu").checked},
        {name:"Asia",check:document.getElementById("as").checked},
    ]
    filtr =[]
    for(let j=0;j<tab.length;j++){
        if(tab[j].check==true){
            filtr.push(tab[j].name)            
        }
    }
    createList()
}

function find(){
    const input = document.getElementById("txtSearch").value.toLowerCase()
    console.log(input)
}


document.querySelector('#txtSearch').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      find()
    }
});