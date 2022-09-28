import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../../src/pages/LoginPage'
import HomePage from '../../src/pages/HomePage'
import TimeSheetPage from '../../src/pages/TimeSheetPage'



Given(/^Launch browser and load the url \"([^\"]*)\"$/, async function (appurl) {
  await browser.maximizeWindow()
  await browser.url(appurl)
 
});

When(/^I login with \"([^\"]*)\" and \"([^\"]*)\"$/, async function (username, password) {
    // await $('[id=inputEmail]').setValue(username);
    // await $('[id=inputPassword]').setValue(password);
    // await $('[name=button]').click();
    await LoginPage.Username(username);
    await LoginPage.Password(password);
    await LoginPage.Submit();
    
});

Then(/^Navigate to Add new Timesheet$/, async function () {
  // await browser.waitUntil(await $('[href="/employees/time_sheet_entry"]').isDisplayed);
  // await $('[href="/employees/time_sheet_entry"]').click();
  const msg=(await HomePage.SignInMsg).getText()
  console.log(msg);
  // await browser.waitUntil(async ()=> await (await HomePage.SignInMsg).getText()==="Signed in successfully.",{ timeout:1000, timeoutMsg:"Unable to login"});

  
  await HomePage.TIMESHEET();

});

Then(/^Veriffy Timesheet functions (.+), (.+),(.+), (.+)$/, async function (date, activity, hours, comments) {
  // await $('input[id="time_sheet_date"]').setValue('15-02-2021');
  // await $('[id=time_sheet_date]').setValue(date);
  // await browser.waitUntil(await $('[id=time_sheet_project]').isDisplayed);
  // await $('[id=time_sheet_project]').selectByIndex(activity);
  // await $('[id=time_sheet_hours]').setValue(hours);
  // await $('[id=employee_time_sheet_entries_attributes_0_comments]').setValue(comments);
  // await $('[name=commit]').click();
  // await browser.waitUntil(await TimeSheetPage.Activity.isDisplayed);
  
  await TimeSheetPage.ACTIVITY(activity);
  await TimeSheetPage.HOURS(hours);
  await TimeSheetPage.COMMENTS(comments);
  await TimeSheetPage.SUBMIT();
 
  
});
Then(/^Logout from website$/, async function () {
  
  await browser.pause(6000);
  // await browser.waitUntil(await $('[src="/assets/face.png"]').isDisplayed);
  // await $('[src="/assets/face.png"]').click();
  // await browser.waitUntil(await $('[href="/logout"]').isDisplayed);
  // await $('[href="/logout"]').click();

  // await browser.waitUntil(await HomePage.Profile.isDisplayed);
  await HomePage.PROFILE();
  // await browser.waitUntil(await HomePage.Logout.isDisplayed);
  await HomePage.LOGOUT();
});
