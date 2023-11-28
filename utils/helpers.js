const format_timestamp = (date) => {
    let timeStamp = new Date(date);
    let hour = timeStamp.getHours();
    let minutes = timeStamp.getMinutes();
    let meridien = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12
    return `${hour}:${minutes} ${meridien}`
};

const format_date = (date) => {
    // Format date as  Mo DD, YYYY hh:mm A format.
    let timeStamp = new Date(date);
    let monthData = timeStamp.getMonth();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = months[monthData];
    let day = timeStamp.getDate();
    let year = timeStamp.getFullYear();

    const time = format_timestamp(timeStamp)
    return `${month} ${day} ${year} ${time}`
};

module.exports = { format_timestamp, format_date };