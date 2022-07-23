init();





function init(){
    let elems = document.getElementsByClassName('shop');
    for(let elem of elems){
        elem.onclick = showOnly;
    }
}

function showOnly(){
    if(this.id === 'all'){
        let elems = document.getElementsByClassName('product');
        for(let elem of elems){
            elem.style.display = 'inline-block';
        }
        return;
    }
    let elems = document.getElementsByClassName('product');
    console.log(elems);
    for(let elem of elems){
        elem.style.display = 'none';
    }
    elems = document.getElementsByClassName(this.id);
    for(let elem of elems){
        elem.style.display = 'inline-block';
    }
}