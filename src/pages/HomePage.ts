import { clickFn, EnterValue } from "../utills/command";

class HomePage{

    private get Timesheet(){    return $('[href="/employees/time_sheet_entry"]');     }
    private get Profile(){    return $('[src="/assets/face.png"]');     }
    private get Logout(){    return $('[href="/logout"]');     }
    private get Export(){    return $('//select["class=btn btn-primary timesheet-btn export_btn"]');     }
    private get pdf(){    return $('//option[contains(text(),"PDF")]');     }
     get SignInMsg(){    return $('[id="notice"]');     }
     
     async PDF(){
        
        await clickFn( this.pdf);
    }
     async EXPORT(){
        
        await clickFn( this.Export);
    }
    async TIMESHEET(){
        
        await clickFn( this.Timesheet);
    }
    async PROFILE(){
        
        await clickFn( this.Profile);
    }
    async LOGOUT(){
        
        await clickFn( this.Logout);
    }
     
    

}

export default new HomePage()