var clickCount = 0

const pageStats = document.getElementById("countNumber")
pageStats.textContent = localStorage.getItem('clicks') || 0

setInterval(clicker(), 30000)

function clicker() {
    clickCount = localStorage.getItem("clicks")
    document.body.addEventListener('click', function(){
        localStorage.setItem("clicks", +localStorage.getItem("clicks") + 1)
        pageStats.textContent = localStorage.getItem("clicks")
    })
    console.log(clickCount)
}