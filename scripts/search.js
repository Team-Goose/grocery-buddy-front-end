let items;
async function getJson() {
    await fetch("/scripts/items.json")
    .then(response => {
       return response.json();
    }).then(function (data) {
        items = data;
    });
}

var searchTerm = "";

function term(){
    let bar = document.getElementById("searchbar");
    searchTerm = bar.value;
    console.log(searchTerm);
    let table = document.getElementById("listTable");
    while(table.firstChild) table.removeChild(table.firstChild);
    generateList();
}

async function main() {
    await getJson(); //pulls full database for first display
    generateList();
}

function generateList() {
    for (let i = 0; i < items.items.length; i++) {
        var get = items.items[i];
        if(get.name.toLowerCase().includes(searchTerm.toLowerCase())){
            let image = document.createElement("IMG");
            image.classList.add("table-image");
            image.src = get.thumbnail;
            let name = document.createElement("DIV");
            name.classList.add("table-text");
            name.innerHTML = get.name;
            let price = document.createElement("DIV");
            price.classList.add("table-text");
            if(get.msrp > get.saleprice){
                price.innerHTML = "$" + get.saleprice;
                price.style.color = "forestgreen";
            } else price.innerHTML = "$" + get.msrp;
            let stock = document.createElement("DIV");
            stock.classList.add("table-text");
            if(get.stock === "Available" && get.offertype.includes("STORE")){
                stock.style.color = "forestgreen";
                stock.innerHTML = "In stock";
            } else{
                stock.style.color = "red";
                stock.innerHTML = "Out of stock";
            }

            let imageTd = document.createElement("TD");
            imageTd.style.height = "100%";
            imageTd.appendChild(image);
            let nameTd = document.createElement("TD");
            nameTd.style.height = "100%";
            nameTd.appendChild(name);
            let priceTd = document.createElement("TD");
            priceTd.style.height = "100%";
            priceTd.appendChild(price);
            let stockTd = document.createElement("TD");
            stockTd.style.height = "100%";
            stockTd.appendChild(stock);

            let tr = document.createElement("TR");
            tr.appendChild(imageTd);
            tr.appendChild(nameTd);
            tr.appendChild(priceTd);
            tr.appendChild(stockTd);
            document.getElementById("listTable").appendChild(tr);
        }
    }
}

/*  STRUCTURE TO FOLLOW
<tr>
    <td>
        <img class="table-image" src="{{ item.thumbnailImage }}"/>
    </td>
    <td style="height: 100%">
        <div class="table-text">{{ item.name }}</div>
    </td>
    <td style="height: 100%" v-if="{{ item.msrp }} > {{ item.salePrice }}">
        <div class="table-text" style="color:forestgreen">{{ item.salePrice }}</div>
    </td>
    <td style="height: 100%" v-if="{{ item.msrp }} <= {{ item.salePrice }}">
        <div class="table-text">{{ item.msrp }}</div>
    </td>
    <td style="height: 100%" v-if="{{ item.stock }} == 'Available' && {{ item.offerType }}.includes('STORE')">
        <div class="table-text" style="color:forestgreen">In stock</div>
    </td>
    <td style="height: 100%" v-if="{{ item.stock }} != 'Available' || !{{ item.offerType }}.includes('STORE')">
        <div class="table-text" style="color:red">Out of stock</div>
    </td>
</tr> */

window.onload = function(){
    if(!document.cookie){
        window.location.href = "/access-failure";
    } else{
        main();
    }
}