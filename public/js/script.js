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


  function bookReservation(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    alert("Reservation submitted!\nName: " + name + "\nEmail: " + email + "\nDate: " + date + "\nTime: " + time);
  }
  getReservations();
  
  const reservationButton = document.querySelector('#submitbtn')
  const nameInput = document.querySelector('#name-input')
  const emailInput = document.querySelector('#email-input')
  const reservationList = document.querySelector('#reservation-list')


  const getReservations = async() => {
    const response = await fetch('/api/reservations')
    const data = await response.json()
    for (let i = 0; i < data.length; i++){
      const newEl = document.createElement('p')
      newEl.textContent = `${data[i].name} - ${data[i].email}`
      reservationList.appendChild(newEl)
    }
}

  const postReservation = async(reservationObj) => {
    const response = await fetch('/api/reservations', {
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

