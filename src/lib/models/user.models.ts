// models/User.ts
import mongoose, { Schema, Document, Model } from 'mongoose';
export interface IUser extends Document {
  name: string;
  email: string;
}

const UserSchema: Schema = new Schema({
  clerkId:{type:String,required:true,unique:true},
  email:{type:String,required:true,unique:true}
});

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
