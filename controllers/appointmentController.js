import { appointmentModel } from "../model/AppoinmentModel.js";


const bookAppointment = async (req, res) => {
    const { name, email, phone, service, doctor, age } = req.body;
    try {
        if (name && email && phone && service && doctor && age) {
            const newAppointment = await appointmentModel({
                patientName: name,
                email: email,
                phone: phone,
                services: service,
                doctorName: doctor,
                age: age
            })
            newAppointment.save()
            res.send({ "status": "success", "message": "appointment booked !!!!!!!!!", newAppointment })

        } else {
            res.send("all field are required !")
        }
    } catch (error) {
        res.send("something went wrong !")
    }
}

export { bookAppointment };