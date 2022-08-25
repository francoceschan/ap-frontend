import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";

export class Login {
    static readonly type = '[Login] Login';

    constructor(public payload: boolean) {}
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
    static getIsAuthenticated(ctx: StateContext<LoginStateModel>){
        console.log(ctx.getState().isAuthenticated)
        return ctx.getState().isAuthenticated
    }


    @Action(Login) login(ctx: StateContext<LoginStateModel>, {payload}:Login) {
         ctx.setState({
            isAuthenticated: payload
         })
    }
}