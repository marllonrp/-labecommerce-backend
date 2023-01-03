const usersChoose = process.argv[2]
const usersNumber = process.argv[3]

const renderNumber = (min,max)=>{
    return Math.floor(Math.random()*(max - min + 1)) + min
}

const computerNumber = renderNumber(0,10)
const computerChoose = ()=>{
    if (usersChoose === "par"){
        return "impar"
    } else {
   return "par"
}}

const result = Number(usersNumber) + computerNumber

if (usersChoose === "par" && result%2 === 0){
    console.log(`Você escolheu ${usersChoose} e o computador escolheu ${computerChoose(usersChoose)}. O resultado foi ${result}. Você ganhou! Parabéns!`)
}else if (usersChoose === "impar" && result%2 === 1){
    console.log(`Você escolheu ${usersChoose} e o computador escolheu ${computerChoose(usersChoose)}. O resultado foi ${result}. Você ganhou! Parabéns!`)
}else if (usersChoose === "par" && result%2 === 1){
    console.log(`Você escolheu ${usersChoose} e o computador escolheu ${computerChoose(usersChoose)}. O resultado foi ${result}. Você perdeu! Tente outra vez!`)
}else if (usersChoose === "impar" && result%2 === 0){
    console.log(`Você escolheu ${usersChoose} e o computador escolheu ${computerChoose(usersChoose)}. O resultado foi ${result}. Você perdeu! Tente outra vez!`)
}