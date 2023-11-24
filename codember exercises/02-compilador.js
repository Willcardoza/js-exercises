function compiler(str) {
    
    // convertimos el mensaje en un array, inicializamos una varibale en 0 y un array vacío
    let split = str.split('')
    let currentValue = 0;
    let result = [];
    
    // Iteramos por cada elemento del mensaje que fue convertido en un array
    for (let operator of split) {
      
     // Aquí ocurre la magía donde el switch ejecuta una operación con base en que elemnto recibe  
      switch(operator) {
        case "#": // suma
          currentValue++;
          break;
        case "@": // resta
          currentValue--;
          break;
        case "*": // se multiplica por si mismo
          currentValue *= currentValue;
          break;
        case "&": // imprime el valor
          result.push(currentValue);
          break;
        default:
          break;
      }

    }
    
    // Lo convertimos a un String 
    return result.join("") 
};