const fs=require('fs')
const crypto=require('crypto')

let stringHasher=(data)=>{
    let hash=crypto.createHash('sha512')
    hash.update(data)
    let hashValue=hash.digest('hex')
    return hashValue
    
}
let fileHasher=(data)=>{
    try{
    let hash=crypto.createHash('sha512')
    let fileData=fs.readFileSync(data).toString()
    hash.update(fileData)
    return hash.digest('hex')
    }
    catch(err){
        console.log('Error Reading and Hashing the File:',err);
        return;
    }
}


let hasher=(data,type)=>{
    if(type==='string'){
       return stringHasher(data)
    }
    else if(type==='file'){
        return fileHasher(data)
    }
    else{
        console.log('Please pass the right argument to invoke :)');

    }

}
module.exports=hasher;