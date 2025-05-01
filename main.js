var map = L.map('map', {
    center: [35.7717503, 51.3365315],
    zoom: 13
});


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
map.locate({setView: true, maxZoom: 16});
function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);



var marker = L.marker([35.69, 51.38]).addTo(map);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("شما نقشه را در موقعیت مکانی کنونی کلیک کنید " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
function showUsername (response){
    let action_pageElement=document.querySelector("#action_page");
    let first_name= response.data.first_name;
    let last_name=response.data.last_name
    let email=response.data.email;
    let phoneNumber=response.data.phoneNumber;
    let gender=response.data.gender;
    let latitude=response.data.latitude;
    let longitude=response.data.longitude;
    let coordinate_mobile=response.data.coordinate_mobile;
    let coordinate_phone_number=response.data.coordinate_phone_number;
    action_pageElement=`info:<br/>${first_name}<br/>${last_name}<br/>${email}<br/>${lat}&${lng}<br/>${phoneNumber}<br/>${gender}`;
}
let apiUrl="https//stage.achareh.ir/api/karfarma/address";
axios.post(apiUrl).then(showUsername);
const fs = require('fs');

const userData = {
    username: "new_user",
    email: "new_user@example.com",
    age: 25
};

fs.writeFile('user.json', JSON.stringify(userData), (err) => {
    if (err) throw err;
    console.log('Data has been saved!');
});
fs.readFile('user.json', 'utf8', (err, data) => {
    if (err) throw err;
    const userData = JSON.parse(data);
    console.log(userData);
});


fetch('https://stage.achareh.ir/api/karfarmas/address', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch((error) => console.error('Error:', error));
fetch('https://api.example.com/users/1')
.then(response => response.json())
.then(data => console.log('User Data:', data))
.catch((error) => console.error('Error:', error));

const express = require('express');
const app = express();
app.use(express.json());

app.post('/users', (req, res) => {
    const userData = req.body; // دریافت داده JSON
    console.log(userData); // پردازش داده
    res.status(201).send('User created successfully');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
