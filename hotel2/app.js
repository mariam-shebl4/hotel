
document.getElementsByTagName("h1")[0].style.fontSize = "80px";
// search
const search = [
    "Top Hotels",
    "The Resident Covent Garden",
    "book now",
    "Hard Rock Hotel Madrid",
    "The Resident Victoria",
    "Top Tours",
    "England",
    "italy",
    "Greek islands",
    "Europe",
    "Top pakedges",
    "Boli indonisia",
    "Top Reviews"
];

var topics = search.length;

function show(value){
    document.getElementById("datalist").innerHTML = "";

    list = value.length;

    for(let i = 0; i < topics; i++){

        if(((search[i].toLowerCase()).indexOf(value.toLowerCase())) >-1){
            var optTion = document.createElement("option");

            var v = document.createTextNode(search[i]);
            optTion.appendChild(v);

            document.getElementById("datalist").appendChild(optTion)
        }
    }

}


//-------------------------------------------------------------------------------------

//swiper
//------------------------------------------------------------------------------
var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

     

// swiper responsive

// var swiper = new Swiper(".swmedia", {
//         slidesPerView: 1,
//         spaceBetween: 30,
//         pagination: {
//           el: ".swiper-pagination",
//           clickable: true,
//         },
//       });
