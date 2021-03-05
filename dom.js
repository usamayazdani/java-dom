//1<!--> its cas sensitive language
/* 2: you can also think aabout scope this like global scope and variavle scope
3 : hee is rgb use you can also learn deep
*/


console.dir(document);   //by using console option in our html page ..you can go to setting >more tools>developer tools> console option then there this line of code show your whole page documentation //
// console.log(document.domain); /* so this type of code everthing you want to get in */
// console.log(document.url);  /* so all thes are use to get value on console */
// console.log(document.body); // like i get a body option in my console 
// document.title="this is the first practise"; // so by using this we can change it title name everthing we want //
// // console.log(DocumentType); //which native language are used 
// // console.log(document.doctype); //so we check which type of document is writtten//
// // //console.log(Document.all[6]); // so the small "d" and big "D " there is a diferent so b aware .its case sensitive like in this line i wanna use small "d " but it cannit work if we use D calpita d itswork properly//
// // console.log(Document.forms);   // evething in your html page you an get 
// // console.log(document.getElementById("he"));
// // var head1 =document.getElementById("he");
// // console.log(head1);
// // console.log(document.getElementById("head1"));

// // head1.style.borderbottom = "solid 30 px #000"
// // // get element by class name //
// // var items = document.getElementsByClassName("list-group-item");
// // console.log(items);
// // // we ALSO ACCES BY INDIVIDUAL LIKE WE ACCES IN PPYTHON BY TAKING LIST  // 
// // console.log(ITEMS[0]);
// // items[0].textContent = "hello world";
// // items[1].style.fontweight="bold";
// // //we also change background color by using //
// // items[0].style.backgroundcolor = "yellow" ;
// // /// here is we use for loop like we use in c++ to change bg color/
// // for (var d=0; d<items.length; d++ ){
// //     items[1].style.backgroundcolor=' #f4f4f4';
// // }
// // // queries selector//
// //  var header =document.querySelector("main-header"); ///so it take a lottle bit action be focused
// //  header.style.borderbottom="solid 4px #ccc ";  
// //  //alse=o we use input method to write athing in our input slot
// //  var input=document.querySelector("input");
// //  input.value= "hello world";
// //  var submit =Document.querySelector('input[type="submit]')
// //  submit.value="send";


// //  //queries
// //  var titles=document.querySelectorAll(.title )
// //  console.log(title)


//  //traversi note..
//  var items=document.querySelector("#items");
//  //paranthmode
// //  console.log(itemList.parentNode);
// //  itemList.parentNode.style.backgroundcolor="#F08080"; /* so this type of code help you ceck div class which re using you right kmow
 

// // console.log(itemList.parentNode);
// //parent elemnent 
// /* it the same like which we use paraent mode such as it work lke same */
// // console.log(itemList.parentElement);
// // //node.childnodes //
// // //so the chid nodes is any thing that we havr i our div class like texr span ,length of div it will gave //
// // console.log(itemList.childNodes) ; // so whe we use this there is text node which is line breaking elements //
// // //so we gonna use the children property to remvove then text 
// // //nodes.chldren
// console.log(items.children); //so the writer prefer we use chidren
// console.log(items.children[1]);
// //items.children.style.backgroundColor="red";//
// //so this is dynamically process we can do this
// items.children[1].style.backgroundColor='yellow';
// //be aware of capital C and small c its case sensitive
// //first child list //`````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
// console.log(items.firstChild); //by showing name it appearas that it take firsr element 
// items.firstElementChild.textContent=" hello its me";
// //we  also have last child and last child element //
// console.log(items.lastElementChild);
// //next sibling // /*its gonna be same work like children nodes work we will show the text appears */
// console.log(items.nextSibling);
// //we also have next eelemets sibling 
// console.log(items.nextElementSibling);
// console.log(items.previousElementSibling);
// items.previousElementSibling.style.backgroundColor="yellow";
// //so we new create elemnt by using java //
// //first we create div 
// var mydic=document.createElement("div");
// //add class
// mydic.className="hello world" ;
// //add id
// mydic.id="yup";
// //add attribute
// mydic.setAttribute("title","usama");

// //add text in yor dv class
// // var addtext=document.createTextNode("i wannna buy new laptop");
// // mydic.appendChild(addtext);
// // var element=document.getElementById("yup");
// // element.appendChild(mydic)
// // var container= document.querySelector('header.container');
// // var h1=document.querySelector('header h1');
// // mydic.style.fontSize='30 px';
// // console.log(mydic);
// // container.appendChild(mydic,h1);

// //next part 3
// // function buttondislay(){          
// //     console.log("clicked me");
// // }
// //we also do the same process  we can do uppper like //
// //first we create element then add some function 
// //so this is function which can multiple time//
// document.getElementById('button').addEventListener('click',
//  function(){
//     console.log(123);       
// });
// //we also use this buttonsdisplay function to cal this fuction
// var button =document.getElementById('button').addEventListener('click',buttondislay);
// //so now we use this click button to change the header tiles then
// function buttondislay(e){
// document.getElementById("main-header").textContent="changed";
// //so this function can change background color also;
// // document.querySelector('#main').style.backgroundColor="red";
// // console.log(e);
// // console.log(e.target);  
// console.log(e.target.id);
// console.log(e.offsetX);
// console.log(e.altkey);
// console.log(e.shiftkey);
// console.log(e.ctrlkey);
// }
// var button =document.getElementById('button').addEventListener('click',runevnt);
// function runevnt(e){
//     button .addEventListener("Mousedown",runevnt);

//     // console.log("event type:"+e.type);

// }
// //we also have a event when our mosue reached thatpoint automaically system run
// // button .addEventListener("Mousedown",runevnt);

// //we wannna make new variable 
// var box =document.getElementById("box");
// // box.addEventListener("mouseenter",anevent );
// box.addEventListener("mousemove",anevent );

// function anevent(event){

//     console.log("mouse event:",event);
//     // output.innerHtml = "<h3><Mousex:"+event.offsetX+"</h3><h3>Mousey: "+event.offsety+"</h3>";
//     //gor making our contect changing
//     box.style.backgroundColor= "rgb("+event.offsetX+","+event.offsety+",40)";
//     document.body.style.backgroundColor= "rgb("+event.offsetX+","+event.offsety+",40)";


// }
/*now we gonna use input   and outt event 
var items=document.querySelector('input[type="text"]');
var forms=document.querySelector("forms");
items.addEventListener("keydown",runthisevent);
// items.addEventListener("cut",runthisevent);
items.addEventListener("paste",runthisevent);
items.addEventListener("focus",runthisevent);
items.addEventListener("blur",runthisevent);
//any thing you can do this with this input function like pste write comment etc like general website do :
items.addEventListener("input",runthisevent);

forms.addEventListener("submit",runthisevent);
/* when we write this code it work in the input form 
function runthisevent(event){
    console.log("EVENT TYPE:"+event.type);
    console.log(event.target.value);
    document.body.style.display="none";

} 
*/
//here is a funny trick we can also use 
//this is the last video//
var forms=document.querySelector("addforms");
var items=document.querySelector("items");
forms.addEventListener("submit",additem);
function additem(event){
    event.preventDefault();
    console.log(1);
}