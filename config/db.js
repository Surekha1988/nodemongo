import mongoose from 'mongoose'


const connectDb = async() => {
    const connect = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser : true,
    });

    console.log(`MongoDb connected: ${connect.connection.host}`)
}


export default connectDb