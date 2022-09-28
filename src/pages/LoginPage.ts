import { clickFn, EnterValue } from "../utills/command";


class LoginPage {

   private get username(){    return $('[id=inputEmail]');     }
   private get pswd(){return $('[id=inputPassword]');    }
   private get submit(){return $('[name=button]');    }

async Username(uname:string){
    
    await EnterValue(this.username,uname)
}
async Password(pwd:string){
    
    await EnterValue(this.pswd,pwd)
}
async Submit(){
    
    await clickFn( this.submit);
}
}

export default new LoginPage()