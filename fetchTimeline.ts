// import express from "express";

// const app = express();


async function CallApi(product:String){
    let produtRetrieved = product;
    let url = `https://endoflife.date/api/${produtRetrieved}.json`;
    const options = {method: 'GET', headers: {Accept: 'application/json'}};
    
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
    
}




async function ProcessingOutput(calledProduct:String){

    let response:any = await CallApi(calledProduct);
    // console.log("This is Data",response);

    console.log(`The latest three versions of ${calledProduct} along with eol`)
    for(let i =0;i<=2;i++){
        console.log(response[i].cycle);
        console.log(response[i].eol);
    }
    
}


ProcessingOutput('python');
ProcessingOutput('ubuntu');
















