src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
// $(document).ready(function () {

//     console.log("when we clicked on this");
//     // <!-- // the index of query  language is  /* $("selector").action() */ -->
//     // so this is the fuction of jqueries language <<%>>:
//     //<--here is the fuction of jqueries    

//     $("p").click(function () {
//         console.log("you click bro", this);
//         //   <!--   $("p").click();
//         //  <!--    $(this).hide();
//         // we also use id and class 
//         // id= is unique in every charcter ,represenatatin "#"" 
//         // class= is qual to whole class  ,representation "."
//         //for exAMPLES
//         // <!--     $(#id).hide;  
//         // <!--     $(.class).hide;
//         // <1--     $(:text).hide;  //this work in button types
//           $('[href]').css('color', 'red');
//           $('a[href="http://yahoo.com"]').css('color', 'green');
//           $('*').hide();
// we using hide function to hide a specific id in html

//     });
    /* there are three main type of selector in jquery
            1. element selector
            2. id selector
            3. class selector
            */
    //element selector
    // !--  $("p").click();
    // id selector 
    // !--  $("#box").click();
    // class selector
    // !--  $('.rise').click();
    //other selector
    // !--  $("*").click();     <<! its work on all elements
    // events in jquery
    /* mouse events= click ,dblclick mouseleave ,mouseenter,mouseup,mousedown ,hover(its unique when you enter anfd get out two proces)
        keyboard events= keypress, keydown ,mediakeystatusmap
        document /window events= load ,unload,resize,scroll,
        formevents = submit ,change focus ,blur */
    // $("p").hover(function()
    // { 
    //     console.log("you double clicked on p");
    // },
    // function()
    // {
    //     console.log("yo get out :");
    // });

    //demong on the method
 
// })
//in function we also have <<"alert"<< function;
$(document).on('mousemove', function(e){
    $('#coords').html('Coords: Y: '+e.clientY+" X: "+e.clientX);
});

$("p").on(
    {
        click: function () {
            console.log("you can make duel function:", this);
        },
        mouseleave: function () {
            console.log("good:", this);
        }
    }
)
//this function gonna be interest 
// $('#interest').hide(10000, function(){
//     console.log("hidden");
// })
// $('#interest').show(10000, function(){
//     console.log("show");
// })

// $('#hn').click(function(){
//     $('interest').fadeto(5000);
// });
// slide up and fade up down function are optional ,so we gonna use here
$("#hn").click(function(){
//     $("#interest").fadeOut(1000);
//   });
//   $("#interest").slideUp(1000,function(){
//       console.log('done');
//   });
// //   animate function in jqueries
//css in jquieris
$('p').css('color','red');
$('u #id number:first').css('color','red'); //its work on your list items
//function to change in css = first ,last,even,odd
$('ul#list li:nth-child(3n)').css('list-style', 'none'); //we also use this property to remove handing from this site
 
$('#interest').animate(
    {
        opacity:0.3,
        height:'150px',
        width:'350px',

    },2000
)})
$('#interest').stop();
//now we get value from our 
$('text').val('i want to change my text value'); //so we gonna change    our text input value here   
// $('text').remove();
$('#interest').addClass('hn g');
$('#interest').css('background-color','yellow');
//agex
/* it will get data from other website to use your own website */
// $.get('https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',function(data,status){
//     alert(data);
// })
//so when write any thing in our input it will cange color
// $('input').focus(function(){
//     //alert('Focus');
//     $(this).css('background', 'pink');
// });
// $('input').blur(function(){
//     //alert('Focus');
//     $(this).css('background', 'white');
// });
//so this code when you writae ant thing in your inout then the result will output in consolw what you write in
// ('input').keyup(function(e){
//     console.log(e.target.value);
// });
// */

// $('select#gender').change(function(e){
//     alert(e.target.value);
// });

// $('#form').submit(function(e){
//     e.preventDefault();
//     var name = $('input#name').val();
//     console.log(name);
// });
// // so this is code when you write anything in your html 
// ('#newItem').keyup(function(e){
//     var code = e.which;
//     if(code == 13){
//         e.preventDefault();
//         $('ul').append('<li>'+e.target.value+'</li>');

//     }
//     //so when we use this it will add item 
//     var myArr = ['Brad', 'Kelley', 'Nate', 'Jose'];
// 			$.each(myArr, function(i, val){
// 				$('#users').append('<li>'+val+'</li>');
// 			});
// 			/*

// 			var newArr = $('ul#list li').toArray();
// 			$.each(newArr, function(i, val){
// 				console.log(val.innerHTML);
// 			});

        // //    });
        // $.get('https://translate.google.com/',function(data){
        //     $.each(data,function(i,user){
        //         $('u1#user').append();
        //     });
        // });
        $.ajax({
            method:'GET',
            url: 'http://apjatel.or.id/xmatch-reviews-april-2020-2/',
            dataType: 'json'
        }).done(function(data){
            console.log(data);
            $.map(data, function(post, i){
                $('#result').append('<h3>'+post.title+'</h3><p>'+post.body+'</p>');
            });
        });