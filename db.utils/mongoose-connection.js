import mongoose from "mongoose";
const dbName ="nodedb";
const dbCluster = "127.0.0.1:27017";

const localUri =`mongodb://${dbCluster}/${dbName}`;
const mongooseDb = async () => {
    try{
        await mongoose.connect(localUri);
        console.log("mongodb:connect success")
    }
    catch(err){
        console.log("mongodb:connect failed");
        process.exit(1);
    }
}

export default mongooseDb;