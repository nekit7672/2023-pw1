function getRandomQuote() {
    var quotes = [
        "Цитата 1: «Чем умнее человек, тем легче он признает себя дураком».",
        "Цитата 2: «Никогда не ошибается тот, кто ничего не делает»",
        "Цитата 3: «Менее всего просты люди, желающие казаться простыми»",
        "Цитата 4: «Мы находимся здесь, чтобы внести свой вклад в этот мир",
        "Цитата 5: «Мода проходит, стиль остаётся»"
    ];
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
    document.getElementById("quote").innerHTML = randomQuote;
}