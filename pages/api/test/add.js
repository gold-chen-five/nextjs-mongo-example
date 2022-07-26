import connectMongo from '../../../utils/connectMongo'
import Test from '../../../models/testModels'
export default async function addTest(req, res) {
    const { name,email } = req.body

    console.log('CONNECTING TO MONGO............')

    await connectMongo()
    console.log('CONNECT TO MONGO............')
    
    const test = await Test.create(req.body)
    console.log('CREATEING DOCUMENT............')

    res.json({test})
  }
  