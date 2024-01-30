const word = "hello world"



let reversedSetntence = ''
let reversedWord = ''
for( let i= word.length - 1; i>=0 ; i--){
    if(word[i] === ' ' || i === 0 ){
        
      
        if(i === 0){
            reversedWord += word[i]
        }
        
        for(let i = reversedWord.length-1; i>=0; i--){
            reversedSetntence += reversedWord[i]
            
        }
        
        reversedSetntence += ' ' 
        reversedWord = ''
        
    }

    reversedWord += word[i]
    
    

   
}

console.log(reversedWord);

console.log(reversedSetntence);