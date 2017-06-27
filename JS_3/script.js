

 //Task1 Find and display total sum of numbers from 1 to 3;
var arr = [1,2,3];
function arraySum(array){
var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
document.write('1) sumof 1,2,3 = '+sum);
}
arraySum(arr);
document.write('<br>'+'<br>')
 
//Task2 Find and display total sum of numbers from 20 to 220;

  var sum = 0;
function sumTo(n) {
 for (var i = 20; i <= n; i++) {
    sum += i;
  }
  return sum;
}
document.write('2) total sum of numbers from 20 to 220 = '+sumTo(220) );
document.write('<br>'+'<br>')
  
//Task3.1   Display even numbers from 1 to 20 by using for loop.do it with using ‘continue’

document.write('3.1) even numbers from 1 to 20 :'+'<br>'); 
for (var i = 1; i < 20; i++) {
 
  if (i % 2 ) continue;
 
document.writeln(i +',');
}
document.write('<br>'+'<br>')
 
//Task3.2 Display even numbers from 1 to 20 by using for loop. do it without using ‘continue’
document.write('3.2) even numbers from 1 to 20 without using ‘continue’:'+'<br>');
var i = 1;
while (i < 20) {
    if (i % 2== 0) {
        document.writeln(i + ',');
    }
    i++;
}
document.write('<br>'+'<br>')
//Task4 Display odd numbers from 10 to 30 by using ‘while’ loop.
document.write('4) odd numbers from 10 to 30 by using ‘while’:' + '<br>');
var i = 10;
while (i < 30) {
    if (i % 2 === 0) {
        document.writeln(i + ',');
    }
    i++;
}
document.write('<br>'+'<br>')
//Task5 Display numbers from 1 to 15 using ‘for’ loop, once num of iteration is equal the num of month of your birthday then stop execution of loop
document.write('5) numbers from 1 to 15 using ‘for’ until it month of birth:' + '<br>') ;
for(i=1; i<15; i++) {
 if (i==6) break;
document.writeln(i + ',');}
 document.write('<br>'+'<br>')

//Task6 Rewrite code from using ‘for’ to using ‘while’
document.write('6) Rewritten code from using ‘for’ to using ‘while’:' + '<br>') ;
var i = 0;
while (i <5) {
document.writeln(i + ',');
i++;}
  document.write('<br>'+'<br>')
//Task7.1 Write code which will ask user (prompt ) to put number greater than 100, repeat prompt until user put required number, then display result of prompt  do it using ‘while’
 
    var i = 0;
    while (i <= 100 ){
          i = parseInt(prompt('7.1) Enter more than 100', i));
    }
    alert('You entered ' + i);
 
 
//Task7.2 Write code which will ask user (prompt ) to put number greater than 100, repeat prompt until user put required number, then display result of prompt  do it using ‘do while’

var i;
do {
  i = prompt("7.2) Enter more than 100", 0);
} while (i <= 100 && i != null);
 
 
//Task8 Show in console using for.
document.write('8) Show in console using for #:' + '<br>') ;
 //#
 //##
 //###
 //####
var str = '';
var hash = "#";
for(var i = 0; i < 8; i++){
    str += hash;
    document.writeln(str+'<br>');
}
  document.write('<br>'+'<br>')
