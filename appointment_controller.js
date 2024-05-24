import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Appointment } from "../models/appointmentSchema.js";
import { User } from "../models/userSchema.js";
/**
 * Function to Post Appointment
 @param {object}Request of server
 @param {object}Respond of server of server
 @param {object}Next function
 */
export const postAppointment = catchAsyncErrors(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    appointmentDate,
    department,
    doctorfirstName,
    doctorlastName,
    hasVisited,
    address,
  } = req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !nic ||
    !dob ||
    !gender ||
    !appointmentDate ||
    !department ||
    !doctorfirstName ||
    !doctorlastName ||
    !address
  ) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  const isConflict = await User.find({
    firstName: doctorfirstName,
    lastName: doctorlastName,
    role: "Doctor",
    doctorDepartment: department,
  });
  if (isConflict.length === 0) {
    return next(new ErrorHandler("Doctor not found", 404));
  }

  if (isConflict.length > 1) {
    return next(
      new ErrorHandler(
        "Doctors Conflict! Please Contact Through Email Or Phone!",
        400
      )
    );
  }

  const doctorId = isConflict[0].id;
  const patientId = req.user.id;
  const appointment = await Appointment.create({
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    appointmentDate,
    department,
    doctor: {
      firstName: doctorfirstName,
      lastName: doctorlastName,
    },
    hasVisited,
    address,
    doctorId,
    patientId,
  });
  res.status(200).json({
    success: true,
    appointment,
    message: "Appointment Send!",
  });
});
/**
 * Function to get all appointments
 * @param {Object} "request object"
 * @param {Object} "Respond to object"
 * @param {Object} "Object responds handled"
 */
export const getAllAppointments = catchAsyncErrors(async (req, res, next) => {
  const appointments = await Appointment.find();
  res.status(200).json({
    success: true,
    appointments,
  });
});
/**
 * Function to Update Appointments
 * @param {Object} "request object"
 * @param {Object} "Respond to object"
 * @param {Object} "Object responds handled"
 */
export const updateAppointmentStatus = catchAsyncErrors(
  async (req, res, next) => {
    const { id } = req.params;
    let appointment = await Appointment.findById(id);
    if (!appointment) {
      return next(new ErrorHandler("Appointment not found!", 404));
    }
    appointment = await Appointment.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      message: "Appointment Status Updated!",
    });
  }
);
/**
 * Function to Delete appointments
 * @param {Object} "request object"
 * @param {Object} "Respond to object"
 * @param {Object} "Object responds handled"
 */
export const deleteAppointment = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const appointment = await Appointment.findById(id);
  if (!appointment) {
    return next(new ErrorHandler("Appointment Not Found!", 404));
  }
  await appointment.deleteOne();
  res.status(200).json({
    success: true,
    message: "Appointment Deleted!",
  });
});
