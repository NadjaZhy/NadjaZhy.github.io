//Task1 Find and display total sum of numbers from 1 to 3;
var arr = [1,2,3];
function arraySum(array){
var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
document.write('sumof 1,2,3 = '+sum+ '<br>');
}
arraySum(arr);
 document.write('<br>')

