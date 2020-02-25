class LinkedList {
    constructor() {
        this.head = null;
        this.curser = null;
    }

    add(data) {
        if (!this.head) {
            this.head = new Node(data);
            this.curser = this.head;
        } else {
            let temp = this.head;
            this.head = new Node(data);
            temp.next = this.head;
            this.head.prev = temp;
        }
    }
    pop() {
        if(this.head === this.curser){
            this.curser = this.curser.prev;
        }
        if (this.head && this.head.prev) {
            this.head = this.head.prev;
            this.head.next = null;
        }
    }
    showCurrent() {
        if (this.curser) {
            return this.curser.data;
        } else {
            return;
        }
    }
    next() {
        if (this.curser && this.curser.next) {
            this.curser = this.curser.next;
        }
    }
    prev() {
        if (this.curser && this.curser.prev) {
            this.curser = this.curser.prev;
        }
    }
}
class Node {
    constructor(data) {
        this.next = null;
        this.prev = null;
        this.data = data;
    }
}

let list = new LinkedList();

function add() {
    list.add(document.getElementById("data").value);
    document.getElementById("audio").src = list.showCurrent();
    document.getElementById("data").value = "";

}

function pop() {
    list.pop();
    document.getElementById("audio").src = list.showCurrent();
}

function next() {
    list.next();
    document.getElementById("audio").src = list.showCurrent();
}

function prev() {
    list.prev();
    document.getElementById("audio").src = list.showCurrent();
}

function AddEpisode() {

    var all = document.getElementById("content");

    var title = document.getElementById("title");
    var time = document.getElementById("time");
    var duree = document.getElementById("duree");
    var description = document.getElementById("description");

    all.innerHTML +="<span id='desc'>" + "<p align='center' id='para4'>" + title.value + "</p>" + "<h5>" + time.value + ". " + duree.value + "</h5>" +
     "<input type='button' id='button4' value='play' class='myButton'>" + "<div class='display'>" + "<h4>" +"Episode Info" +
      "</h4>" + "<h6 class='h6'>" + description.value + "</h6>" + "</div>" +"</span>";
  }


{/* <span id="desc">
                        <p align="center" id="para4">Knicks Chaos, Oscar Picks, Worst 2019 
                          Movies, and a Claire Danes Interview, With...</p>
                        <h5>100 minutes · Feb 4</h5>

                        <input type='button' id='button4' value='play' class='myButton'>
               <div class='display'>
                        <h4>Episode Info</h4>
                        <h6 class="h6">HBO and The Ringer’s Bill Simmons is joined by longtime friend and Knicks fan Brian 
                          Koppelman to discuss the state of the Knicks, Steve Mills’s departure, the possibility of Masai 
                          Ujiri taking over, and more (2:27). Then Bill sits down with Wesley Morris of The New York Times 
                          to make Oscar picks and discuss 2019 movies (32:05). Finally, Bill talks with actress Claire Danes 
                          about acting as a child, some of her past work including ‘My So Called Life,’ ‘Romeo + Juliet,’ and 
                          ‘Little Women.’ They also discuss the final season of ‘Homeland,’ premiering February 9 (1:04:12).</h6> 
               </div>

</span> */}

var boutton = document.getElementById('button1');
var boutton1 = document.getElementById('button2');
var boutton2 = document.getElementById('button3');
var boutton3 = document.getElementById('button4');

var music = document.getElementById('audio');
var para = document.getElementById('para1');
var para1 = document.getElementById('para2');
var para2 = document.getElementById('para3');
var para3 = document.getElementById('para4');

boutton.onclick = function(){
    music.setAttribute('src', 'http://dts.podtrac.com/redirect.mp3/traffic.libsyn.com/billmaher/Episode_519_Podcast.mp3?dest-id=357722');
    para.style.color = "red";
    para1.style.color = "black";
    para2.style.color = "black";
    para3.style.color = "black";
}

boutton1.onclick = function(){
    music.setAttribute('src', 'http://dts.podtrac.com/redirect.mp3/traffic.libsyn.com/billmaher/Episode_518.mp3?dest-id=357722');
    para.style.color = "black";
    para1.style.color = "red";
    para2.style.color = "black";
    para3.style.color = "black";
}

boutton2.onclick = function(){
    music.setAttribute('src', 'http://dts.podtrac.com/redirect.mp3/traffic.libsyn.com/billmaher/Episode_517.mp3?dest-id=357722');
    para.style.color = "black";
    para1.style.color = "black";
    para2.style.color = "red";
    para3.style.color = "black";
}

boutton3.onclick = function(){
    music.setAttribute('src', 'http://dts.podtrac.com/redirect.mp3/traffic.libsyn.com/billmaher/Episode_516.mp3?dest-id=357722');
    para.style.color = "black";
    para1.style.color = "black";
    para2.style.color = "black";
    para3.style.color = "red";
}

