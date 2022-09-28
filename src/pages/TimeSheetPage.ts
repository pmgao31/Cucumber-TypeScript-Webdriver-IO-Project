import { clickFn, EnterValue, selectValueByIndex } from "../utills/command";

class Timesheet {


    private get Activity(){    return $('[id=time_sheet_project]');     }
    private get Hours(){    return $('[id=time_sheet_hours]');     }
    private get Comments(){    return $('[id=employee_time_sheet_entries_attributes_0_comments]');     }
    private get Submit(){    return $('[name=commit]');     }


    async ACTIVITY(activity:number){
        
        await selectValueByIndex(this.Activity,activity)
    }
    async HOURS(hrs:number){
        
        await EnterValue(this.Hours,hrs)
    }
    async COMMENTS(cmts:string){
        
        await EnterValue(this.Comments,cmts)
    }
    async SUBMIT(){
        await clickFn( this.Submit);
        
    }


}

export default new Timesheet()
