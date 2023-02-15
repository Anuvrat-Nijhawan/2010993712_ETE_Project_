const express = require('express')
const rtr = express.Router()
//const foo = require('D:/ETE Project/static/Foo.js')

rtr.use(express.urlencoded({ extended: true }));


rtr.get('/', function(request, response) {
	// If the user is loggedin
    const user = request.session.username

	if (request.session.loggedin) {
        // Output username       
        response.render("D:/ETE Project/routes/Rst.ejs",{user});
             
             		
	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}     
})
 
rtr.post('/book', (req, res)=>{
    const name = req.body.name;
    const adrs = req.body.address;
    const date = req.body.date;
   
    console.log(name+" "+adrs+" "+date)    
    if(name && adrs && date){
        console.log('inside if')
        connection.query('insert into bookings values(foo.x, adrs, date)', function(error, results, fields){
            if(error) throw error 
            if(results.length>0){
                console.log("hi")
            }                          
        })
    }
        
})

module.exports = rtr
