$(document).ready(function(){
    $('.single-item').slick({
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000,
      adaptiveHeight: true // Set adaptiveHeight to true to adjust the height of the slider content
    });
  });



  function ticketInfo() {
    var button = document.getElementById('entBtn');
    button.addEventListener("click", save, false);
    display();
}

function save() {
    var ticketName = document.getElementById('ticketName').value;
    var ticketNumber = document.getElementById('ticketNumber').value;
    // Use a fixed key or generate a unique key for sessionStorage
    sessionStorage.setItem(ticketName, ticketNumber);
    display();
    document.getElementById('ticketName').value = ""; // Clear input value
    document.getElementById('ticketNumber').value = ""; // Clear input value
}

function display() {
    var displayE = document.getElementById('displayE');
    displayE.innerHTML = ""; // Clear previous content
    for (var i = 0; i < sessionStorage.length; i++) {
        var key = sessionStorage.key(i); // Get the key at index i
        var value = sessionStorage.getItem(key); // Get the corresponding value
        displayE.innerHTML += key + "  " + value + "<br>"; // Display key-value pair
    }
}

// Function to clear sessionStorage
function clearStorage() {
    sessionStorage.clear();
    display(); // Update display after clearing
}

window.addEventListener("load", function() {
    ticketInfo(); // Call ticketInfo function when the window loads
    var clearBtn = document.getElementById('clBtn');
    clearBtn.addEventListener("click", clearStorage, false); // Add event listener for clear button
}, false);



$.ajax({
    type: "GET",
    url: "https://cbdb5a51-772f-4437-ba6d-b4633420e5d9.mock.pstmn.io/albums",
    data: "data",
    dataType: "json",
    success: function (response){
        $("#media img:eq(0)").attr("src", response.lildurk.coverArt);
        $("#media img:eq(1)").attr("src", response.fivo.coverArt);
        $("#media img:eq(2)").attr("src", response.silas.coverArt);
        $("#media img:eq(3)").attr("src", response.pgf.coverArt);
        $("#media img:eq(4)").attr("src", response.goldhaze.coverArt);
        $("#media img:eq(5)").attr("src", response.aime.coverArt);
    }
});

$( function() {
    $( "#tab" ).tabs();
  } );