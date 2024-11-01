        function calculate(){
    	  let count = $state(0);
      return {
              get county() { return count ; },
              set county(text) { count = text ; },
           }
         }

     export var counter = calculate();