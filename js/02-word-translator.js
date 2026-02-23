// COMP690 Word Translator
let userCode = prompt('Enter language code (es, de, en, fr)')       // Request language code
if(userCode=='es') {                                                // Hello World in Spanish
    document.write('Hola Mundo')                                       
}
if(userCode=='de') {                                                // Hello World in German 
    document.write('Hallo Welt')                                      
}
if(userCode=='fr') {                                                // Hello World in French
    document.write('Bonjour le monde')                                  
} 
if(userCode!='fr' && userCode!='de' && userCode!='es'){             // If not any above options, show in English
    document.write('Hello World')    
}
