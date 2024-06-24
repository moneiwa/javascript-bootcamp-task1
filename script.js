document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const message = document.getElementById('message');
    const resetButton = document.getElementById('reset');
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    const winCounter = document.getElementById('winCounter');
    
    let cards = generateCards();
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;
    let matchesFound = 0;

    function generateCards() {
        const cardValues = [...letters, ...letters];
        return shuffleArray(cardValues.map(value => ({
            value: value,
            flipped: false,
            matched: false
        })));
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function createBoard() {
        gameBoard.innerHTML = '';
        cards.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.dataset.index = index;
            cardElement.addEventListener('click', flipCard);
            gameBoard.appendChild(cardElement);
        });
    }

    function flipCard() {
        if (lockBoard) return;
        const cardIndex = this.dataset.index;
        const card = cards[cardIndex];

        if (card.matched || card.flipped || (firstCard && secondCard)) {
            return;
        }

        card.flipped = true;
        this.innerText = card.value;
        this.classList.add('flipped');

        if (!firstCard) {
            firstCard = card;
        } else {
            secondCard = card;
            checkForMatch();
        }
    }


//imp



    function checkForMatch() {
        if (firstCard.value === secondCard.value) {
            setTimeout(() => {
                firstCard.matched = true;
                secondCard.matched = true;
                matchesFound += 1;
               if (matchesFound === letters.length) {
                    message.textContent = 'Congratulations! You have matched all pairs!🎉';
                }
      

function incrementWinCount() {
    winCount++;
    document.getElementById('winCounter').innerText = `Wins: ${winCount}`;
    console.log(`Win count incremented: ${winCount}`);
}

                
//chaaaa

function onPlayerWin() {
    incrementWinCount();
    
}







                resetBoard();
            }, 1000);
        } else {
            lockBoard = true;
            setTimeout(() => {
                firstCard.flipped = false;
                secondCard.flipped = false;
                resetBoard();
            }, 1000);
        }
    }

    function resetBoard() {
        firstCard = null;
        secondCard = null;
        lockBoard = false;
        renderBoard();
    }

    function renderBoard() {
        gameBoard.innerHTML = '';
        cards.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            if (card.flipped || card.matched) {
                cardElement.innerText = card.value;
                cardElement.classList.add('flipped');
            }
            cardElement.dataset.index = index;
            cardElement.addEventListener('click', flipCard);
            gameBoard.appendChild(cardElement);
        });
    }

    resetButton.addEventListener('click', () => {
        cards = generateCards();
        matchesFound = 0;
        message.textContent = '';
        renderBoard();
    });

    createBoard();
});











document.addEventListener('DOMContentLoaded', () => {
    const commentInput = document.getElementById('commentInput');
    const submitComment = document.getElementById('submitComment');
    const commentsContainer = document.getElementById('comments');

    submitComment.addEventListener('click', () => {
        const commentText = commentInput.value.trim();
        if (commentText === '') {
            alert('Please enter a comment.');
            return;
        }

        addComment(commentText);
        commentInput.value = '';
    });

    function addComment(commentText) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.textContent = commentText;
        commentsContainer.appendChild(commentElement);
    }
});
