import {Platform} from 'react-native';
import * as SQLite from "expo-sqlite";

let db=null;

export const initDatabase= async()=>{

    if(Platform.OS  === "web"){
        console.warn("SQLite no soportado en web");
        return null;
    }

    if(db) return db;

    db=await SQLite.openDatabaseAsync("app.db");

    await db.execAsync(
        `CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
        );
    `);
    return db; 
};

export const registerUser= async(username, password)=>{
    await initDatabase();

    try{
        await db.runAsync(
            "INSERT INTO users (username,password) VALUES (?,?);",
            [username,password]
        );
    } catch(error){
        throw error;
    }
};

export const getUserByCredentials= async(username,password)=>{
    await initDatabase();

    const rows=await db.getAllAsync(
        "SELECT * FROM users WHERE username=? AND password=?;",
        [username,password]
    )
    return rows.length>0 ? rows[0]:null;
};