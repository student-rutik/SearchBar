const search=()=>{
    const searchBox=document.getElementById("search-item").value.toUpperCase();
    const storeItem=document.getElementById("product-list");
    const product=document.querySelectorAll(".product");
    const pName=document.getElementsByTagName("h2");

    for(var i=0; i<pName.length;i++){
        let match=product[i].getElementsByTagName("h2")[0];
        let price=product[i].getElementsByTagName("h3")[0];


        if(match){
            let txtvalue=match.textContent || match.innerHTML;
            let pvalue=price.textContent || price.innerHTML;

            if(txtvalue.toUpperCase().indexOf(searchBox)> -1 || pvalue.toUpperCase().indexOf(searchBox)> -1){
                product[i].style.display="";
            }
            else{
                product[i].style.display="none";
            }
        }
    }
}
