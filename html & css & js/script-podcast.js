 function AddEpisode() {


  var all = document.getElementById("Container");

  var title = document.getElementById("title");
  var time = document.getElementById("time");
  var duree = document.getElementById("duree");
  var description = document.getElementById("description");
  


       all.innerHTML += "<div class='span'>" + "</div>" + "<h1 align='center'>"+ title.value +

        "<h5 align='center'>" + time.value + "</h5>" + "<div>" + 

         "<h5 align='center'>" + duree.value + "</h5>" + "</div>" +

         "<h4 align='center'>" + description .value + "</h4>" + "</div>";

}
