class ShopCart extends Map {
  constructor(){
      super();
  }
  returnArr(){
    const resultArr = [];
    this.forEach(el=>{
      resultArr.push(el)
    })
    return resultArr;
  }
  itemPush(id,product){
      if(this.get(id)!== undefined){
          console.log(id+' push!');
          let i =this.get(id).count;
          product.count = i+1;
          this.set(id,product)
      }
      if(this.get(id)== undefined){
        console.log(id+' adden!');
        product.count= 1;
        this.set(id,product)
      }
    }
  itemDeleteOne(id){
      if(this.get(id)!== undefined){
        const product =this.get(id);
        let i =this.get(id).count;
      if(i>1){
          console.log(id+' deleteOne!');
          product.count = i-1;
          this.set(id,product)
          }
        }
      }
  itemDelete(id){
      console.log(id+' deleted!');
      this.delete(id);
  }
  itemClean(){
    console.log(' Clean!');
    this.clear()
  }
}
module.exports = ShopCart;