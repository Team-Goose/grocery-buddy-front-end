let items;

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
    //         items = result.list;
    //         generateUserList();
    //     })
    //     .catch((error) => {
    //         console.log('error', error);
    //     })
    //     .finally(function(){
    //         // window.location.href = "/mylist";
    //     });
    generateUserList();
}

function generateUserList() {
    let image = document.createElement("IMG");
    image.classList.add("table-image");
    image.src = "https://i5.walmartimages.com/asr/93a17e9f-c519-487e-8f61-6f7b58fc764f.07776d55da72f8818cec403ec35ff81c.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff";
    let name = document.createElement("DIV");
    name.classList.add("table-text");
    name.innerHTML = "Organic Bananas, Bunch";
    let price = document.createElement("DIV");
    price.classList.add("table-text");
    price.innerHTML = "$1.39";
    let stock = document.createElement("DIV");
    stock.classList.add("table-text");
        stock.style.color = "forestgreen";
        stock.innerHTML = "In stock";

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
    tr.id = 0;
    document.getElementById("listTable").appendChild(tr);



    let image2 = document.createElement("IMG");
    image2.classList.add("table-image");
    image2.src = "https://i5.walmartimages.com/asr/87069dc4-cf0d-4ea0-8161-474ca6cf7420_1.99864e6b70ba8e62f59a8d1355d947ce.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff";
    let name2 = document.createElement("DIV");
    name2.classList.add("table-text");
    name2.innerHTML = "Organic Green Cabbage, head";
    let price2 = document.createElement("DIV");
    price2.classList.add("table-text");
    price2.innerHTML = "$1.92";
    let stock2 = document.createElement("DIV");
    stock2.classList.add("table-text");
        stock2.style.color = "forestgreen";
        stock2.innerHTML = "In stock";

    let imageTd2 = document.createElement("TD");
    imageTd2.style.height = "100%";
    imageTd2.appendChild(image2);
    let nameTd2 = document.createElement("TD");
    nameTd2.style.height = "100%";
    nameTd2.appendChild(name2);
    let priceTd2 = document.createElement("TD");
    priceTd2.style.height = "100%";
    priceTd2.appendChild(price2);
    let stockTd2 = document.createElement("TD");
    stockTd2.style.height = "100%";
    stockTd2.appendChild(stock2);

    let tr2 = document.createElement("TR");
    tr2.appendChild(imageTd2);
    tr2.appendChild(nameTd2);
    tr2.appendChild(priceTd2);
    tr2.appendChild(stockTd2);
    tr2.id = 1;
    document.getElementById("listTable").appendChild(tr2);
}

function rem(item){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    fetch("http://198.58.101.98/list/remove/1/" + item, requestOptions)
        .then(response => response.text())
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log('error', error);
        })
        .finally(function(){});
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
    // if(!document.cookie){
    //     window.location.href = "/access-failure";
    // } else{
        main();
    // }
}