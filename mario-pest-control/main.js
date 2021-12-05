const form = document.shopForm
const goombaAmt = form.goombaAmt
const bobombAmt = form.bobombAmt
const cheepcheepAmt = form.cheepcheepAmt


form.addEventListener("submit", (event) => {
    event.preventDefault();

    function clearList() {
        const el = document.getElementById('rightpane')
        while (el.firstChild) {
            el.removeChild(el.firstChild)
        }
    }

    clearList()

    const goombaTotal = goombaAmt.value * 5
    const bombombTotal = bobombAmt.value * 7
    const cheepcheepTotal = cheepcheepAmt.value * 11

    const totalAmt = goombaTotal + bombombTotal + cheepcheepTotal
    const goomba = document.createElement('h4')
    const bobomb = document.createElement('h4')
    const cheepcheep = document.createElement('h4')
    const total = document.createElement('h4')


    goomba.textContent = "Goombas ... " + goombaTotal
    bobomb.textContent = "Bobombs ... " + bombombTotal
    cheepcheep.textContent = "Cheep-cheeps ... " + cheepcheepTotal
    total.textContent = "Total is ... " + totalAmt

    document.getElementById('rightpane').appendChild(goomba)
    document.getElementById('rightpane').appendChild(bobomb)
    document.getElementById('rightpane').appendChild(cheepcheep)
    document.getElementById('rightpane').appendChild(total)

})