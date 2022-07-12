import ErrorResponse from '../utils/errorhandler.js'
import BootcampSchema from '../models/Bootcamp.js'
//@desc     all bootcamps
//@route   Get /api/v1/bootcamps

export const getBootcamps = async (req,res,next) => {
    const {id} = req.params
    try{
        const bootcamp = await BootcampSchema.find()
        res.status(200).json({success: true, count: bootcamp.length, data: bootcamp})
        }
        catch(err){
            next(err)
        }
   
}


//@desc     create bootcamps
//@route   Post /api/v1/bootcamps

export const createBootcamps = async (req,res,next) => {
    
    try{
    const bootcamp = await BootcampSchema.create(req.body)
    res.status(201).json({success: true,  data: bootcamp})
    }
    catch(err){
       next(err)
    }
    }


 //@desc     get bootcamp by id
//@route    Get /api/v1/bootcamps/:id

export const getBootcampsbyId = async (req,res,next) => {
    const {id} = req.params
    try{
        const bootcamp = await BootcampSchema.findById(id)
        if(!bootcamp){
            next(new ErrorResponse(`Bootcamp is not found id of ${id}`, 404))
        }
        res.status(200).json({success: true, data: bootcamp})
        }
        catch (err) {
            next(err)
            // next(new ErrorResponse(`Bootcamp is not found id of ${id}`, 404))
            // res.status(400).json({success: false, msg: 'No user found' }) without error you can pass
        }
   
}

 //@desc     update bootcamps
//@route   Put /api/v1/bootcamps/:id

export const updatedBootcamps = async (req,res) => {
    try{
    const {params, body} = req

    
        const bootcamp = await BootcampSchema.findByIdAndUpdate(params.id, body, {
            new: true,
            runValidators:true
        })
        if(!bootcamp){
          return  res.status(400).json({ success: false, msg: `User not updated`})
        }
        res.status(200).json({ success: true, data: bootcamp})
    }
    catch (err){
    
        //   res.status(400).json({ success: false, msg: `User not updated`})
        next(err)
    }
    
}


//@desc     delete bootcamps
//@route   Dlete /api/v1/bootcamps/:id

export const deleteBootcamps = async (req,res) => {
    try{
        const { id } = req.params
    
        
            const bootcamp = await BootcampSchema.findByIdAndDelete(id)
            if(!bootcamp){
              return  res.status(400).json({ success: false, msg: `User not updated`})
            }
            res.status(200).json({ success: true, data: {}})
        }
        catch (err){
        next(err)
        }
// res.status(200).json({ success: true, msg:`deleted bootcamps ${req.params.id} `})
}