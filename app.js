let btn = document.querySelector('#new-quoto');
let quoto = document.querySelector('.quoto');
let person = document.querySelector('.person');
const quotos = [
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        person: "Franklin D. Roosevelt"
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        person: "Abraham Lincoln"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon"
    },
    {
        quote: "The purpose of our lives is to be happy.",
        person: "Dalai Lama"
    },
    {
        quote: "Get busy living or get busy dying.",
        person: "Stephen King"
    },
    {
        quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        person: "Brian Tracy"
    },
    {
        quote: "Believe you can and you're halfway there.",
        person: "Theodore Roosevelt"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs"
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        person: "James Cameron"
    },
    {
        quote: "Success is not how high you have climbed, but how you make a positive difference to the world.",
        person: "Roy T. Bennett"
    }
];
btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotos.length);
    quoto.innerText = quotos[random].quote;
    person.innerText = quotos[random].person;
    
})
