import React, { Component } from "react";

export default class UserLogin extends Component {

    requiredEmail = () =>{
        console.log('Yalnız .ru domenlərinə icazə verilir.')
    }

    requiredPassword = () =>{
        console.log('Ən azı 8 simvol')
    }

    render() {
        return (
            <div>
                <form>
                    <label>Email
                        <input type="email" onFocus={this.requiredEmail}></input>
                    </label>
                    <label>Parol
                        <input type="password" onFocus={this.requiredPassword}></input>
                    </label>
                    <button className="buttonForm">Login</button>
                </form>
            </div>
        )
    }
}