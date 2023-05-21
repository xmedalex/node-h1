const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) {
//         throw err
//     }
//     console.log('Folder was creared successfully')
// })

const filePath = path.join(__dirname, 'test', 'test.txt')
// fs.writeFile(filePath, 'Hello Node JS', (err) => {
//     if (err) {
//         throw err
//     }
//     console.log("File was created")
// })

// fs.writeFile(filePath, 'Hello Node JS AGAIN', (err) => {
//     if (err) {
//         throw err
//     }
//     console.log("File was created")
// })


// fs.appendFile(filePath, '\n Appended string', (err) => {
//     if (err) {
//         throw err
//     }
//     console.log("File was created")
// })

// fs.readFile(filePath, (err, content) => {
//     if (err) {
//         throw err
//     } 
//     const data = Buffer.from(content)
//     console.log(data.toString())
// })

fs.readFile(filePath,'utf-8', (err, content) => {
    if (err) {
        throw err
    } 
    console.log(content)
})