const getMonth = (callback)=>{
    setTimeout(()=>{
        let error = false
        let month = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September",
        "Oktober","November","Desember"]
        if (!error){
            callback(null, month)
        }else{
            callback("sorry data not found", null)
        }
    }, 3000)
}

getMonth ((error, month) => {
  if (error) {
    console.log(error);
    return;
  }else{}
  month.map((item) => {
    console.log(item);
  });
});