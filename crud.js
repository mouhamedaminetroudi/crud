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
submit.onclick = create;
//console.log(title,price,taxes,ads,discount,total,count,category,submit);
let moode='create';
let temp;


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
        title:title.value.toLowerCase(),
        price:price.value,
        taxes:price.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value.toLowerCase(),
        
    }
    if(title.value!="" && price.value !="" && category.value !="" && newcr.count<=100){
           if(moode==='create'){
        if(newcr.count>1){
            for(let i=0;i<newcr.count;i++){
                atapro.push(newcr);
            }
        }else{
            atapro.push(newcr);
        }
    }else{
        atapro[temp]=newcr;
        moode='create';
        submit.innerHTML='Create';
        count.style.display='block';
    } 
    clear();
    }



    
    localStorage.setItem('product' , JSON.stringify(atapro));
    
    stockdata();
    
    

    //console.log(atapro);
}
function clear(){
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';
    count.value='';
    category.value='';
}
function stockdata()
{
    gettotal()
    let table='';
    
    for(let i=0;i<atapro.length;i++){
        table +=`
    
        <tr>
            <td id="row-${i}">${i+1}</td>
            <td>${atapro[i].title}</td>
            <td>${atapro[i].price}</td>
            <td>${atapro[i].taxes}</td>
            <td>${atapro[i].ads}</td>
            <td>${atapro[i].discount}</td>
            <td>${atapro[i].total}</td>
            <td>${atapro[i].category}</td>
            <td><button id="update" onclick="updatedata(${i})">UPDATE</button></td>
            <td><button id="delete" onclick="deletedata(${i})">DELETE</button></td>
        </tr>
        `;
        let btndelete=document.getElementById('deleteall');

        if(atapro.length>0){
            btndelete.innerHTML=`<button onclick="clearall()">DELETE ALL ${atapro.length}</button>`

        }
        
        //console.log(table);
    }
    document.getElementById('tbody').innerHTML=table ;
}
stockdata();

function deletedata(i){
    atapro.splice(i,1);
    localStorage.product=JSON.stringify(atapro);
    stockdata()
}
function clearall(){
    localStorage.clear();
    atapro.splice(0);
    stockdata();
}
function updatedata(i){
    //console.log(i);
    title.value=atapro[i].title ;
    price.value=atapro[i].price ;
    taxes.value=atapro[i].taxes ;
    ads.value=atapro[i].ads ;
    discount.value=atapro[i].discount ;
    gettotal();
    count.style.display='none';
    category.value=atapro[i].category ;
    submit.innerHTML='Update';
    moode='Update';
    temp=i;
    scroll({
        top:0,
        behavior:"smooth",
    })
    let row=document.getElementById(`row-${temp}`);
    if(row){
        row.scrollIntoView({
            behavior:"smooth",
            block:"center"
        });
    }
}


    
    localStorage.setItem('product' , JSON.stringify(atapro));
    clear();
    stockdata();
    
    

    //console.log(atapro);

function clear(){
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';
    count.value='';
    category.value='';
}
function stockdata()
{
    gettotal()
    let table='';
    
    for(let i=0;i<atapro.length;i++){
        table +=`
    
        <tr>
            <td id="row-${i}">${i+1}</td>
            <td>${atapro[i].title}</td>
            <td>${atapro[i].price}</td>
            <td>${atapro[i].taxes}</td>
            <td>${atapro[i].ads}</td>
            <td>${atapro[i].discount}</td>
            <td>${atapro[i].total}</td>
            <td>${atapro[i].category}</td>
            <td><button id="update" onclick="updatedata(${i})">UPDATE</button></td>
            <td><button id="delete" onclick="deletedata(${i})">DELETE</button></td>
        </tr>
        `;
        let btndelete=document.getElementById('deleteall');

        if(atapro.length>0){
            btndelete.innerHTML=`<button onclick="clearall()">DELETE ALL (${atapro.length})</button>`

        }
        
        console.log(table);
    }
    document.getElementById('tbody').innerHTML=table ;
}
stockdata();

function deletedata(i){
    atapro.splice(i,1);
    localStorage.product=JSON.stringify(atapro);
    stockdata()
}
function clearall(){
    localStorage.clear();
    atapro.splice(0);
    stockdata();
}
function updatedata(i){
    //console.log(i);
    title.value=atapro[i].title ;
    price.value=atapro[i].price ;
    taxes.value=atapro[i].taxes ;
    ads.value=atapro[i].ads ;
    discount.value=atapro[i].discount ;
    gettotal();
    count.style.display='none';
    category.value=atapro[i].category ;
    submit.innerHTML='Update';
    moode='Update';
    temp=i;
    scroll({
        top:0,
        behavior:"smooth",
    })
    let row=document.getElementById(`row-${temp}`);
    if(row){
        row.scrollIntoView({
            behavior:"smooth",
            block:"center"
        });
    }
}
let moods="title";
let search=document.getElementById("search");
function searchmood(id) {
    if(id=="searchtitle"){
        moods="tilte";
        
    }else{
        moods="category"
        
    }
    search.placeholder ='Search By '+moods ;

    search.focus();
    search.value='';
    stockdata()
}
function searchdata(value){
    let table='';
for(let i=0;i<atapro.length;i++){
    if(moods==="title"){
        
            if(atapro[i].title.includes(value.toLowerCase())){
                
    
            table +=`<tr>
            <td id="row-${i}">${i+1}</td>
            <td>${atapro[i].title}</td>
            <td>${atapro[i].price}</td>
            <td>${atapro[i].taxes}</td>
            <td>${atapro[i].ads}</td>
            <td>${atapro[i].discount}</td>
            <td>${atapro[i].total}</td>
            <td>${atapro[i].category}</td>
            <td><button id="update" onclick="updatedata(${i})">UPDATE</button></td>
            <td><button id="delete" onclick="deletedata(${i})">DELETE</button></td>
        </tr>
        `;
            }
        
    }else{
       
            if(atapro[i].category.includes(value.toLowerCase())){
                
    
            table +=`<tr>
            <td id="row-${i}">${i+1}</td>
            <td>${atapro[i].title}</td>
            <td>${atapro[i].price}</td>
            <td>${atapro[i].taxes}</td>
            <td>${atapro[i].ads}</td>
            <td>${atapro[i].discount}</td>
            <td>${atapro[i].total}</td>
            <td>${atapro[i].category}</td>
            <td><button id="update" onclick="updatedata(${i})">UPDATE</button></td>
            <td><button id="delete" onclick="deletedata(${i})">DELETE</button></td>
        </tr>
        `;
            }
        }

    }
    document.getElementById('tbody').innerHTML=table ;
}