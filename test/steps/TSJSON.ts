import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../../src/pages/LoginPage'
import HomePage from '../../src/pages/HomePage'
import TimeSheetPage from '../../src/pages/TimeSheetPage'

import { parseJSONfile } from '../../src/utills/fileutils';
import { RESOURCR_PATH } from '../../src/constants/pathconst';



Given(/^Launch browser and load the url \"([^\"]*)\"$/, async  (appurl)=> {
  await browser.maximizeWindow()
  
  await browser.url(appurl)
 
});

When(/^I login with \"([^\"]*)\" and \"([^\"]*)\"$/, async (username, password)=> {
   
    await LoginPage.Username(username);
    await LoginPage.Password(password);
    await LoginPage.Submit();
    const msg=(await HomePage.SignInMsg).getText()
    console.log(msg);
    // await expect(msg).toContain("123");
    
});

Then(/^Navigate to Add new Timesheet$/, async ()=>{
     
  await HomePage.TIMESHEET();

});


  Then(/^Veriffy Timesheet functions (.+)$/,  async  (datapath:string)=> {
  // let data = fs.readFileSync(datapath,"utf-8");
  // let testdata=JSON.parse(data)
  // let testdata=fileUtils.parseJSONfile(datapath)
  
  let testdata=parseJSONfile(RESOURCR_PATH+datapath)


  await TimeSheetPage.ACTIVITY(testdata.activity);
  await TimeSheetPage.HOURS(testdata.hours);
  await TimeSheetPage.COMMENTS(testdata.comments);
  await TimeSheetPage.SUBMIT();
 
  
});
Then(/^Logout from website$/, async ()=>{
  
  await browser.pause(6000);
  await HomePage.PROFILE();
  await HomePage.LOGOUT();
});
