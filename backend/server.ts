import express, {Request, Response, NextFunction} from "express";
import { config } from "./config/serverConfig";
import { teamsRouter } from "./routes/teams";
import { requestLogger } from "./Middleware/errorLogger";
import { RouteNotFound } from "./Middleware/ClientsErrors";
import ErrorHandler from "./routes/routeNotFound";
import cors from "cors"
import bodyParser from "body-parser";
const server = express();
//GET api/servers returns to frontend all servers combined with companies names
//POST api/servers/status updates servers status.
let isAdmin = false;

const corsOptions = {
    origin: "*", //allow any origin
    methods: ["GET","POST"], //which methods i will allow
    allowedHeaders: ["Content-Type","Authorization"], //which headers i will get
    exposedHeaders: ["Authorization"] //which headers i will expose
}

const serverCors = {
    origin: "127.0.0.1",
    methods: ["POST"],
    allowedHeaders: ["Content-Type","Authorization"],
    exposedHeaders: ["Authorization"]
}


server.use(cors(corsOptions));

server.use(requestLogger);

server.use(express.json());

server.use(express.static("upload"));


server.use(teamsRouter);




server.get('/', (req: Request, res: Response)=>{
    res.status(200).json({"msg": "i work"});
})
//my api should serve three routes
// get all Authors
// get all books(instead of author id i should get his name)
//add new book(post method).

// server.use("*", ErrorHandler);

server.listen(config.PORT, config.host, ()=>{
    console.log(`Server is up and running on Port ${config.PORT} and host is: ${config.host}`);
})