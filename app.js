var json
var tab
async function getData(){
    const data = await fetch('https://restcountries.com/v3.1/all')
    json = await data.json()
    filter()
}
var searchValue = ""
getData()

function createList(){
    document.getElementById("main").innerHTML = ""
    for(let i=0;i<json.length;i++){
        //regions filter
        for(let k=0;k<=filtr.length;k++){
            if(json[i].continents==filtr[k]){
                //search
                if(searchValue != ""){
                    if(json[i].name.common.toLowerCase().includes(searchValue)){
                        const div = document.createElement("div")
                        div.classList.add("div")
                        div.setAttribute("onmouseover",`timeout(${i})`)
                        div.setAttribute("onmouseout","cleartime()")
                        
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
                else{
                    const div = document.createElement("div")
                        div.classList.add("div")
                        div.setAttribute("onmouseover",`timeout(${i})`)
                        div.setAttribute("onmouseout","cleartime()")

                        const flag = document.createElement("img")
                        flag.classList.add("flag")
                        flag.src = json[i].flags.png
                        flag.setAttribute('onclick',`bigDiv(${i})`)

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
}

var filtr = []
function filter(){
    tab =[
        {name:"Oceania",check:document.getElementById("oc").checked},
        {name:"Africa",check:document.getElementById("af").checked},
        {name:"North America",check:document.getElementById("amn").checked},
        {name:"South America",check:document.getElementById("ams").checked},
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
    searchValue = document.getElementById("txtSearch").value.toLowerCase()
    createList()
}
var times 
function timeout(i){
    console.log("d")
    times = window.setTimeout(()=>{
        bigDiv(i)
    },3000)
}
function cleartime(){
    window.clearTimeout(times)
}

function bigDiv(i){
    removeElementsByClass("Big")
    var kraj = json[i]
    const Bdiv = document.createElement("div")
    Bdiv.classList.add("Big")
    

    const Bname =document.createElement("h1")
    Bname.innerHTML = kraj.name.common
    Bname.classList.add("name")

    const Brest = document.createElement("div")
    Brest.classList.add("rest")

    const Bcapital =document.createElement("h2")
    Bcapital.innerHTML = kraj.capital
    Bcapital.classList.add("capital")

    const Barea =document.createElement("h2")
    Barea.innerHTML = kraj.area
    Barea.classList.add("area")

    const Bpopulation =document.createElement("h2")
    Bpopulation.innerHTML = kraj.population
    Bpopulation.classList.add("population")

    const Bflag =document.createElement("img")
    Bflag.src = kraj.flags.png
    Bflag.classList.add("Bflag")

    const Bbutton = document.createElement("button")
    Bbutton.innerHTML = "X"
    Bbutton.setAttribute("onclick","removeElementsByClass('Big')")

    Bdiv.appendChild(Bname)
    Brest.appendChild(Bcapital)
    Brest.appendChild(Barea)
    Brest.appendChild(Bpopulation)
    Brest.appendChild(Bflag)
    Brest.appendChild(Bbutton)
    Bdiv.appendChild(Brest)
    document.getElementById("main").appendChild(Bdiv)
}
function removeElementsByClass(className){
    console.log("x"+className)
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}