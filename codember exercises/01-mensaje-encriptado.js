
function decryptor ( message ) {
    
    // convertimos el mensaje en un array
    let arrMessage = message.split(" ")

    // creamos un objeto vacío
    let animalCount = {}
    
    // aquí ocurre toda la magia donde agregaremos propiedades a animalCount
    for (let str of arrMessage) {
      
      if (animalCount[str]) {
        // Si la palabra ya está en el objeto de conteo, incrementamos su contador.
        animalCount[str]++;
      } else {
        // Si la palabra no está en el objeto de conteo, la inicializamos con 1
        animalCount[str] = 1;
      }
    }

    // Creamos un array vacío
    let result = []
    
    // Realizaremos un push al array vacío, por cada propiedad que tengamos en el animalCount
    for (let animal in animalCount) {
      result
          .push(`${animal}${animalCount[animal]}`)
    }
    
    // Lo convertimos a un String 
    return result.join("")
};