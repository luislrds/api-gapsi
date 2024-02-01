import * as fs from 'fs'
const dataPath = './assets/bd.json'

//Principle Single Responsibility Principle (SRP)

export const saveData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}
export const getData = () => {
    const jsonData = fs.readFileSync(dataPath, 'utf8')        
    return JSON.parse(jsonData)    
}