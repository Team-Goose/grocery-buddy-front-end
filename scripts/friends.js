let items;
let all;
async function getJson() {
    await fetch("/scripts/items.json")
    .then(response => {
       return response.json();
    }).then(function (data) {
        all = data;
    });
}

function main() {
    // let id = document.cookie.id;
    // console.log(id);
    // console.log(document.cookie);
    // var requestOptions = {
    //     method: 'GET',
    //     redirect: 'follow'
    // };
    // fetch("http://198.58.101.98/account/1", requestOptions)
    //     .then(response => response.text())
    //     .then((result) => {
    //         console.log(result);
    //         let temp = JSON.parse(result);
    //         items = temp.list;
    //         console.log("items" + items);
    //         debugger;
    //         // generateUserList();
    //     })
    //     .catch((error) => {
    //         console.log('error', error);
    //     })
    //     .finally(function(){
    //         console.log("items" + items);
    //     });
    items = [556160662, 556186129];
    generateUserList();
}

function generateUserList() {
    // for (let i = 0; i < items.length; i++) {
        // var get = items[i];
        let image = document.createElement("IMG");
        image.classList.add("table-image");
        image.src = "/assets/prof-pic.png";
        let name = document.createElement("DIV");
        name.classList.add("table-text");
        name.innerHTML = "john42";
        let price = document.createElement("DIV");
        price.classList.add("table-text");
        price.innerHTML = "List 50% similar";
        let rem = document.createElement("DIV");
        rem.classList.add("table-text");
        rem.classList.add("rem");
        rem.onclick = function(){
            window.location.href="/friendslists/john42.html";
        }
        rem.innerHTML = "View list";

        let imageTd = document.createElement("TD");
        imageTd.style.height = "100%";
        imageTd.appendChild(image);
        let nameTd = document.createElement("TD");
        nameTd.style.height = "100%";
        nameTd.appendChild(name);
        let priceTd = document.createElement("TD");
        priceTd.style.height = "100%";
        priceTd.appendChild(price);
        let remTd = document.createElement("TD");
        remTd.style.height = "100%";
        remTd.appendChild(rem);

        let tr = document.createElement("TR");
        tr.appendChild(imageTd);
        tr.appendChild(nameTd);
        tr.appendChild(priceTd);
        tr.appendChild(remTd);
        tr.id = 0;
        document.getElementById("listTable").appendChild(tr);



        let image2 = document.createElement("IMG");
        image2.classList.add("table-image");
        image2.src = "/assets/prof-pic.png";
        let name2 = document.createElement("DIV");
        name2.classList.add("table-text");
        name2.innerHTML = "dalerthompson";
        let price2 = document.createElement("DIV");
        price2.classList.add("table-text");
        price2.innerHTML = "List 100% similar";
        let rem2 = document.createElement("DIV");
        rem2.classList.add("table-text");
        rem2.classList.add("rem");
        rem2.onclick = function(){
            window.location.href="/friendslists/dalerthompson.html";
        }
        rem2.innerHTML = "View list";

        let imageTd2 = document.createElement("TD");
        imageTd2.style.height = "100%";
        imageTd2.appendChild(image2);
        let nameTd2 = document.createElement("TD");
        nameTd2.style.height = "100%";
        nameTd2.appendChild(name2);
        let priceTd2 = document.createElement("TD");
        priceTd2.style.height = "100%";
        priceTd2.appendChild(price2);
        let remTd2 = document.createElement("TD");
        remTd2.style.height = "100%";
        remTd2.appendChild(rem2);

        let tr2 = document.createElement("TR");
        tr2.appendChild(imageTd2);
        tr2.appendChild(nameTd2);
        tr2.appendChild(priceTd2);
        tr2.appendChild(remTd2);
        tr2.id = 1;
        document.getElementById("listTable").appendChild(tr2);
}
    
// }

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
    // if(!document.cookie){
    //     window.location.href = "/access-failure";
    // } else{
        main();
    // }
}