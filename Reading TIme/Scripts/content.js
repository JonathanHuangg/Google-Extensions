//copied directly from chrome extensions tutorial
const article = document.querySelector("article"); //grabs reference to article from inspect

if (article) {
    const text = article.textContent; //entire article is saved onto
    const wordMatchRegExp = /[^\s]+/g; //regular expressions, another day another time
    const words = text.matchAll(wordMatchRegExp)

    const wordCount =[...words].length;
    const readingTime = Math.round(wordCount / 200);
    const badge = document.createElement("p") //creates html element

    badge.classList.add("color-secondary-text", "type--caption"); //adds html element
    badge.textContent = `⏱️ ${readingTime} min read`; //This is what the badge says

    const heading = article.querySelector("h1");

    const date = article.querySelector("time")?.parentNode;

    (date ?? heading).insertAdjacentElement("afterend", badge); 

}