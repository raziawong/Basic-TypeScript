var isWinter : boolean = false;
// isWinter = 123;

var count : Number = 5;
var nm : String = "Bran";

var names : any[] = ["Jon", "Peter", "Aisha", 1];

enum Starks {Jon, Bran, Eddard, Catlyn};

var cat : Starks = Starks.Catlyn;

function getName() : String {
    return names[1];
}

function printStr() : void {
    console.log("Winter is coming")
}
