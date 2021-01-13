// Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. “2 is even”).
for (i=0;i<=20;i++){
    console.log(    i%2 == 0 ? i+" - even" : i+" - odd");
}
/* 
Write programs that produce the following outputs:
100 200 300 400 500 600 700 800 900 1000
0 2 4 6 8 10
3 6 9 12 15
9 8 7 6 5 4 3 2 1 0
1 1 1 2 2 2 3 3 3 4 4 4
0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
*/
// adding up
const AddUp = (x) => {
    switch (x) {
        case 100:
        let sum_one_up = 0;
    for (i=1;i<=10;i++){
        sum_one_up += x;
       console.log(sum_one_up);
    }
            break;
        case 2:
            let sum_add_two = 0;
            for(i=0;i<=5;i++){
                console.log(sum_add_two)
                sum_add_two += 2;
                }
                break;
        case 3:
            let sum_add_three = 3;
            for (i=0;i<=4;i++){
                console.log(sum_add_three);
                sum_add_three += x;
                
            }
            break;
        default:
            break;
    }
};
AddUp(100);
AddUp(2);
AddUp(3);
const sub = (x) => {
    for (i=0;i<=10;i++){
        console.log (x-i);
    }
}
// subtraction 10-0
sub(10);

for (i=1;i<=3;i++){
    console.log(i,i,i)
}

// number row 01234
let numberrow ="";
for (i=0;i<=3;i++){
    for (y=0;y<=4;y++)
    numberrow += y;
}
console.log(numberrow);