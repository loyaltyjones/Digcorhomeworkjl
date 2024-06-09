//Get the  Form element by it's ID
document.getElementById('regForm').addEventListener('submit',function getInfo(){
    //Prenvent the default form submission
    // event.preventDefault();

    //Get values from the form fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('psw').value;
    const passRep = document.getElementById('psw-repeat').value;

    
    console.log('email: ', email);
    console.log('passord:', password);
    console.log('password_repeat: ', passRep)

    // // ('/registration')
    // // app.post('/registration',async function(req,res)){
    // //     const {email,password} = req.body;
    //     await.db.none('INSERT INTO tbcrypt (username,password)VALUES($1,$2,)',[email,password] )


    })


    // app.post('/signup', async (req,res) =>{
    //     const{username, password} = req.body;
    //     const hash = await bcrypt.hash(password,10);
    //     await db.none('INSERT INTO tbcrypt(username, hash)VALUES($1,$2)',[username,hash]);
    //     res.send("You are signed up") 
    //     });
// });

