async function getJson() {
    let data = await fetch("scripts/items.json")
    .then(response => {
       return response.json();
    })
    return data;
}

const items = getJson();
console.log(items);

