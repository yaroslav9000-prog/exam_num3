import mysql from "mysql2";
class dbConfig{
    public webPort = 3500;
    public webHost = 'localhost';
    public mySQLhost = 'localhost';
    public mySQLuser = 'root';
    public mySQLpassword = '12345678';
    public mySQLdb = 'exam_num3';
    
}

const databaseConfig = new dbConfig();
export default databaseConfig;