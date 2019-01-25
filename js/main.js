// Initialize and add the map
function initMap() {
  // Your Location
  const loc = { lat: 62.470945, lng: 6.15387 };
  // Centered Map on Location
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 18,
    center: loc
  });
  // The Marker, Positioned at Location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Smooth Scrolling

$("#navbar a, .btn, a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 130
      },
      600
    );
  }
});

//Sticky menu transparent background
window.addEventListener("scroll", function() {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});
