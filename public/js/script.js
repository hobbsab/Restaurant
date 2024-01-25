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