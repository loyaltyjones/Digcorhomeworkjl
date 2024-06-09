app.patch('/updateinfo:username', async function(req, res) {
    // } else 
    if((!req.body|| typeof(req.body) !== 'object') || (!'username' in req.body || typeof(req.body.username) !== 'string') || (!'password' in req.body || typeof(req.body.password) !== 'string') || (!'email' in req.body || typeof(req.body.email) !== 'string') || (!'street_number' in req.body|| typeof(req.body.street_number) !== 'number') || (!'street_name' in req.body || typeof(req.body.street_name) !== 'string') || (!'city' in req.body || typeof(req.body.city) !== 'string') || (!'zipcode' in req.body || typeof(req.body.zipcode) !== 'number') || (!'phone_number' in req.body || typeof(req.body.phone_number)!== 'string')){
        res.statusCode = 400
        res.json({error: "Invalid body Parameters"})
    } else {
        const userInput = req.params.username;
        const {username,password,email,street_number,street_name,city,zipcode,phone_number} = req.body;
        let updatedUser = await db.query(`UPDATE updatelogin SET username = $1, password = $2,email = $3,street_number = $4, street_name = $5, city = $6, zipcode = $7, phone_number =$8 WHERE username =$9 RETURNING *`,[username,password,email,street_number,street_name,city,zipcode,phone_number, userInput]);
        res.json(updatedUser);
        console.log(updatedUser); 
    }
    
  });


  app.patch('/updateinfo:username', async function(req, res) {
    // } else 
    if((!req.body|| typeof(req.body) !== 'object') || (!'username' in req.body || typeof(req.body.username) !== 'string') || (!'password' in req.body || typeof(req.body.password) !== 'string') || (!'email' in req.body || typeof(req.body.email) !== 'string') || (!'street_number' in req.body|| typeof(req.body.street_number) !== 'number') || (!'street_name' in req.body || typeof(req.body.street_name) !== 'string') || (!'city' in req.body || typeof(req.body.city) !== 'string') || (!'zipcode' in req.body || typeof(req.body.zipcode) !== 'number') || (!'phone_number' in req.body || typeof(req.body.phone_number)!== 'string')){
        res.statusCode = 400
        res.json({error: "Invalid body Parameters"})
    } else {
        const userInput = req.params.username;
        const {username,password,email,street_number,street_name,city,zipcode,phone_number} = req.body;
        let updatedUser = await db.query(`UPDATE updatelogin SET username = $1, password = $2,email = $3,street_number = $4, street_name = $5, city = $6, zipcode = $7, phone_number =$8 WHERE username =$9 RETURNING *`,[username,password,email,street_number,street_name,city,zipcode,phone_number, userInput]);
        res.json(updatedUser);
        console.log(updatedUser); 
    }
    
  });


  // app.patch('/updateinfo:username', async (req, res) => { 
//   const userInput = req.params.username;
//   const {username,password,email,street_number,street_name,city,zipcode,phone_number,} = req.body;
//   let updatedUser = await db.query(`UPDATE updatelogin SET username = $1, password = $2,email = $3,street_number = $4, street_name = $5, city = $6, zipcode = $7, phone_number =$8 WHERE username =$9 RETURNING *`,[username,password,email,street_number,street_name,city,zipcode,phone_number, userInput]);
//       res.json(updatedUser);
//       console.log(updatedUser);  
// });

  