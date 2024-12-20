const Appointment = require('../models/Appointment');

const {Department, Availability} = require('../models/Department');
const User  = require('../models/User');
const Hospital = require('../models/Hospital');
exports.bookAppointment =  async (req,res)=>{

    try{

        const {patientId,hospitalName,state,district,departmentName,date} = req.body;
        console.log(patientId,hospitalName,state,district,departmentName,date);
        
        const patientData = await User.findById({_id:patientId});
        const hospitalData = await Hospital.findOne({Hospital_Name:hospitalName,State:state,District:district});
       
        const hospitalid = hospitalData._id.toHexString();
        // console.log(typeof hospitalid);
        const departmentData = await Department.findOne({name:departmentName,HospitalId:hospitalid});

        const checkAppointment = await Appointment.findOne({
                patient:patientData._id,
                hospital:hospitalData._id,
                department:departmentData._id,
                date:date,
                status:"Scheduled"
            });

            if(checkAppointment)
            {
                return res.status(400).json({
                    success:false,
                    message:"You have already booked this appointment"
                })
            }
        let documentIndex = 0;
        let appointmentLeft = 0;
        const appointmentDate = departmentData.Availability.forEach((availability,index)=>{
            const appointmentDate = new Date(availability.DOA);     //2024-09-01" -> September 1, 2024.
            const dateFromInput = new Date(date);
            if (
              appointmentDate.getDate() == dateFromInput.getDate() &&
              appointmentDate.getMonth() == dateFromInput.getMonth() &&
              appointmentDate.getFullYear() == dateFromInput.getFullYear()
            )
            {
                documentIndex = index;
                appointmentLeft = availability.appointmentsLeft;
            }
        })
        console.log("index:",documentIndex);
        departmentData.Availability[documentIndex].appointmentsLeft = appointmentLeft - 1;
        await departmentData.save();
        const newAppointment = await Appointment.create({
            patient:patientData._id,
            hospital:hospitalData._id,
            department:departmentData._id,
            date:date,
            status:"Scheduled"
        });

        const title = `Appointment Confirmation Mail`;
        const body = `Congratulations, ${patientData.name} <br> <p>Your Appointment with ${departmentData.name} at ${hospitalData.Hospital_Name} has been successfully scheduled</p>`
      
        return res.status(200).json({
            success:true,
            message:"Email Send Successfully"
        });
        

    }catch(err)
    {
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Unable to Book Appointment, Try again after some time"
        })
    }
}