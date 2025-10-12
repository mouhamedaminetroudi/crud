//get total
//create product
//save local storage
//clear inputs
//read
//count
//delete
//update
//search
//clean data
let title=document.getElementById('title');
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let ads=document.getElementById('ads');
let discount=document.getElementById('dis');
let total=document.getElementById('total');
let count=document.getElementById('count');
let category=document.getElementById('category');
let submit=document.getElementById('submit');
//console.log(title,price,taxes,ads,discount,total,count,category,submit);

//get total
function gettotal(){
    //console.log("done")
    if(price.value !=''){
        total.innerHTML=(+price.value + +taxes.value + +ads.value)- +discount.value ;
        total.style.background='#040';
        
    }
    else{
        total.innerHTML='';
        total.style.background='#a50606';
    }

}
let atapro ;
if(localStorage.product !=null){
    atapro=JSON.parse(localStorage.product)
}else{
    atapro=[]
}

function create(){
    let newcr={
        title:title.value,
        price:price.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
        
    }
    atapro.push(newcr);
    localStorage.setItem('product' , JSON.stringify(atapro))
    console.log(atapro);
}