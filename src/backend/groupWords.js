module.exports = words => {
    //[a,a,b,b,a,c,e,d,] --> {a:3, b:2 , c:1 , D:1. E:1}
    return new Promise((resolve, reject) => {
        try {
            
            const groupedWords = words.reduce((obj, word)=> {
                if(obj[word]) {
                    obj[word] = obj[word] + 1 
                } else {
                    obj[word] = 1
                }
                return obj
            }, {})

            const groupedWordsArray = 
            Object.keys(groupedWords)
                        .map( key=>({word:key, amount:groupedWords[key]}) )
                        .sort((w1, w2)=> w2.amount-w1.amount)
            resolve(groupedWordsArray)

        } catch {

        }

    })
}
