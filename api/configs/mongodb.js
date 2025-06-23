import mongoose from "mongoose";

//connect to the mongodb database
const connectDB = async()=>{
  mongoose.connection.on('connected', ()=> console.log('Databse connected'))

  await mongoose.connect(`${process.env.MONGODB_URI}/SkillGarden`)
}
export default connectDB