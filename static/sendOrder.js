Init();



function Init(){
document.getElementById('sendOrder').onclick = onclick;
}


function onclick(){
    SendOrder(getDataFromPage(getProductsFromPage()))
}
function getProductsFromPage(){
    const collection = document.getElementsByClassName('product');
    const products=[];
    for (let elem of collection){
        products.push({id:elem.id,count:document.getElementById(`count${elem.id}`).value})
    }
    console.log(products)
    return products;
    //collection.forEach(el=>{console.log(el);})
}
function getDataFromPage(productsArr){
    const newBody={
        address:document.getElementById('address').value,
        email:document.getElementById('email').value,
        phone:document.getElementById('phone').value,
        name:document.getElementById('name').value,
        totalPrice:Number(String(document.getElementById('totalPrice').value).replace(/[^+\d]/g, '')),
        products:productsArr
    }
    console.log(newBody)
    return newBody
}
function SendOrder(newBody){
    console.log(newBody)
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('/shopCart/addtoorders',{
        method:'POST',
        headers: myHeaders,
        body:JSON.stringify(newBody)
    }).then(() => {
        window.location.href = 'http://localhost:3000/';
        alert('Successfully!')
    })
}