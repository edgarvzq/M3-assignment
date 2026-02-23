// COMP690 Word Translator
let userCode = prompt('Enter language code (es, de, en, fr)')       // Request language code
if(userCode=='es') {                                                // Hello World in Spanish
    window.alert('Hola Mundo')                                       
}
if(userCode=='de') {                                                // Hello World in German 
    window.alert('Hallo Welt')                                      
}
if(userCode=='fr') {                                                // Hello World in French
    window.alert('Bonjour le monde')                                  
} 
if(userCode!='fr' && userCode!='de' && userCode!='es'){             // If not any above options, show in English
    window.alert('Hello World')    
}
