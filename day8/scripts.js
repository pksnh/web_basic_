// HTML 카드 생성 함수
function createCard(data) {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = data.title;

    const body = document.createElement("div");
    body.classList.add("body");
    body.textContent = data.body;

    const footer = document.createElement("div");
    footer.classList.add("footer");
    footer.textContent = `User ID: ${data.userId} | ID: ${data.id}`;

    card.appendChild(title);
    card.appendChild(body);
    card.appendChild(footer);

    return card;
}