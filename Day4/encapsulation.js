class Enemy {
  constructor(name, phrase, power, speed) {
    this.power = power;
    this.name = name;
    this.phrase = phrase;
    this.speed = speed;
  }

  info = () => {
    console.log(this.name, this.phrase, this.power, this.speed);
  };

  attack = () => console.log(`I'm attacking with a power of ${this.power}!`);
}
class Alien extends Enemy {
  #birthYear; // We first need to declare the private property, always using the '#' symbol as the start of its name.

  constructor(name, phrase, power, speed, birthYear) {
    super(name, phrase, power, speed);
    this.species = "alien";
    this.#birthYear = birthYear; // Then we assign its value within the constructor function
  }
  fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
  howOld = () => console.log(`I was born in ${this.#birthYear}`); // and use it in the corresponding method.
}

// We instantiate the same way we always do
const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50, 10000);
alien1.howOld(); // output: "I was born in 10000"
alien1.info();
