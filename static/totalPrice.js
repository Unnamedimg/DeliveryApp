Init();

function Init(){
    const productPrices = document.getElementsByClassName('Price');
    const productCounts = document.getElementsByClassName('productCount');
    console.log(productCounts)
    for(let elem of productCounts){
        elem.oninput =Init;
    };
    pageSetTotalPrice(calcTotalPrice(getValues(productCounts,productPrices)));
}
function calcTotalPrice(arr){
    const priceArr =arr[0];
    const countArr =arr[1]
    console.log(priceArr,countArr)
    let totalPrice=0;
    for(let i=0;i<priceArr.length;i++){
        totalPrice+=priceArr[i]*countArr[i];
    }
    console.log(totalPrice);
    return totalPrice;
}
function getValues(productCounts,productPrices){
    const counts=[];
    const prices=[];
    for(let elem of productCounts){
        counts.push(elem.value);
    };
    for(let elem of productPrices){
        prices.push(elem.value);
    };
    console.log(prices,counts)
    return [prices,counts];
}
function pageSetTotalPrice(elem){
    document.getElementById('totalPrice').value=elem+' UAH';
}