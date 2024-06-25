import mysql from "mysql2";
import dbConfig from "../config/dbConfig";

const connection = mysql.createPool({
   host: dbConfig.webHost,
   user: dbConfig.mySQLuser,
   database: dbConfig.mySQLdb,
   password: dbConfig.mySQLpassword
});

export const execute = async(sql: string): Promise<any>=>{
   return new Promise<any>((resolve, reject):any => {
      connection.query(sql, (err: any, result: any)=>{
         if(err){
            reject(err)
            return;
         }
            resolve(result);
         
   })
   })
}

export default{
   execute
}