console.log('Я внешний файл')
//Способы объявления переменной - let, const(var)
//Переменная объявленная с помощью const не может быть переопредлделена

//let name = 'Denis'
//name = 'DenisB'
//const name = 'Denis'
//_, $ - можно начинать наши переменные

//const MAX = 100
//const MIN = 0
//const ATTEMPTS_NUMBER = 10 //const писать желательно заглавными
//NaN - Not a Number

const name = `Denis`
console.log(`name`)
console.log(`Имя - ${name}`)

const SETTINGS = {
   MAX: 100,
   MIN: 0,
   ATTEMPTS_NUMBER: 10
}
const PLAYER_NAME = getPlayerName()
const RANDOM_NUMBER = getRandomNumber()
console.log(SETTINGS)
console.log(RANDOM_NUMBER)


function getPlayerName() {
   const playerName = prompt('Как тебя зовут?, ')
   return playerName
}

function getRandomNumber() {
   const randomNumber = Math.round(Math.random() * 100)
   return randomNumber
}

function game(max, min, attemptsNumber, randomNumber, playerName) {
   alert(`Привет ${playerName}!
   Я загадал число от ${min} до ${max}.
   У тебя есть ${attemptsNumber} попыток.
   Погнали??
   `)
   let answersCount = []
   for (let index = 1; index <= attemptsNumber; index++) {
      const playerAnswer = prompt('Какое число я загадал?', '')
      if (playerAnswer > randomNumber) {
         alert(`Мое число меньше, у тебя осталось ${attemptsNumber - index} попыток`)
         answersCount.push(playerAnswer)
      }
      else if (playerAnswer < randomNumber) {
         alert(`Мое число больше, у тебя осталось ${attemptsNumber - index} попыток`)
         answersCount.push(playerAnswer)
      }
      else {
         alert('Поздравляю, ты разгадал мою тайну!')
         return
      }
   }
   alert(`Упс....
    Ты не угадал моё число!
    Я загадал - ${randomNumber}.
    Твои ответы - ${answersCount}.
    `)
}

game(SETTINGS.MAX, SETTINGS.MIN, SETTINGS.ATTEMPTS_NUMBER, RANDOM_NUMBER, PLAYER_NAME)