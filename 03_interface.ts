interface StarkInterface {
    name: String;
    age?: number;
}

function printName(stark : StarkInterface) {
    console.log(stark.name);
}

printName({name:"Eddard"});
printName({name:"Jon",age:10})