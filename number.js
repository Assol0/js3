const lo = prompt ('Введите число')
const ko = prompt ('Введите число')
function name(lo,ko){
    if (lo > ko) {
        console.log(`${lo} больше чем ${ko}`);
    }
    else if  (lo < ko){
        console.log(`${lo} меньше чем ${ko}`);
    }
    else if (lo = ko) {
        console.log(`${lo} равны ${ko}`);
    }
}
name(lo,ko);