import Mongoose, {Schema, Model, Document, connect, model} from "mongoose";
import path from "path";
import env from "dotenv";


env.config(
    {
        path: path.resolve(__dirname,'env.env')
    }
)


// user
// network
// poistion

const userSchema =new Schema(
    {
        name: {
              type: String,
              required: true
        } ,
        email: {
              type: String,
              required: true
        }
    }
);
const networkSchema = new Schema(
    {
         name: {
              type: String,
              required: true
         },
         users: [{
            type: Schema.Types.ObjectId, ref: 'User'
         }],
         pushedOn: {
              type: Date,
              required: false,
              default: new Date().toLocaleString()
         }  
    }
)

const positionSchema = new Schema(
    {
        lat: {
              type: Number,
              required: true
        },
        long: {
              type: Number,
              required: true
        },
        user: {
              type: Schema.Types.ObjectId, ref: 'User'
        }
    }
);

const userModel = model('User',userSchema)
const positionModel = model<typeof positionSchema>('Position',positionSchema);
const networkModel = model<typeof networkSchema>('network',networkSchema)



async function connectToDStabase() {
       
        try {
            await connect(process.env.DATABASE_URL as string);
        } catch (error: any) {
             console.log(error.message)
        }
}

// user id : '66b0f3d95221ec717d3e029d'
// network id: '66b0f4d784f9b928de712598'

connectToDStabase()
Mongoose.connection.once('open',async () => {

      
      console.log('connected to database');

      const network = await networkModel.findById('66b0f4d784f9b928de712598').populate({path: 'users',justOne: false,}).exec();
      if(!network) throw new Error('no network found');

      const copy = JSON.parse(JSON.stringify(network));
       
      for (let i = 0 ; i < copy.users.length ; i++){
            
           const userID = copy.users[i]._id;

           copy.users[i] = {credentials: copy.users[i], geoPosition: await getPosition(userID)};
      }
      console.log(copy.users)
})
      



export async function getPosition(userID: string): Promise<Object | null>{
                
                  try {
                       const position = await positionModel.findOne({user: userID}).select('lat long').exec();
                       if ( !position ) throw new Error('position not found for user');
                       return position // return position of User

                  } catch (error) {
                       // mongoose dabatabase error
                       return null
                  }
}
