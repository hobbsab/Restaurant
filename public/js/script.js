// Random Biryani photo!
fetch('https://biriyani.anoram.com/get')
  .then(response => response.json())
  .then(data => {
    const imageUrl = data.image;
    const imgElement = document.createElement('img');
    imgElement.style.maxHeight = '200px';
    imgElement.src = imageUrl;
    document.getElementById('image-container').appendChild(imgElement);
  })
  .catch(error => {
    console.log('Error:', error);
  });

// responsive menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
  
  
  const reservationButton = document.querySelector('#submitbtn')
  const nameInput = document.querySelector('#name')
  const emailInput = document.querySelector('#email')
  const reservationList = document.querySelector('#reservation-list')


  const getReservations = async() => {
    const response = await fetch('/api/reservation')
    const data = await response.json()
    for (let i = 0; i < data.length; i++){
      const newEl = document.createElement('p')
      newEl.textContent = `${data[i].name} - ${data[i].email}`
      reservationList.appendChild(newEl)
    }
}
getReservations();
  const postReservation = async(reservationObj) => {
    const response = await fetch('/api/reservation', {
        method: 'POST',
        body: JSON.stringify(reservationObj),
        headers: {
            'Content-Type': 'application/json',
        }
    })

    getReservations()

    
}

  const bookReservation = (event) => {
    event.preventDefault();

    const newReservation = {
      name: nameInput.value,
      email: emailInput.value
    }

    postReservation(newReservation)
    
  }

  reservationButton.addEventListener('click', bookReservation)



