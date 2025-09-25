import { toast } from "react-toastify";
const getBookedAppointment = () => {
    const bookedLawyerSTR = localStorage.getItem("bookedList");
    if (bookedLawyerSTR) {
        return JSON.parse(bookedLawyerSTR);
    }
    else {
        return [];
    }
};

const addToBookedDB = (id, name) => {
    const bookedLawyerData = getBookedAppointment();
    const stringId = String(id);

    if (bookedLawyerData.includes(stringId)) {
        toast.warning(`You have already booked ${name}!`);
    } else {
        bookedLawyerData.push(stringId);
        localStorage.setItem("bookedList", JSON.stringify(bookedLawyerData));
        toast.success(`Successfully booked ${name}!`);
    }
};

const removeBookedDB = (id, name) => {
    const bookedLawyerData = getBookedAppointment();
    const stringId = String(id);
    const updated = bookedLawyerData.filter(item => item !== stringId);
    localStorage.setItem("bookedList", JSON.stringify(updated));
    toast.info(`Booking removed for ${name}.`);
};

export { addToBookedDB, getBookedAppointment, removeBookedDB };
