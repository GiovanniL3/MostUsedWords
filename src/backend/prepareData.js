module.exports = rows => {
    return new Promise((resolve, reject) => {
        try {
            const data = rows
                .filter(filterValid)
                .map(removePontuation)
                .map(removeTags)
                .reduce(mergeRows)
                .split(" ")
                .map(word => word.toLowerCase())
                .map(word => word.replace(/"/g, "")) // Remove todas as aspas duplas

            resolve(data)
        } catch (e) {
            reject(e)
        }
    })
}

function filterValid(row) {
    const notNumber = isNaN(row.trim()) // Verifica se não é um número
    const notEmpty = !!row.trim() // Verifica se não está vazio
    const notInterval = !row.includes("-->") // Verifica se não contém "-->"
    return notNumber && notEmpty && notInterval 
}

function removePontuation(row) {
    return row.replace(/[-♪,?.!:";]/g, "")
}

function removeTags(row) {
    return row.replace(/(<[^>]+)>/g, "").trim()
}

function mergeRows(fullText, rowText) {
    return `${fullText} ${rowText}`
}




/* module.exports = rows=> {
    return new Promise((resolve, reject) => {
        try{

            const data = rows
                .filter(filterValid)
                .map(removePontuation)
                .map(removeTags)
                .reduce(mergeRows)
                .split(" ")
                .map(word => word.toLOwerCase())


            resolve(data)

        } catch (e){
            reject(e)
        }


    })
}

function filterValid(row) {
    const notNumber = !parseInt(row.trim())
    const notEmpty = !!row.trim()
    const notInterval = !ResizeObserver.includes("-->")
    return notNumber && notEmpty && notInterval 
}

function removePontuation(row) {
    return row.replace(/[,?!:;.']/g, "")
}

function removeTags(row) {
    return row.replace(/[<*>]/g,"")
}

function mergeRows(fullText, rowText) {
    return `${fullText} ${rowText}`
}




 */