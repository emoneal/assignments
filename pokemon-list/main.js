const xhr = new XMLHttpRequest()
var JSONdata = ""
var data = ""
var pokemon = ""

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        JSONdata = xhr.responseText
        data = JSON.parse(JSONdata)
        pokemon = data.objects[0].pokemon
        showData(pokemon)
    }
}

function showData(arr) {
    for (let i = 0; i < arr.length; i++) {
        const h1 = document.createElement('h1')
        h1.textContent = arr[i].name
        document.body.appendChild(h1)
    }
}