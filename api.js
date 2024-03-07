const container= document.getElemenById("container");
const myReq=new XMLHttpRequest( );
myReq.open("GET","https://dog.ceo/api/breeds/list/all");
myReq.responseType="json";
myReq.onreadystatechange=function( ){
    if(myReq.readystate===4){
        let data = myReq.response;
        for(let i=0;i<data.length;i++){
            console.log(data[i]);
            container.innerHTML +=
            

        }
    }
}
myReq.send();