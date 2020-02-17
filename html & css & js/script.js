function AddPodcast(){

   var b = document.getElementById('podcastTitle').value;
   var c = document.getElementById('podcaster').value;
   var d = document.getElementById('categorie').value;
   var e = document.getElementById('link').value;
   var f = document.getElementById('tags').value;
   var g = document.getElementById('description').value;

    document.getElementById("resPodcastTitle").innerHTML += b;
    document.getElementById("resPodcaster").innerHTML += c;
    document.getElementById("resCategorie").innerHTML += d;
    document.getElementById("resLink").innerHTML += e;
    document.getElementById("resTags").innerHTML += f;
    document.getElementById("resDescription").innerHTML += g;

  var all = document.getElementById("all");   
  var z = document.createElement('li');  
  var x = document.createElement("IMG"); 
  var y = document.getElementById("adding").value;
  x.setAttribute("src", y);
  z.setAttribute("id", "images");
  all.appendChild(z);
  z.appendChild(x);
  document.getElementById("adding").value = '';
}
