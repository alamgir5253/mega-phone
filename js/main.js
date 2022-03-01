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
        <div class="card phone-card" >
                    <img src="${phone.image}" class="display-phone-image" alt="...">
                    <div class="card-body">
                      <h5 class="card-title"><span>Brand:</span> ${phone.brand}</h5>
                      <h5 class="card-title"><span>Phone-Name:</span> ${phone.phone_name}</h5>
                      <button onclick="displayPhoneDetail('${phone.slug}')" class=" search-detail-btn">see datail</button>
                    </div>
                  </div>
        `
        showPhone.appendChild(div)
        
    });
    

}

const displayPhoneDetail = details =>{
   scrollTo(this)

    const detailUrl = `https://openapi.programming-hero.com/api/phone/${details}`
    fetch(detailUrl)
    .then(res => res.json())
    .then(data => showPhoneDetail(data.data))
}

const showPhoneDetail = brand =>{
  const showPhone = document.getElementById("show-phone")
    // showPhone.innerHTML  = ""
    console.log(brand)
    const PhoneDetail = document.getElementById("phone-detail")
PhoneDetail.innerHTML = ""
    const div = document.createElement("div")
    // div.classList.add("col")
    div.classList.add("phone-details")
    div.innerHTML = `
    <div class="card phone-card" >
                <img src="${brand.image}" class="phone-detail-images card-img-top w-25" alt="...">
                <div class="card-body">
                <p>releaseDate: ${brand.releaseDate ? brand.releaseDate: 'comming soon...'}</p>
                  <h4 class="card-title">brand: ${brand.brand}</h4>
                  <h4 class="card-title">phone name: ${brand.name}</h4>
                  <p>displaySize: ${brand.mainFeatures.displaySize}</p>
                  <p>memory: ${brand.mainFeatures.memory}</p>
                  <p>storage: ${brand.mainFeatures.storage}</p>
                  <h4>sensor</h4>
                  <p>${brand.mainFeatures.sensors}</p>
                  <h4>others</h4>
                  <p>Bluetooth: ${brand.others.Bluetooth}</p>
                  <p>GPS: ${brand.others.GPS}</p>
                  <p>NFC: ${brand.others.NFC}</p>
                  <p>Radio: ${brand.others.Radio}</p>
                  <p>USB: ${brand.others.USB}</p>
                  <p>WLAN: ${brand.others.WLAN}</p>

                  

                  
                </div>
              </div>
    `
    PhoneDetail.appendChild(div)
    
    // onclick="displayPhoneDetail('${phone.slug}')"


}