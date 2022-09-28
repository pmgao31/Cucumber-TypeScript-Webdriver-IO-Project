import report from '@wdio/allure-reporter'


export const EnterValue = async (element: Promise<WebdriverIO.Element>,text:string | number)=>{

await (await element).setValue(text)
addLog(`Entered Value: ${text}`)

}

export const selectValueByIndex = async (element: Promise<WebdriverIO.Element>,index:number)=>{

    await (await element).selectByIndex(index)
    addLog(`Selected the Index Value: ${index}`)
}
    

export const clickFn = async(element: Promise<WebdriverIO.Element>)=> {
    await (await element).click();
    addLog(`Clicked on the Value: ${(await element).selector}`)
}

export const addLog=(log:string)=>{
    report.addStep(`STEP: ${log}`)
    console.log(`STEP: ${log}`)
}