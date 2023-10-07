function rand(min, max){
    let r = Math.floor(Math.random() * (max - min) + min)
    return r
}

console.log(rand(1,60))