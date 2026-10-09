export function sauvegarderCle(cle){
    sessionStorage.setItem("cleApi",cle); 
}
export function  lireCle(){
    const recupCle=  sessionStorage.getItem("cleApi");
    return recupCle;
}