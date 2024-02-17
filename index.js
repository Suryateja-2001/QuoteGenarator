const btn = document.getElementById('btn');
const output = document.querySelector(".output");
const author = document.getElementById('author');
let data;

async function fetchQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    data = await response.json();
    return data;
}
fetchQuotes().then(btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * data.length);
    output.textContent = data[random].text;
    author.textContent = data[random].author;
}))