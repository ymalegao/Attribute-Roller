const defaultAttributeScores = [15, 14, 13, 12, 10, 8];

function shuffleArray(targetarray){
    let shuffled = Array.from(targetarray);
    for (let i = shuffled.length - 1; i >0; i--){
        const j = Math.floor(Math.random() * (i+1));
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
}


class Player {
    constructor(characterName= "Naruto"){
        this.name = characterName;
        this.attributes = {
            strength: 0,
            dexterity:0,
            constitution:0,
            intellegence:0,
            wisdom:0,
            charisma:0
        };
        let shuffledResult = shuffleArray(defaultAttributeScores);
        for(const[key,value] of Object.entries(this.attributes)) {
            let attributeValue = shuffledResult.pop()
            this.attributes[key]= attributeValue;
        }
    }


    rollAttributes(){ 
        for (const key in this.attributes) {
            let results = diceRoller(4,6);
            results.sort(function(a,b){return a-b});
            results.shift()
            let sum = sumArrayElements(results);
            this.attributes[key] = sum;

        }
    }

    printPlayer(){
        console.log(`NAME: ${this.name}`)
        for (const [key,value] of Object.entries(this.attributes)){
            console.log(`${key.slice(0,3).toUpperCase()}:${value}`)
        }
    }

}

const play1 = new Player();
play1.printPlayer();
const play2 = new Player("Son Goku");
play2.rollAttributes();
play2.printPlayer();



function diceRoller(times,sides){
    let results = []
    for (let i = 0; i< times; i++){
        results.push(Math.floor(Math.random()*sides+1));

    }
    return results;
}

function sumArrayElements(array){
    let sum = 0;
    return array.reduce((total, currentnumber) => total + currentnumber)
    
    
    // for (let i = 0; i<array.length; i++){
    //     sum+=array[i];
    // }
    // return sum;
}

