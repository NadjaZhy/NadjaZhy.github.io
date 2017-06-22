while (true) 
	 var i = prompt("Введите число больше 100", "");
	    
	  if (i == null)
	  {
	    alert("Вы нажали cancel");
	    break;  
	  }
	
	  i = parseInt(i); 
	 else if (isNaN(i))
	  {    
	     continue; 
	  }
	  
	 else if (i > 100)
	  {
	    alert("Вы ввели нужное число");
	    break;
	  }
	}
	
