let quote = document.querySelector(".jsQuote")
let author = document.querySelector(".jsAuthor")
let newQuoteBtn = document.querySelector(".jsNewQuoteBtn")

let quotes = [
  {
    quote: "A rose by any other name would smell as sweet.",
    author: "William Shakespeare",
  },
  {
    quote: "Ask not what your country can do for you; ask what you can do for your country.",
    author: "John Kennedy",
  },
  {
    quote: "Eighty percent of success is showing up.",
    author: "Woody Allen",
  },
  {
    quote: "Elementary, my dear Watson.",
    author: "Sherlock Holmes",
  },
  {
    quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
  },
  {
    quote: "He travels the fastest who travels alone.",
    author: "Rudyard Kipling",
  },
  {
    quote: "Hell has no fury like a woman scorned.",
    author: "William Congreve",
  },
  {
    quote: "Hell is other people.",
    author: "Jean-Paul Sartre",
  },
  {
    quote: "I think therefore I am.",
    author: "Rene Descartes",
  },
  {
    quote: "If at first you don’t succeed, try, try again.",
    author: "W. E. Hickson",
  },
  {
    quote: "If you are going through hell, keep going.",
    author: "Winston Churchill",
  },
  {
    quote: "If you want something said, ask a man; if you want something done, ask a woman.",
    author: "Margaret Thatcher",
  },
  {
    quote: "Knowledge is power.",
    author: "Sir Francis Bacon",
  },
  {
    quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
  },
]

chooseRandomQuote()

function chooseRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length)
  quote.textContent = quotes[randomNumber].quote
  author.textContent = quotes[randomNumber].author
}

newQuoteBtn.addEventListener("click", () => {
  chooseRandomQuote()
})

