let total = ''
let sp;
let i = 0
function reverse(a){
    total = ''
    sp = String(a).split('')
    for(let i = sp.length - 1; i>=0; i--){
        total += sp[i]
    }
    return Number(total)
}
function check(a){
    if(a == reverse(a)){
        return true
    }else{
        return false
    }
}
console.log(check(2345))
console.log(check(2332))
let plus = 0
let hash = 0
let mass = []
function count(a){
    plus = 0
    hash = 0
    sp = a.split('')
    for(let i = 0; i<sp.length; i++){
        if(sp[i] === '#'){
            hash++
        }else if(sp[i] === '+'){
            plus++
        }
    }
    mass[0] = hash
    mass[1] = plus
    return mass
}
console.log(count('+ ##+'))
console.log(count('### +'))
let ready = ''
function secret(a){
    ready = ''
    for(let i = 0; i<a.length; i++){
        sp = (a[i]).split('')
        ready += sp[0]
    }
    return ready
}
console.log(secret(['Al', 'Jane']))
let end = ''
let ind = 0
let big = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let small = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
function anti(a){
    end = ''
    for(let i = 0; i<a.length; i++){
        if(big.includes(a[i]) == true){
            ind = big.indexOf(a[i])
            end += small[ind]
        }else if(small.includes(a[i]) == true){
            ind = small.indexOf(a[i])
            end += big[ind]
        }else{
            end+=a[i]
        }
    }
    return end
}
console.log(anti('aBrTyuhJ'))
let valid = true
function isValid(a){
    for(let i = 0; i<a.length; i++){
        if(a[i] == ' ' || big.includes(a[i]) == true || small.includes(a[i]) == true){
            valid = false
        }
    }
    if(valid == true){
        if(a.length > 5){
            valid = false
        }
    }
    return valid
}
console.log(isValid('6578'))
console.log(isValid('345 67a'))
class User{
    constructor(name, id){
        this.userName = name
        this.userID = id
    }
}
console.log(new User('Turgut', 994234578))
const user1 = new User('Javid', 1234567)
const user2 = new User('Ayhan', 283745756)