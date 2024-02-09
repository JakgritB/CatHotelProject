import mongoose, { model, Schema } from "mongoose";

const PetSchema = new Schema({
    code: {
        type: String,
    },
  name: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User", //พิเศษ
    default: null,
  },
  breed: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["MALE", "FE", "PENDING"],
    default: "MALE",
  },
  color: {
    type: String,
  },
  age: {
    type: Number,
    default: 1
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Pet = model.Pet || model("Pet", PetSchema, 'pet');

export default Pet

// export default mongoose?.models?.PetSchema || mongoose.model("Pet", PetSchema)