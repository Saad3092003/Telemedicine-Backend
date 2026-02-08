import express from "express";
import {
  loginDoctor,
  appointmentsDoctor,
  appointmentCancel,
  doctorList,
  changeAvailablity,
  appointmentComplete,
  doctorDashboard,
  doctorProfile,
  updateDoctorProfile,
  submitDoctorKYC,
} from "../controllers/doctorController.js";
import authDoctor from "../middleware/authDoctor.js";
import upload from "../middleware/multer.js";
const doctorRouter = express.Router();

doctorRouter.post("/login", loginDoctor);
doctorRouter.post("/cancel-appointment", authDoctor, appointmentCancel);
doctorRouter.get("/appointments", authDoctor, appointmentsDoctor);
doctorRouter.get("/list", doctorList);
doctorRouter.post("/change-availability", authDoctor, changeAvailablity);
doctorRouter.post("/complete-appointment", authDoctor, appointmentComplete);
doctorRouter.get("/dashboard", authDoctor, doctorDashboard);
doctorRouter.get("/profile", authDoctor, doctorProfile);
doctorRouter.post("/update-profile", authDoctor, updateDoctorProfile);
doctorRouter.post(
  "/signup",
  upload.fields([
    { name: "mbbsCertificate", maxCount: 1 },
    { name: "registrationCertificate", maxCount: 1 },
    { name: "profileFile", maxCount: 1 },
  ]),
  submitDoctorKYC,
);

export default doctorRouter;
