import dotenv from 'dotenv';
dotenv.config();

const config = {
    resolve: {
      fallback: {
        "path": false,
        "os": false,
        "crypto": false
      },
    },
    env: {
        MDB_URL: process.env.MDB_URL,
        TOKEN_SECRET: process.env.TOKEN_SECRET,
        COHERE_KEY: process.env.COHERE_KEY
    }
  };
  
  export default config;
  