function resetScreen()
{
    let box = document.getElementById("revealBox");
    let colors = document.getElementById("colors");
    let messageInput = document.getElementById("message");
    let nameInput = document.getElementById("name");
    let name = nameInput.value;
    let header = document.getElementById("revealName");
    let message = messageInput.value;
    let selectedColor = colors.value;
    document.body.style.backgroundColor = selectedColor;
    box.innerHTML = `<p>${message}</p>`;
    header.innerHTML = `Hello, ${name}`;

}