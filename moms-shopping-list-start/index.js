const form = form.addItem;
const ul = document.getElementById("list");
var completeList = null;
var foodItems = [];

document.createElement('li id="foodItems"')

form.addEventListener("submit", (event) => {
    event.preventDefault();
    addNewItem();
})

function addNewItem() {
    foodItems.push(form.value);
    disp();

}

function disp() {
    if (form.value.length === 0) {
        var completeList = alert('There is nothing in the cart yet...')
    } else {
        completeList = "Total number of items in shopping list: " + foodItems.length + "<br>";
        for (i = 0; i < foodItems.length; i++) {
            completeList += "<li>" + i + food[i] + "<br>" + "";
            ul.innerHTML = completeList;
        }
    }
}