window.onload =() =>{
    document.querySelector('#btn').onclick =tipCalculate;

}
function tipCalculate(){
    //console.log("test")
    let amount=document.querySelector('#amt').value;
    let person=document.querySelector('#person').value;
    let Service=document.querySelector('#service').value;
if(amount===''&&Service==='Select'){
    alert("Please enter valid values");
    return;
}
if(person === '1'){
    document.querySelector('#each').style.display = 'none';
}else{
    document.querySelector('#each').style.display = 'block';
}

let total=(amount*Service)/person;
total=Math.round(total*100)/100;
total=total.toFixed(2);
document.querySelector('.tip').style.display='block';
document.querySelector('#total').innerHTML=total;



}
