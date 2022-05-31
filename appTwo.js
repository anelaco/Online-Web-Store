const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeItems = document.getElementById("product-list");
  const product = document.querySelectorAll(".product");
  const pname = storeItems.getElementsByTagName("h2");

  for (var i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName("h2")[0];
    if (match) {
      let textvalue = match.textContent || match.innerHTML;
      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};

window.addEventListener("load", () => {
   let filter = document.getElementById("#search-item"),
     list = document.querySelectorAll("h2");

   filter.onkeyup = () => {
     let search = filter.ariaValueMax.toLocaleLowerCase();

     for (let i of list) {
       let item = i.innerHTML.toLowerCase();
       if (item.indexOf(search) == -1) {
         i.classList.add("hide");
       } else {
         i.classList.remove("hide");
       }
     }
   };
 });
