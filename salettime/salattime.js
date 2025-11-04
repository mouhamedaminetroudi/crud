let cities=[
   "تونس","نابل","بنزرت"
]
for(let city of cities){
    const content=`
    <option style="color:black;">${city}</option>`
    document.getElementById("cities-select").innerHTML+=content
}
document.getElementById("cities-select").addEventListener("change",function(){
    if(this.value=="نابل"){
        getprayerstime("Nabeul")
    }
    else if(this.value=="تونس"){
        getprayerstime("Tunis")
    }
    else if(this.value=="بنزرت"){
        getprayerstime("Bizerte")
    }
    document.getElementById("city").innerHTML=this.value

})

function getprayerstime(cityname){
    let params={
    country: "SA",
    city: cityname

}
axios.get(`https://api.aladhan.com/v1/calendarByCity?country=TN&city=${cityname}`,{
    params:{
        ID:1234
    }
})
.then(function(response){
    const dataArray = response.data.data;          
    const todayIndex = new Date().getDate() - 1;     
    const timings = dataArray[todayIndex].timings;

    filltime("fajr-time",timings.Fajr)
    filltime("duhr-time",timings.Dhuhr)
    filltime("asr-time",timings.Asr)
    filltime("maghreb-time",timings.Maghrib)
    filltime("isha-time",timings.Isha)
    const todayData = dataArray[todayIndex];
    const readableDate = todayData.date.readable;
    const weekday = todayData.date.hijri.weekday.ar;
    const date=(weekday+" "+readableDate );
    document.getElementById("date").innerHTML=date;

    console.log(response);
})
.catch(function(error){
    console.log(error);
})
function filltime(id,time){
    document.getElementById(id).innerHTML = time;
}
}
getprayerstime("Bizerte")



