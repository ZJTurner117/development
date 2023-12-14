function reduceDirections3(directions) {
    if(!directions.length) return [] 
   let oppositeDirection = {
    N: 'S',
    S: 'N',
    W: 'E',
    E: 'W',
}
}
let newDirections = []
for (let i = 0; i < newDirections.length; i++) {
    let direction = directions[i]
    if (oppositeDirection[direction]) {
        let newDirection = newDirections.indexOf(oppositeDirection[direction])
    // VERIFY
    console.log(newDirection)
    if(newDirection !== -1) {
        newDirections.splice(newDirection, 1)
    } else {
        newDirections.unshift(directions[i])
    }
    // VERIFY
    console.log(newDirections)
    console.log(oppositeDirection[direction])
  }
}
return newDirections