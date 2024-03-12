$(document).ready(function(){
    $('.single-item').slick({
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000
    });
  });


function ticketInfo (){
    var button = document.getElementById('entBtn');
    button.addEventListener("click", save, false);
    display();
}
function save(){
    var ticketName = document.getElementById('ticketName').value;
    var ticketNumber = document.getElementById('ticketNumber').value;
    sessionStorage.setItem(ticketName,ticketNumber);
    display();
    ticketName.value=" ";
    ticketNumber.value=" ";
}
function display(){
    var displayE = document.getElementById('displayE');
    displayE.innerHTML=" ";
    for(var i = 0; i< sessionStorage.length; i++){
        var x = sessionStorage.ticketName(i);
        var z = sessionStorage.getItem(x);
        displayE.innerHTML += x + "  " + z + "  ";
    }
}
function clear(){
    var button = document.getElementById('clBtn');
    button.addEventListener("click", save, false);
    display();
}

window.addEventListener("load", ticketInfo, false)


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