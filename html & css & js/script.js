	function AddPodcast() {

  var all = document.getElementById("container");

  var img = document.getElementById("url");
  var podcasT = document.getElementById("podcastTitle");
  var podcaster = document.getElementById("podcaster");
  var cat = document.getElementById("categorie");
  var lien = document.getElementById("link");
  var tags = document.getElementById("tags");
  var description = document.getElementById("description");

       all.innerHTML += "<div class='div1'>" +"<div>" +"<img width='100%' src =" + img.value  + ">" + "</div>" + "<h1 align='center'>"+ podcasT.value +

        "<h3 align='center'>" + podcaster.value + "</h3>" + "<div>" +  "<p align='center'>" + cat.value + "</p>" + "</div>" + "<h4 align='center'>" + lien.value + "</h4>" + 

        "<h4 align='center'>" + tags.value + "</h4>" + "<h4 align='center'>" + description .value + "</h4>" + "</div>";
}
