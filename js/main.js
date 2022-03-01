const searchPhone = ()=> {
    const showPhone = document.getElementById("show-phone")
    showPhone.innerHTML = ""
    const searchField = document.getElementById("search-field")
    const searchFieldValue = searchField.value
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchFieldValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.status == false){
          document.getElementById("error-massage").style.display = "block"
      }else{displayPhone(data.data.slice(0, 20))
        document.getElementById("error-massage").style.display = "none"}
    }
      
      )
    searchField.value = ""
    const PhoneDetail = document.getElementById("phone-detail")
    PhoneDetail.innerHTML = ""
}

const displayPhone = phones => {
  console.log(phones)
    const showPhone = document.getElementById("show-phone")
    showPhone.innerHTML  = ""
    phones.forEach(phone => {
        const div = document.createElement("div")
        div.classList.add("col-md-4")
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
                    <img src="${phone.image}" class="card-img-top w-25" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">brand: ${phone.brand}</h5>
                      <h6 class="card-title">phone name: ${phone.phone_name}</h6>
                      
                      <button onclick="displayPhoneDetail('${phone.slug}')" class="btn btn-primary">see datail</button>
                    </div>
                  </div>
        `
        showPhone.appendChild(div)
        
    });
    

}
