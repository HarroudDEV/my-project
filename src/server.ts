// import Mongoose, {Schema, Model, Document, connect, connection, Connection} from "mongoose";
import env from 'dotenv'
import path from "path"


env.config(
      {
            path: path.join(__dirname, 'env.env')
      }
)
// async function connectToDB(){

//       try {
//             await connect(process.env.DATABASE_URL as string);
//       } catch (error) {
//              console.log(error)
//       }

      
// }

// connectToDB();


// Mongoose.connection.once('open',async () => {
      
//       const collections = await Mongoose.connection.db.listCollections().toArray()
//       console.log(collections)
//       // collections.forEach(
//       //       async (e) => {
//       //                try {
//       //                      await Mongoose.connection.db.dropCollection(e.name)
//       //                } catch (error: any) {
//       //                     console.log(error.message)
//       //                }
//       //       }
//       // )

// })

// import crone from 'node-cron';

// console.log(new Date().getHours())
// crone.schedule('58 17 04 08 *',function(){
//       console.log('script running')
// },
// {
//       name: 'test-crone',
//       timezone: 'Africa/Casablanca'
// })
// console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)

import redis,{createClient} from "redis";





// async function connectToRedis(){

//          try {
//              const cache = await createClient();
//              await cache.connect();
//              const ts = await cache.keys('*');
//              console.log(ts)
//          } catch (error: any) {
//              console.log(error.message)
//          } 
// }
// connectToRedis()

function canBeEqual(target: number[], arr: number[]): boolean {
     
    for(let i = 0 ; i < arr.length ; i++) {
               
          const current = arr[i];
          // find if it has
          if(target.includes(current)){
               const idx = target.findIndex(e => e === current);
               target.splice(idx,1)
          }
    }
    
   return target.length == 0
};

// console.log(canBeEqual([7],[7]))

// const obj = {name: "omar"}
// const handler = {
      
//     get(target: any, prop: any, receiver: any){
//            console.log(target, prop, receiver)
//     },
//     root(target: any, prop: any, receiver: any){
//               return target[prop]
//     }
// }
// const prox = new Proxy(obj,handler);
// console.log(prox.root())






function isValid(word: string): boolean {
    
    if(word.length < 3) return false
    const vowels = ['a','e','i','o','u'];
    const num = word.split('').every( e => isNaN(parseInt(e)) === false || (e.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)) >= 0);
    const s1 = word.split('').some( e => vowels.includes(e.toLowerCase())); 
    const s2 = word.split('').some( e => !vowels.includes(e.toLowerCase()) && (e.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) > 0)); 
    console.log(num,s1,s2)
    return true
};

console.log(isValid("234Adas"))

// console.log(['1','2','$'].every(e => isNaN(Number(e)) === false))