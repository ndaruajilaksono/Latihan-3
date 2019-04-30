orang1 = {
    firstName: "Joni",
    lastName: "Jono",
    age: 35,
    eyeColor: "Blue",
    hasMarried: false
};

var orang2 = {
    firstName: "Joni",
    lastName: "Jono",
    age: 35,
    eyeColor: "Blue",
    hasMarried: true,
    children: [{
        name: 'Dika',
        age: 21,
    }],
    eat: function(){
        console.log('Martabak terang bulan')
    }
};

async function getNumber(){
    setTimeout(()=>{
        return 5
    }, 5000)
}

console.log(orang2.children[0].name)
orang1['age'] === '35'

getNumber()