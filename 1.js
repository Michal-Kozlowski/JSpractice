function accordion(element){
    $(element).click(function(){
        $(this).siblings().children("p").hide();
        $(this).children("p").fadeIn();
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
}

function tab(element){
    $(element).click(function(){
        $(this).siblings().fadeIn();
        $(this).parent().siblings().children("p").hide();
        $(this).addClass("border-white");
        $(this).parent().siblings().children().removeClass("border-white");
    });
}

$(document).ready(function(){
    $("#planet p").fadeIn();
    $("#planet").addClass("active");

    accordion(".accordion article");

    $("#planet h3").addClass("border-white");
    tab("h3");

  });


//-----------------------FIZZ BUZZ--------------------------

/* -------OLD--------
var text = "";

for (var i = 1; i <= 100; i++){
    switch (true) {
      case (i % 3 === 0 && i % 5 === 0):
          text += ("FizzBuzz " + "<br>");
          break;
      case (i % 5 === 0):
          text += ("Buzz ");
          break;
      case (i % 3 === 0):
          text += ("Fizz ");
          break;
      default:
          text += i + " ";
    };
};
document.getElementById("fizzbuzz").innerHTML = text;

*/

for (var i = 1; i <= 100; i++) {
    var t = ""

    if (i % 3 == 0) { t += "Fizz";}
    if (i % 5 == 0) { t += "Buzz";}

    if (t == "") { t += i;}
    console.log(t);
};

//---------------------------MNOŻACZ---------------------------
/*
var wynik = "";
function xxx(tekst, x){
    for (var i = 1; i <= x; i++){
        wynik += tekst + " ";
    };
    return wynik;
};

xxx("oko", 5);

document.getElementById("wynik").innerHTML = wynik;
*/

function xxx(){
    var wynik = "";
    t = document.getElementById("tekst").value;
    var x = document.getElementById("ile").value;
    for (var i = 1; i <= x; i++){
        wynik += t + "";
    };
    document.getElementById("wynik").innerHTML = wynik;
};

//-----------------------ODWRACACZ----------------------------------------
/*
function back(){
    var wynik = "";
    var len = $(".b").val().length;
    for (var i = 1; i<= len ; i++){
        wynik += $(".b").val()[len - i];
    };
    $(".backward").text(wynik);
};
*/

function back(){
    $(".backward").text($(".b").val().split("").reverse().join(""));
}

//-------------------palindrom check-----------------------------------
function pal(){
    if ($(".pal").val() === $(".pal").val().split("").reverse().join("")) {
        $(".palindrom").text("masz palindrom");
    }
    else {
        $(".palindrom").text("graj dalej");
    };
};

//--------------------porząder--------------------------
function abc(){
    $(".abcd").text($(".abc").val().split("").sort().join(""));
}

//---------------------uppercase-----------------------------
function up() {
    wynik = "";
    wynik += $(".up").val()[0].toUpperCase();
    for (i = 1; i < $(".up").val().length; i++) {
        if ($(".up").val()[i-1] === " ") {
            wynik += $(".up").val()[i].toUpperCase();
        }
        else {
            wynik += $(".up").val()[i];
        };
    };
    $(".upup").text(wynik);
};

//----------------------------prime------------------
function prime() {
    var n = $(".prime").val();
    var p = 0;
    for (var i = 1; i <= n; i++) {
        if ( n % i === 0) {
            p += 1;
        };
    };
    if ( p === 2) {
        $(".primenumber").text("It's prime number");
    }
    else {
        $(".primenumber").text("It's not prime number");
    };
};

//---------------------------factors------------------
function factors() {
    var p = 0;
    var n = $(".factors").val();
    var wynik = "";
    for (var i = 1; i <= n; i++) {
        if ( n % i === 0) {
            wynik += i + " ";
        };
    };
    $(".factors_anwser").text(wynik);
}

//------------------------demonetaizer------------------
function coin() {
    var s = $(".sum").val();
    var n = $(".nom").val().split(" ").sort(function(a, b){return b-a});
    var wynik = "";
    for (var i = 0; i < n.length; i++) {
        wynik += (s - s % n[i]) / n[i] + "x" + n[i] + "c; ";
        s = s % n[i];
    };

    $(".coin").text(wynik);
};

//-------------------unikator-------------------
function unik() {
    var t = $(".unik").val().split("");
    var wynik = "";
    for (var i = 0; i < t.length; i++) {
        var x = t[i];
        for (var j = 0; j < t.length; j++) {
            if (t[j] === x) {
                t[j] = "";
            };
        };
        wynik += x;
    };
    $(".unikator").text(wynik);
};

//----------------------binary search--------------------------------
function binary() {
    var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    var w = 0;
    var s = 11;
    while (a.length > 1) {
        var l = a.splice(0, a.length/2);
        var r = a;
        if (s <= l[l.length-1]) {
            a = l;
        }
        else {
            a = r;
            w += r.length;
        };
    };
    $(".BS").text(w+1);
};

//----------------------random text--------------------------
function rand() {
//    var pos = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789              ";
    var pos = "abcdefghijklmnopqrstuvwxyz ";
    var wynik = "";
    for (var i = 1; i <= $(".len").val(); i++) {
        wynik += pos.charAt(Math.floor(Math.random() * pos.length));
    };
    $(".random_text").text(wynik);
    $(".ttt").val(wynik);
    $(".longestpal").val(wynik);
};
/*
function rand() {
    var pos = "abcdefghijklmnopqrstuvwxyz";
    var wynik = "";
    for (var i = 1; i <= $(".len").val(); i++) {
        wynik += pos.charAt(Math.floor(Math.random() * pos.length));
    };
    $(".random_text").text(wynik.indexOf("oko"));
};
*/

//---------------------------letter in string------------------------------
function letter() {
    var c = 0;
    var l = $(".letter").val();
    var t = $(".ttt").val();
    for (var i = 0; i < t.length; i++) {
        if (t[i] === l ) {
            c += 1;
        };
    };
    $(".lettintext").text(c);
};

//-----------------------first not repeated------------------------------
function notrep() {
    var tekst = $(".notrep").val();
    var notrep = "";
    for (var i = 0; i < tekst.length; i++) {
        var count = 0;
        for (var j = 0; j < tekst.length; j++) {
            if ( tekst[j] === tekst [i] ) {
                count += 1;
            };
        };
        if ( count < 2 ) {
            notrep = tekst[i];
            break;
        };
    };
    $(".notrepeated").text(notrep);
};

//------------------------Bubble Sort------------------------------------
var ar = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
$(".arraybefore").text(ar);

function bubble(array) {
    var temp = 0;
    var check = 1;
    while ( check !== 0) {
        check = 0;
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i+1]) {
                temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                check += 1;
            };
        };
    };
};
bubble(ar);
$(".bubble").text(ar);
//------------------------Merge sorted------------------------------------
var arr1 = [-5, 0, 4, 12, 345, 546, 1500];
var arr2 = [0, 1, 5 ,8 ,250, 1555];
var arrays = [];

function merge(array1, array2) {
    arrays = [];
    while ((array1.length !== 0) || (array2.length !== 0)) {
        if (array1[0] <= array2[0]) {
            arrays.push(array1.shift(array1[0]));
        };
        if (array1[0] > array2[0]) {
            arrays.push(array2.shift(array2[0]));
        };
        if ((array1.length !== 0) && (array2.length === 0)) {
            arrays.push(array1.shift(array1[0]));
        };
        if ((array1.length === 0) && (array2.length !== 0)) {
            arrays.push(array2.shift(array2[0]));
        };
    };
    return arrays;
};

merge(arr1, arr2);
$(".merge").text(arrays);

//------------------------Merge Sort------------------------------------
var arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213, 15 ,1 ,0 ,1 ,0, -1, 0.5];
$(".mergesortbefore").text(arr);
var wyn;
function mergesort(arra) {
    var temp1 = [];
    var temp2 = [];
    var arrayss = [];
    var wynik = arra;
    var len = arra.length;
    for (var i = 1; i <= len; i += i) {
        while (wynik.length !== 0) {
            for (var j = 0; j < i; j++) {
                if (wynik.length > 0) {
                    temp1.push(wynik.shift(wynik[0]));
                };
            };
            for (var j = 0; j < i; j++) {
                if (wynik.length > 0) {
                    temp2.push(wynik.shift(wynik[0]));
                };
            };

            while ((temp1.length !== 0) || (temp2.length !== 0)) {
                if (temp1[0] <= temp2[0]) {
                    arrayss.push(temp1.shift(temp1[0]));
                };
                if (temp1[0] > temp2[0]) {
                    arrayss.push(temp2.shift(temp2[0]));
                };
                if ((temp1.length !== 0) && (temp2.length === 0)) {
                    arrayss.push(temp1.shift(temp1[0]));
                };
                if ((temp1.length === 0) && (temp2.length !== 0)) {
                    arrayss.push(temp2.shift(temp2[0]));
                };
            };
        };
        wynik = arrayss;
        arrayss = [];
    };
    arrayss = [];
    wyn = wynik;
};

mergesort(arr);
$(".mergesort").text(wyn);
//----------------------------longest palindrom---------------------------
function longestpal() {
    var tekst = $(".longestpal").val();

    var maxpal = "";
    for (var i = 0; i < tekst.length; i++) {
        var delta = 0;
        while ((tekst[i-delta] === tekst[i+delta]) && (delta <= i) && ((i+delta) <= tekst.length)) {
            var pal = "";
            for (var j = 0; j <= 2*delta; j++) {
                pal += tekst[i-delta+j];
            };

            delta += 1;
            if (pal.length > maxpal.length) {
                maxpal = pal;
            };
        };
    };
    $(".longestpalindrom").text(maxpal);
};

//---------------------nazwa funkcji---------------------------------------------
function name() {
    console.log(arguments.callee.name);
};
name();

//------------------------Fibonacci---------------------------------------------
function fibonacci() {
    var n = $(".fibon").val();
    var sum1 = 0;
    var sum2 = 1;
    for (i = 2; i <= n; i++) {
        var temp = sum1;
        sum2 = temp + sum2;
        sum1 = sum2 - temp;
    };
    $(".fibonacci").text(sum2);
};

//------------------------losowa macierz--------------------------------------------
var arry = [];

function randomarry(n) {
    for (var i = 0; i < n; i++) {
        arry[i] = Math.floor(Math.random() * 10000);
    };
    return arry;
};

randomarry(10000);
$(".randomarry").text(arry);

var a = performance.now();
bubble(arry);
$(".bubble_arry").text(arry);
var b = performance.now();
console.log(b-a);

var a = performance.now();
mergesort(arry);
$(".mergesort_arry").text(wyn);
var b = performance.now();
console.log(b-a);
