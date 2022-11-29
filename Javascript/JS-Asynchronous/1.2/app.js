const baseUrl = 'https://api.nationalize.io';

fetch('https://api.nationalize.io')
.then((res) => res.json())
.then((data) => {
    const btn = document.querySelector("button");
    btn.addEventListener("click",(ev) => baseUrl)
});