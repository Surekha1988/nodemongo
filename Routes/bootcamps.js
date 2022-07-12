
import express from 'express';
const routes = express.Router();

import { 
    getBootcamps, 
    createBootcamps, 
    getBootcampsbyId,
    updatedBootcamps, 
    deleteBootcamps
} from '../controllers/bootcamps.js'


// routes.get('/',(req,res) => {
//     // res.send("<h1>Hello from express</h1>")  to saw in postman
//     // res.sendStatus(400); it shows the bad request in postman
//     res.status(200).json({ success: true, msg: "show all bootcamps"})
// })

// routes.post('/', (req,res) => {
//     res.status(201).json({ success: true, msg:"new bootcamps is created"})
// })

// routes.put('/:id', (req,res) => {
//     res.status(200).json({ success: true, msg: ` updated bootcamps ${req.params.id}`})
// })

// routes.delete('/:id', (req,res) => {
//     res.status(200).json({ success: true, msg:`deleted bootcamps ${req.params.id} `})
// })


routes.route('/')
        .get(getBootcamps)
        .post(createBootcamps);

routes.route('/:id')
      .get(getBootcampsbyId)  
      .put(updatedBootcamps)
      .delete(deleteBootcamps);   

export default routes