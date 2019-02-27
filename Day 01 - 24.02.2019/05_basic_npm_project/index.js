const hebrewDate = require("hebrew-date");
 
// When not providing a date object, the months are one-indexed
console.log(hebrewDate(2016, 10, 2));
// { year: 5776, month: 13, date: 29, month_name: 'Elul' }
 
let october = 9;
console.log(hebrewDate(new Date(2016, october, 3)));
// { year: 5777, month: 1, date: 7, month_name: 'Tishri' }


function test(){
    if (true){
        var a1=1
        let a2=2
        const a3=3

        a4=4
        console.log(a4)

        console.log(a1)
        console.log(a2)
        console.log(a3)

    }
    console.log(a1)
        //console.log(a2)
       // console.log(a3)
}

test()

//console.log(a1)
        //console.log(a2)
        //console.log(a3)



function test2(n1=3, n2=n1){
    console.log(n1, n2)
}


test2(2, ;4)