import { addLog } from "./command"

class Assertion{

     toContain(actual:string,expected:string){
        expect(actual).toContain(expected)
        addLog(`Assertion >> ${actual} to conatain ${expected}`)
     }
     toEqual(actual:string,expected:string){
        expect(actual).toContain(expected)
        addLog(`Assertion >> ${actual} to equLL ${expected}`)
     }
}
export default new Assertion()