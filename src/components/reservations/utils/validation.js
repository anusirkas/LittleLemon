export const validateDate = (date) => {
    if (!date) return false; // If the date is empty or undefined, return false (invalid)
    const parsedDate = new Date(date); // Convert the date to a Date object
    return !isNaN(parsedDate) && parsedDate > new Date(); // Check if it's a valid date and if it is in the future
};

export const validateNumberOfGuests = (guests) => {
    return guests >= 1 && guests <= 10;
};
