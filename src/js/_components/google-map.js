$(document).ready(function() {
	// ========= D i s a b l e   m a p    s c r o l l i n g ===========
	var onMapMouseleaveHandler = function (event) {
		var that = $(this);

		that.on('click', onMapClickHandler);
		that.off('mouseleave', onMapMouseleaveHandler);
		that.find('iframe').css("pointer-events", "none");
	}

	var onMapClickHandler = function (event) {
		var that = $(this);

		that.off('click', onMapClickHandler);
		that.find('iframe').css("pointer-events", "auto");
		that.on('mouseleave', onMapMouseleaveHandler);
	}
	// Enable map zooming with mouse scroll when the user clicks the map
	$('.js-google-map').on('click', onMapClickHandler);
	// ========= =========== =========== ===========

	// ========= G o o g l e   m a p   s t y l e s ===========
	var latitude = 56.625860, // coordinates 
		longitude = 47.934437, // coordinates 
		map_zoom = 16, 
		marker_url = 'img/map-ic.png'; // map marker 
	// Styles
	var style =  [
					{elementType: 'geometry', stylers: [{color: '#242f3e'}]},
					{elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
					{elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
					{
						featureType: 'administrative.locality',
						elementType: 'labels.text.fill',
						stylers: [{color: '#d59563'}]
					},
					{
						featureType: 'poi',
						elementType: 'labels.text.fill',
						stylers: [{color: '#d59563'}]
					},
					{
						featureType: 'poi.park',
						elementType: 'geometry',
						stylers: [{color: '#263c3f'}]
					},
					{
						featureType: 'poi.park',
						elementType: 'labels.text.fill',
						stylers: [{color: '#6b9a76'}]
					},
					{
						featureType: 'road',
						elementType: 'geometry',
						stylers: [{color: '#a0951c'}]
					},
					{
						featureType: 'road',
						elementType: 'geometry.stroke',
						stylers: [{color: '#ddcd20'}]
					},
					{
						featureType: 'road',
						elementType: 'labels.text.fill',
						stylers: [{color: '#ddcd20'}]
					},
					{
						featureType: 'road.highway',
						elementType: 'geometry',
						stylers: [{color: '#a0951c'}]
					},
					{
						featureType: 'road.highway',
						elementType: 'geometry.stroke',
						stylers: [{color: '#1f2835'}]
					},
					{
						featureType: 'road.highway',
						elementType: 'labels.text.fill',
						stylers: [{color: '#f3d19c'}]
					},
					{
						featureType: 'transit',
						elementType: 'geometry',
						stylers: [{color: '#2f3948'}]
					},
					{
						featureType: 'transit.station',
						elementType: 'labels.text.fill',
						stylers: [{color: '#d59563'}]
					},
					{
						featureType: 'water',
						elementType: 'geometry',
						stylers: [{color: '#17263c'}]
					},
					{
						featureType: 'water',
						elementType: 'labels.text.fill',
						stylers: [{color: '#515c6d'}]
					},
					{
						featureType: 'water',
						elementType: 'labels.text.stroke',
						stylers: [{color: '#17263c'}]
					}
				];
		// Create the point
		var map_options = {
			center: new google.maps.LatLng(latitude, longitude),
			zoom: map_zoom,
			panControl: false,
			zoomControl: true,
			mapTypeControl: false,
			streetViewControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
			styles: style
		};
		Init map
		var map = new google.maps.Map(document.getElementById('map'), map_options),
			marker = new google.maps.Marker({
				position: new google.maps.LatLng(latitude, longitude),
				map: map,
				visible: true,
				icon: marker_url
			});
	// ========= =========== =========== ===========


	
});