console.log('Hola Mundo!!!');

//Objetos
export let person = {
    name: 'Oscar',
    age: 37,
    isActive: true,
    hobbies: ['Football', 'Skate', 'cycling', 'movies'],
    toString(){
        let objectString = this.name + ' ' + this.age + ' ' + this.hobbies;
        console.log(objectString);
        //this hace referencia al objeto
    }
}

//person.toString();
//Así llamamos al método del objeto person


let car = {
    drivenKms: 80000,
    gearBox: 'auto',
    cc: 2400,
    color: 'silver'
}

let smartTv = {
    apps: ['youtube', 'Netflix', 'Disney'],
    inchesSize: 32,
    webBrowser: true,
}

let youtubeVideo = {
    lengthSecs: 150,
    title: 'How to...',
    subs: 'In this video...',
    printSubs(){
        console.log(`${this.title} ${this.subs}`)
    }
}


console.log(car)
console.log(smartTv)
console.log(youtubeVideo)
youtubeVideo.printSubs();