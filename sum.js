//for
function sumArray1(mang1) {
  let sum1 = 0;
  for (let i = 0; i < mang1.length; i++) {
    sum1 += mang1[i];
  }

  return sum1;
}
let mang1 = [3, 5, 7, 9, 11];
console.log(sumArray1(mang1)
);

//while

function sumArray2(mang2){
    let sum2 = 0;
    let i = 0;
    while (i < mang2.length){
        sum2 += mang2[i];
        i++
    }
    return sum2;
}
let mang2 = [5, 7, 9];
console.log(sumArray2(mang2)
);

//map  
function sumArray3(mang3){
    let sum3 = 0;
    mang3.map(function(value){
        sum3 += value;
    });
    
    return sum3;
}

let mang3 = [2, 4, 6, 8];
console.log(sumArray3(mang3));

//forEach
function sumArray4(mang4){
    let sum4 = 0;
    mang4.forEach(function(value){
        sum4 += value;
    });
    
    return sum4;
}

let mang4 = [5, 7, 77, 47];
console.log(sumArray4(mang4));