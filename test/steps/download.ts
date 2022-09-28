import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../../src/pages/LoginPage'
import HomePage from '../../src/pages/HomePage'
import fs from 'fs'
import path from 'path'
import { deleteDirectory, parseJSONfile } from '../../src/utills/fileutils';
import { DOWNLOAD_PATH, RESOURCR_PATH } from '../../src/constants/pathconst';



Given(/^Launch browser and load the url \"([^\"]*)\"$/, async  (appurl)=> {
  await browser.maximizeWindow()
  await browser.url(appurl)
 
});

When(/^I login with \"([^\"]*)\" and \"([^\"]*)\"$/, async (username, password)=> {
   
    await LoginPage.Username(username);
    await LoginPage.Password(password);
    await LoginPage.Submit();
    
});

Then(/^Download report$/, async ()=>{
 
  const msg=(await HomePage.SignInMsg).getText()
  console.log(msg);
  
    
  await HomePage.EXPORT();
  await browser.pause(3000);
  await HomePage.PDF();
  await browser.pause(3000);

});

Then(/^Validate downloaded file extension$/, async ()=>{
 
  const extensions=['.jpg,','.txt','.pdf','.json','.jpeg']

  const files=fs.readdirSync(DOWNLOAD_PATH)
  files.forEach((file)=>{
    expect(extensions).toContain(path.extname(file))
  })
  
  deleteDirectory(DOWNLOAD_PATH);
});


Then(/^Logout from website$/, async ()=>{
  
  await browser.pause(4000);
  await HomePage.PROFILE();
  await HomePage.LOGOUT();
});
