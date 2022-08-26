import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AuthenticationService } from "src/app/services/auth.service";

export class Login {
    static readonly type = '[Login] Login';

    constructor(
        public payload: boolean
        ) {}
}

export interface LoginStateModel {
    
        
            isAuthenticated: boolean
        
   
}

const defaultLoginStateModel : LoginStateModel = {isAuthenticated:false}

@State<LoginStateModel>({
    name: 'login',
    defaults: defaultLoginStateModel
})
@Injectable()
export class LoginState{

    @Selector()
    static getIsAuthenticated(state: LoginStateModel){
        return state.isAuthenticated
    }


    @Action(Login) login(ctx: StateContext<LoginStateModel>, {payload}:Login) {
         ctx.setState({
            isAuthenticated: payload
         })
    }
}