const searchPhone = ()=> {
   
    const searchField = document.getElementById("search-field")
    const searchFieldValue = searchField.value
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchFieldValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data.data))
}