      //add button
      const rockBtn = document.getElementById('rock')
      const paperBtn = document.getElementById('paper')
      const scissorsBtn = document.getElementById('scissors')

      const computer = document.getElementsByClassName('computer')[0];
      const computerPlayerText = computer.querySelector('#player')
      const computerChoiceText = computer.querySelector('#choice')
      const computerResult = computer.querySelector('#Result')
      const computerScoreText = computer.querySelector('#score')
      
      // game info user
      const user = document.getElementsByClassName('user')[0]
      const userPlayerText = user.querySelector('#player')
      const userChoiceText = user.querySelector('#choice')
      const userResult = user.querySelector('#Result')
      const userScoreText = user.querySelector('#score')


      //Computer
      let computerChoice = 2
      let computerScore = 0

      //User
      let userChoice = 1
      let userScore = 0
      let userName = addUserName()

      function addUserName (){

        let name = prompt('Pleas enter your name:')
        return name
      }

      function Computer() {
        let choice = Math.round(Math.random() * 2 + 1)
        console.log(choice)

        if (choice === 1) {
          //Rock
          computerChoice = 1
          computerChoiceText.innerHTML= 'Rock'
          evaluate()
        } else if (choice === 2) {
          //Paper
          computerChoice = 2
          computerChoiceText.innerHTML= 'Paper'
          evaluate()
        } else if (choice === 3) {
          //Scissors
          computerChoice = 3
          computerChoiceText.innerHTML= 'Scissors'
          evaluate()
        }
      }

      function evaluate() {
        if (computerChoice === userChoice) {
          // All Draw
          console.log('draw')
          userResult.innerHTML= 'Draw'
          computerResult.innerHTML= 'Draw'
        } else if (
          (computerChoice === 1 && userChoice === 3) ||
          (computerChoice === 3 && userChoice === 2) ||
          (computerChoice === 2 && userChoice === 1)
        ) {
          console.log('computer is the winner')
          computerResult.innerHTML= 'Win'
          userResult.innerHTML= 'lose'
          computerScore++
          computerScoreText.innerHTML= computerScore
        } else if (
          (computerChoice === 3 && userChoice === 1) ||
          (computerChoice === 2 && userChoice === 3) ||
          (computerChoice === 1 && userChoice === 2)
        ) {
          console.log('player is the winner')
          userResult.innerHTML= 'Win'
          computerResult.innerHTML= 'lose'
          userScore++
          userScoreText.innerHTML= userScore
        }
        winner()
      }

      function winner() {
        if (computerScore === 3) {
          console.log(' computer wins')
          alert('Computer won!')
          resetGame()
        } else if (userScore === 3) {
          console.log('user wins')
          alert(`${userName} won!` )
          resetGame()
          
        }
      }

      //Take user input
      rockBtn.addEventListener('click', () => {
        userChoice = 1
        userChoiceText.innerHTML= 'Rock'
        Computer()
      })
      paperBtn.addEventListener('click', () => {
        userChoice = 2
        userChoiceText.innerHTML= 'Paper'
        Computer()
      })
      scissorsBtn.addEventListener('click', () => {
        userChoice = 3
        userChoiceText.innerHTML= 'Scissors'
        Computer()
      })

      function startGame (){
        resetGame()
        userPlayerText.innerHTML= userName
      }

function resetGame ( ){
  computerScore = 0
  userScore = 0
  computerScoreText.innerText = '0'
  userScoreText.innerText = '0'
  userChoiceText.innerHTML= ' '
  computerChoiceText.innerHTML= ' '
  userResult.innerHTML= ' '
  computerResult.innerHTML= ' '
}

      startGame()