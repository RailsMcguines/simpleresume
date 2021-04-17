
var mymap = L.map('mapid').setView([-29.41562,-66.85980], 19);

var myIcon = L.icon({
    iconUrl: '../../img/marker.png',
    iconSize: [80, 80],
    iconAnchor: [40, 94],
    popupAnchor: [-3, -86],

});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGFiZXJiaW4iLCJhIjoiY2tuY213ZzVjMDB2ZTJ5b2RpZmoxcjRxbiJ9.TDel5hZjKz3VxnMcVpqbHg', {
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGFiZXJiaW4iLCJhIjoiY2tuY213ZzVjMDB2ZTJ5b2RpZmoxcjRxbiJ9.TDel5hZjKz3VxnMcVpqbHg'
}).addTo(mymap);

L.marker([-29.4156638, -66.8604246], {icon: myIcon}).addTo(mymap)
//L.marker([-29.4156638, -66.8604246]).addTo(mymap)
    .bindPopup('Pasate por mi local físico')
    .closePopup();



    