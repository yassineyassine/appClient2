
function calcul_total(cat){

   var qte=document.getElementById("quantite").value ;
   var prix=document.getElementById("prix").value ;

    document.getElementById("total").value=qte * prix;

    

}

function categorie_change(cat){

    if(cat.value==2)
    document.getElementById("block_detail").style.display ="inline";
    else
    document.getElementById("block_detail").style.display ="none";

}

function ecrit_resume(f){

   // alert(f.prix.value);
   var ur="produit_detail.html?p=111&d="+f.designation.value+"&q"+f.quantite.value+"&t="+f.total.value+"&e="+f.email.value;
    document.location.href=ur;

}