const getBookedAppointment = () => {
    const bookedLawyerSTR = localStorage.getItem("bookedList");
    if (bookedLawyerSTR) {
        return JSON.parse(bookedLawyerSTR);
    }
    else {
        return [];
    }
};

const addToBookedDB = (id) => {
    const bookedLawyerData = getBookedAppointment();
    const stringId = String(id);

    if (bookedLawyerData.includes(stringId)) {
        return false;

    } else {
        bookedLawyerData.push(stringId);
        localStorage.setItem("bookedList", JSON.stringify(bookedLawyerData));
        return true;
    }
};

const removeBookedDB = (id) => {
    const bookedLawyerData = getBookedAppointment();
    const stringId = String(id);
    const updated = bookedLawyerData.filter(item => item !== stringId);
    localStorage.setItem("bookedList", JSON.stringify(updated));
};

export { addToBookedDB, getBookedAppointment, removeBookedDB };

