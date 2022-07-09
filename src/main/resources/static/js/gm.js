var map;

function initMap() {

    var subMarkerPoint = { lat: 37.57956596361732, lng: 126.9803240214433};
    var subMarker = new google.maps.Marker({
        position: subMarkerPoint,
        map: map,
        label: "서울특별시 서초구 동광로8길 16",
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
            labelOrigin: new google.maps.Point(20, 47),
            anchor: new google.maps.Point(50,32)
        }
    });
}
