const name = ("Anthony Abrignani");
const age = 29;
const birthday = ("March 30");
const lifeEvents = ["I was born in Detroit, Michigan", "My first music festival was in 2011",
                   "I graduated high school in 2010", "I adopted my cat the day after Thanksgiving 2019"]
let detroitGC = true;

if (detroitGC === true) {
    console.log("My name is", name, "and I am a student at Grand Circus in Detroit, Michigan. I am currently", age, "years old and my birthday is on", birthday, ".");
} else {
    console.log("My name is", name, "and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently", age, "years old and my birthday is on", birthday, ".");
}

for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
  }

let counter = 0;

while (true) {
    
    let randomNumber = Math.floor(Math.random() * 11);
    if (randomNumber !== 5) {
        counter ++;
        console.log(`${randomNumber} !== 5`);
    }   else {
        counter ++;
        console.log(`5===5. It took ${counter} iterations to randomly generate the number 5.`);
        break;
    }  
}

