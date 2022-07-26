import connectMongo from '../../../utils/connectMongo'
import Test from '../../../models/testModels'

export default async function getAllUser(req, res) {
    console.log('CONNECTING TO MONGO............')
    await connectMongo()
    console.log('CONNECT TO MONGO............')
    
    const test = await Test.find()
    console.log('FIND DOCUMENT............')

    res.json({test})
  }