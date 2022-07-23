init();
//<form action="/shopCart/addtoshopcart" method="POST">




function init(){
    let elems = document.getElementsByClassName('productButton');
    for(let elem of elems){
        elem.onclick = onClick;
    }
}
function onClick(){
    const id=String(this.id).slice(1);
    console.log(id);
    pushShopCart(id);
}
function pushShopCart(data){
    const newBody ={
        id:data
    }
    console.log(newBody)
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('/shopCart/addtoshopcart',{
        method:'POST',
        headers: myHeaders,
        body:JSON.stringify(newBody)
    }).then(() => {
        alert('Successfully!')
    })
}