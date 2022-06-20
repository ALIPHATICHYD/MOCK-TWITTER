
    const users =[
        {username: 'ALIPHA', password: 'tic'},
        {username: 'HYDRO', password: 'carbon'},
    ];

    const timeline = [{username: 'ALIPHA', tewwt: 'Go get your PVC'},{usernam: 'HYDRO', tweet: 'Agba Senior Dev'}]

    function userValid(username, password){
        for(let i = 0; i < users.length; i++){
            if(users[i].username === username &&
                users[i].password === password){
                    return true;
                }

        }
    }

    function signIn(username, password){
        if(userValid(username, password)){
                console.log(timeline);
        }else{
            alert("Username or passwprd is incorrect")
        }
            
    }

    const usernameInput = prompt('Enter your username').toLowerCase()
    const passwordInput = prompt('Enter your password')

    signIn(usernameInput, passwordInput);
    console.log(userValid('', 'eniola'))
