const fs = require('fs')
module.exports = paths=> {
    return new Promise((resolve, reject) => {
        try{

            const rows = paths
                .map(path=> fs.readFileSync(path).toString('utf-8'))/* armazena na constante a leitura de arquivo(path) atarves do fs */
                .reduce((fullText, fileText)=>{
                    return `${fullText}\n${fileText}`
                } ).split("\n")
                resolve(rows)

        }catch (e){
            reject(e)
        }
    })
}

















