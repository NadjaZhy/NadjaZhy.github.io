var name, time, place ; 
name = 'Вася';
event = prompt('Enter event');
time = prompt('Enter time of event');
place = prompt('Enter place of event');
console.log( name + ' has a '+ event +'  today at ' + time.toTimeString() + ' somewhere in '+ place);