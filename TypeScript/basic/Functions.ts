// Named Function 
function add(x, y) {
    return x + y
}

// Anonymous function
let myAdd = function(x, y) { return x + y }

let myAdd2: (x: number, y: number) => number = function(x: number, y: number): number { return x + y }

// Rest Parameters
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ")
}
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie")
console.log(employeeName)

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName

let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        return function () {
            let pickedCard = Math.floor(Math.random() * 52)
            let pickedSuit = Math.floor(pickedCard / 13)

            return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
        }
    }
}

let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()

alert("card: " + pickedCard.card + " of " + pickedCard.suit)

