import mongoose from "mongoose";
const dbName ="nodedb";

const  dnUserName = "nakashn007";

const  dbPassword = "fYnVb2BelJcAggC0";
const dbCluster = "127.0.0.1:27017";

/* // const localUri =`mongodb://${dbCluster}/${dbName}`; */
const cloudUri =`mongodb+srv://${dnUserName}:${dbPassword}@cluster0.ppqlls3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const mongooseDb = async () => {
    try{
        await mongoose.connect(cloudUri);
        console.log("mongodb:connect success")
    }
    catch(err){
        console.log("mongodb:connect failed");
        process.exit(1);
    }
}

export default mongooseDb;