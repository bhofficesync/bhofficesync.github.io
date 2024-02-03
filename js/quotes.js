const quotes = [
  {
    quote: "The trust of the innocent is the liar's most useful tool.",
    author: "Stephen King",
  },
  {
    quote:
      "We must let go of the life we have planned, so as to accept the one that is waiting for us.",
    author: "Joseph Campbell",
  },
  {
    quote: "Confidence comes from discipline and training.",
    author: "Robert Kiyosaki",
  },
  {
    quote:
      "I may not be where I want to be, but thank God I am not where I used to be.",
    author: "Joyce Meyer",
  },
  {
    quote: "If you fell down yesterday, stand up today.",
    author: "H. G. Wells",
  },
  {
    quote: "Every man regards his own life as the New Year's Eve of time.",
    author: "Jean Paul",
  },
  {
    quote: "No act of kindness, no matter how small, is ever wasted.",
    author: "Aesop",
  },
  {
    quote: "Truth is always a delusion.",
    author: "Friedrich Durrenmatt",
  },
  {
    quote:
      "You are today where your thoughts have brought you; you will be tomorrow where your thoughts take you.",
    author: "James Allen Read",
  },
  {
    quote: "I die the king's faithful servant, but God's first.",
    author: "Thomas More",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.round(Math.random() * (quotes.length - 1))];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
