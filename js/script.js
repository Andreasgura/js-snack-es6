/*
SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
*/

let vipTable = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];
let vipTablesInvites = vipTable.map((el, i)=>{
    let placeholder = {
        tableName : "vipTable",
        guestName : el,
        place : i+1
    }
    return placeholder
});
console.log(vipTablesInvites)

let students = [
    {
        Id: 213, 
        Name: 'Marco della Rovere',
        Grades: 96
    },
    {
        Id: 110, 
        Name: 'Paola Cortellessa',
        Grades: 96
    },
    {
        Id: 250, 
        Name: 'Andrea Mantegna',
        Grades: 48
    },
    {
        Id: 145, 
        Name: 'Gaia Borromini',
        Grades: 74
    },
    {
        Id: 196, 
        Name: 'Luigi Grimaldello',
        Grades: 68
    },
    {
        Id: 102, 
        Name: 'Piero della Francesca',
        Grades: 50
    },
    {
        Id: 120, 
        Name: 'Francesca da Polenta',
        Grades: 84
    }
];

students.forEach(element => {
    console.log(element.Name)
});

const uppercaseName = students.map((el,i)=>{
    const upName = el.Name.toUpperCase()
    return upName
});
console.log(uppercaseName);

const voteOver70 = students.filter((el)=>{
    return el.Grades > 70
});
console.log(voteOver70);

const voteAndId = students.filter((el)=>{
    return el.Grades > 70 && el.Id > 120
})
console.log(voteAndId);


let bikes = [
    {Name : 'bici1', weight : 81 }, 
    {Name : 'bici2', weight : 61 },
    {Name : 'bici3', weight : 26 },
    {Name : 'bici4', weight : 19 },
    {Name : 'bici5', weight : 45 },
    {Name : 'bici6', weight : 83 },
]

bikes.sort(function(a, b){return a.weight - b.weight});
// displayCars();
console.log(bikes[0]);

let teams = [
    {name : 'team1', points: 0, foulsSuffered: 0},
    {name : 'team2', points: 0, foulsSuffered: 0},
    {name : 'team3', points: 0, foulsSuffered: 0},
    {name : 'team4', points: 0, foulsSuffered: 0},
    {name : 'team5', points: 0, foulsSuffered: 0}
];

teams.forEach(el => {
    el.points = getRndInteger(1, 100)
    el.foulsSuffered = getRndInteger(1, 100)
});
console.log(teams);

// const newTeams = teams.map((el)=>{
//     let newObj = { name : el.name }
//     return newObj  
// });
// console.log(newTeams);

const newTeams = teams.map((el)=> {
    const {name, foulsSuffered} = el;
    return {name, foulsSuffered};
});
console.log(newTeams);