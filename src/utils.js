import yargs from 'yargs';
import request from 'request';
const search = function(){

}
const list = function(URLcharacters,pag){
    let URL;
    if(pag){
        
        URL = `${URLcharacters}${"/?page="}${pag}`;
    }else{
        URL = `${URLcharacters}${"/?page=0"};`
    }
    console.log(URL);
    request({url:URL,json: true},(error,response)=>{
        response.body.results.forEach(function(element){
            console.log(`${element.id}${" "}${element.name}`)
        })
    })
}

const listAlives = function(URLcharacters,pag){
    let URL;
    if(pag){
        URL = `${URLcharacters}${"/?page="}${pag}`;
    }else{
        URL = `${URLcharacters}${"/?page=0"}`;
    }
    request({url:URL,json : true},(error,response)=>{
        response.body.results.forEach(function(element){
            if(element.status === "Alive"){
                console.log(element.name);
            }
        })
    })
}
const listDead = function(URLcharacters,pag){
    let URL;
    if(pag){
        URL = `${URLcharacters}${"/?page="}${pag}`
    }else{
        URL = `${URLcharacters}${"/?page=0"}`
    }
    request({url:URL,json:true},(error,response)=>{
        response.body.results.forEach(function(element){
            if(element.status === "Dead"){
                console.log(element.name);
            }
        })
    })
}
const searchID = function(URLcharacters,id){

    let URL = `${URLcharacters}${"/"}${id}`;
    request({url:URL,json:true},(error,response)=>{

        console.log(response.body);
    })
}
const show = function(results){
    for(let i = 0; i<results.length;i++){
        console.log(results[i]);
    }
}
const getURL = function(URLcharacters,results,name){//utilizamos recursividad porque request es asincrona
    console.log(`name: ${name}`)
    request({url:URLcharacters,json:true},(error,response)=>{
        response.body.results.forEach(element=>{
            if(element.name === name){
                results.push(element);
                console.log(element.id);
            }
        });
        if(response.body.info.next !== ""){
            console.log(response.body.info.next);
            getURL(response.body.info.next,results,name);
        }else{
            show(results);//Nos los muestra todo
        }
    })
}

export {searchID,list,listAlives,listDead,getURL};