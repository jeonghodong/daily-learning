const input = `2000`


const is윤년 = (yaer) => {
    if(yaer % 400 === 0){
        return true //윤년
    } 

    if(yaer % 4 === 0 && yaer % 100 !== 0){
        return true //윤년
    }else {
        return false
    }
}

console.log(is윤년(Number(input)) ? 1 : 0)