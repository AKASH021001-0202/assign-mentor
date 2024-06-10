import mongoose from "mongoose";
const dbName ="assign-mentor";

const  dnUserName = "nakashn007";

const  dbPassword = "fYnVb2BelJcAggC0";
const dbCluster = "cluster0.ppqlls3.mongodb.net";

/* // const localUri =`mongodb://${dbCluster}/${dbName}`; */
const cloudUri =`mongodb+srv://${dnUserName}:${dbPassword}@${dbCluster}/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;
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