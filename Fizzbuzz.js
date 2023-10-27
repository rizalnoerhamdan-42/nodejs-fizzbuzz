var iterasi=0;
var jumlah_nilai=50;
var modulus_1 = 3;
var modulus_2 = 5;

for (iterasi+1; iterasi < jumlah_nilai; iterasi++) {
    if (iterasi % 15 == 0) console.log("FizzBuzz");
         else if (iterasi % modulus_1 == 0) console.log("Fizz");
         else if (iterasi % modulus_2 == 0) console.log("Buzz");
    else 
         console.log(iterasi);
}