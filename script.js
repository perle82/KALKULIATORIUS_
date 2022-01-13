/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

var a,b;
function setValues()
{
a = Number(document.getElementById("a").value);
b = Number(document.getElementById("b").value);
}

function sum()
{
    setValues();
    result = a+b;
    alert("Suma lygi"+ result)
}
function rest()
{
    setValues();
    result = a-b;
    alert("Atimtis lygi"+ result)

}function multiply()
{
    setValues();
    result = a*b;
    alert("Daugyba lygi"+ result)

}function div()
{
    setValues();
    result = a/b;
    alert("Dalyba lygi"+ result)

}


// function multiply(x) {
//     return function() {
//       return x * x;
//     }
// }