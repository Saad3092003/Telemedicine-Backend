import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  docId: { type: String, required: true },
  slotDate: { type: String, required: true },
  slotTime: { type: String, required: true },
  symptoms: { type: String },
  purpose: { type: String },
  userData: { type: Object, required: true },
  docData: { type: Object, required: true },
  amount: { type: Number, required: true },
  date: { type: Number, required: true },
  cancelled: { type: Boolean, default: false },
  payment: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false },
  // Video call related
  videoRoomId: { type: String, default: null },
  videoStatus: {
    type: String,
    enum: ["not_started", "ongoing", "ended", "completed"],
    default: "not_started",
  },
  videoStartedAt: { type: Number, default: null },
  videoEndedAt: { type: Number, default: null },
  // Prescription details to be filled by doctor after call
  prescription: {
    medicines: { type: [String], default: [] },
    notes: { type: String, default: "" },
    remedies: { type: String, default: "" },
    prescribedAt: { type: Number, default: null },
  },
});

const appointmentModel =
  mongoose.models.appointment ||
  mongoose.model("appointment", appointmentSchema);
export default appointmentModel;
