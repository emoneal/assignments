const form = document.travelForm

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const checkedDiet = []

    for (let i = 0; i < form.diet.length; i++) {
        if (form.diet[i].checked) {
            checkedDiet.push (form.diet[i].value)
        }
    }
    alert("Name: " + form.firstName.value + " " + form.lastName.value + "\nAge: " + form.age.value + "\nGender: " + form.gender.value + "\nDestination: " + form.city.value + "\nDietary Restrictions: " + checkedDiet)

})