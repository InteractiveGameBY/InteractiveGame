// import {mainWindow} from 'main.js';
    // import {mainWindow} from ('../main.js');

    const data_input = document.getElementsByClassName('data_input');
    const loginLabel =  document.getElementById('login').style;
    const PassLabel =  document.getElementById('password').style;

    // window.onresize = 
    setInterval(function AuthorizationSize(){
        document.getElementById('authorization').style.height=(document.documentElement.clientHeight)+'px';
        document.getElementById('authorization').style.width=(document.documentElement.offsetWidth/3)+'px';
    },0);

    setInterval(function DataInput(){
        if(data_input.login == document.activeElement || data_input.login.value != "" ){
            loginLabel.top = '-25%';
            loginLabel.left = '0%'
            loginLabel.zIndex = 2;
        } else {
            loginLabel.top = '30%';
            loginLabel.left = '3%'
            loginLabel.zIndex = 0;
        }

        if(data_input.pass == document.activeElement || data_input.pass.value != ""){
            PassLabel.top = '-25%';
            PassLabel.left = '0%'
            PassLabel.zIndex = 2;
        } else {
            PassLabel.top = '30%';
            PassLabel.left = '3%'
            PassLabel.zIndex = 0;
        }
    },0);

    // data_input.login.focus() = function (event){
    //     if(data_input.login == document.activeElement || data_input.login.value != "" ){
    //                 loginLabel.top = '-25%';
    //                 loginLabel.left = '0%'
    //                 loginLabel.zIndex = 2;
    //             } else {
    //                 loginLabel.top = '30%';
    //                 loginLabel.left = '3%'
    //                 loginLabel.zIndex = 0;
    //             }
    // } 