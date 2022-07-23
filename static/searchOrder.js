init();

function init(){
    console.log('hi')
    document.getElementById('search').onclick = onClick;
}

function onClick(){
    cleanPage();
    searchOrder(getDataFromPage());
}

function cleanPage(){
    document.getElementById('productBlock').innerHTML="";
}

function getDataFromPage(){
    const email = document.getElementById('email').value,
    phone = document.getElementById('phone').value;
    return [email,phone]
}

function searchOrder(data){
    const newBody ={
        email:data[0],
        phone:data[1]
    }
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Accept', 'application/json')
    fetch('/history/searchorder',{
        method:'POST',
        headers: myHeaders,
        body:JSON.stringify(newBody)
    }).then((res) => res.json())
    .then(el=>{el.forEach(order =>showOrders(order))})
//    .then(el=>{showOrders(el[0])})
}

 function showOrders(data){
    const userInfo = [data.address,data.email,data.phone,data.name,data.date];
    document.getElementById('productBlock').insertAdjacentHTML('beforeend',`<div class="order" id="order${data._id}"></div>`)
    document.getElementById(`order${data._id}`).insertAdjacentHTML('beforeend',
    `<div class="orderInfo">
        <p>Address: ${data.address}</p>
        <p>Email: ${data.email}</p>
        <p>Phone: ${data.phone}</p>
        <p>Name: ${data.name}</p>
        <p>Date: ${data.date}</p>
        <p>Total Price: ${data.totalPrice}UAH</p>
    </div>`
    )
    data.products.forEach(el=>{searchProducts(el.id,el.count,`order${data._id}`)}) 
}

function searchProducts(dataId,dataCount,orderId){
    const newBody ={
        id:dataId
    }
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Accept', 'application/json')
     fetch('/shop/getproduct',{
        method:'POST',
        headers: myHeaders,
        body:JSON.stringify(newBody)
    }).then((res) => res.json())
    .then(el=>{el.count = dataCount; showProduct(el,orderId)})
}

function showProduct(product,orderId){
    document.getElementById(`${orderId}`).insertAdjacentHTML('beforeend',`
    <div class="product">
    <div class="productImg" style="background-image:url(${product.imgsrc})"></div>
    <div class="productTitle">${product.title}</div>
    <div class="productPrice">${product.price} UAH</div>
    <label class="productCountLabel" for="{{_id}}">Count:</label>
    <input readonly class="productCount" name="count" type="number" value="${product.count}">
    </div>
    `)
}