function formatTimestamp(timestamp) {
    const date = new Date(timestamp);

    // Extract date components
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = String(date.getFullYear()).slice(-2); // Get last two digits of year

    // Extract time components
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 24-hour time to 12-hour format

    return `${day}/${month}/${year} ${hours}:${minutes} ${amPm}`;
}

const apiUrl = 'http://908e-167-103-119-81.ngrok-free.app/api';

export {
    formatTimestamp,
    apiUrl
}