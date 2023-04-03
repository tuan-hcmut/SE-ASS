import mongoose from "mongoose";

interface UserAttribute {
  id: string;
  email: string;
  fullName: string;
  photo?: string;
  role?: string;
}

interface UserDoc extends mongoose.Document {
  id: string;
  email: string;
  fullName: string;
  photo?: string;
  role: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attribute: UserAttribute): UserDoc;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
    fullName: {
      type: String,
      require: true,
    },

    photo: {
      type: String,
      require: true,
      default: "640f3f4a676e2fa7c7bfb3c0/user-default/logo.png",
    },

    role: {
      type: String,
      enum: ["BackOfficer", "Janitor", "Collector", null],
      default: null,
    },
  },
  {
    toJSON: {
      transform(doc: any, ret: any) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

/////// create new method  //////////
userSchema.statics.build = (attribute: UserAttribute) => {
  return new User({
    _id: attribute.id,
    fullName: attribute.fullName,
    role: attribute.role,
    email: attribute.email,
    photo: attribute.photo,
  });
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
