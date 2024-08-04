const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/crud.txt`

// for(i=0;i<5;i++){
//     fs.writeFileSync(dirPath+`/hello${i}.txt`,`hello world${i}`)
// }

// fs.writeFileSync(filePath,'this is our first crud file')

// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })

// fs.appendFile(filePath, ' created with node.js', (err) => {
//     if (!err) console.log('file updated successfully')
// })

// fs.rename(filePath,`${dirPath}/CRUD.txt`,(err)=>{
//     if(!err) console.log('file rename successfully');
// })

fs.unlinkSync(`${dirPath}/CRUD.txt`);