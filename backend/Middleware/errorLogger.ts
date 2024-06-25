import fs from "fs";
import express, {Response, Request, NextFunction} from "express";
import path from "path";

const fsPromises = fs.promises;

const logEvents = async (logItem: string, logFile: any) =>{
    if(fs.existsSync(path.join(__dirname, '..','logs'))){
        fsPromises.appendFile(path.join(__dirname, "..", "logs", logFile), logItem)
    }else{
        fsPromises.mkdir(path.join(__dirname, "..", 'logs'));
        fsPromises.appendFile(path.join(__dirname, "..", "logs"), logItem);
    }
}
const requestLogger = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const logItem = `${req.url}, ${req.method}, ${req.originalUrl}, ${req.route}, ${new Date}, \n`
        await logEvents(logItem, "requests.txt");
        console.log("Request was made");
    }catch(err){
        console.log(err);
    }
    next();
}


export{
    requestLogger
}