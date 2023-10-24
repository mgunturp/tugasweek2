const cobaFetch = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  let link = await fetch(url);
  let text = await link.json();
  return text;
};

cobaFetch()
.then((data) => {
  data.map((hasil) => {
    console.log(hasil.name);
  });
})

.catch((err)=>{
    console.log(err);
});