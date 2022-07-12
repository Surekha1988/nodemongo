import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

// route files

import routes from './Routes/bootcamps.js'
import logger from './Middleware/logger.js'

import connectdb from './config/db.js'

import {errorHandling} from './Middleware/error.js'

//Load env vars
dotenv.config({ path:"./config/config.env" });

const app = express();

// body-parser

app.use(express.json())

connectdb()

app.use(logger)

app.use('/api/v1/bootcamps', routes)

app.use(errorHandling)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on this ${PORT}`.cyan.underline.bold));
