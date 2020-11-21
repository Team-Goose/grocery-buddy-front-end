const userList = document.getElementById("userList");
let items;
async function getJson() {
    await fetch("/scripts/items.json")
    .then(response => {
       return response.json();
    }).then(function (data) {
        items = data;
    });
}

async function main() {
    await getJson();
    generateUserList();
}

function generateUserList() {
    for (let i = 0; i < items.items.length; i++) {
        let newElement = document.createElement("LI");
        newElement.innerHTML = items.items[i].name;
        userList.appendChild(newElement);
    }
}

main();
