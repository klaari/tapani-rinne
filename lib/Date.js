/*
 * Get a three letter month string from an integer.
 */

function getMonthStringFromInt(int) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "Novevember",
        "December",
    ];

    return months[int];
}

/*
 * Add a leading zero to a single integer.
 */
function addLeadingZero(num) {
    num = num.toString();
    while (num.length < 2) num = "0" + num;
    return num;
}

/*
 * Format a post published date for a datetime
 * HTML element.
 */
export function formatPublishedDateForDateTime(dateString) {
    const timestamp = Date.parse(dateString);
    const date = new Date(timestamp);
    return `${date.getFullYear()}-${addLeadingZero(
        date.getMonth() + 1
    )}-${date.getDate()}`;
}

/*
 * Format a post published date for a human to read.
 * Output is e.g. 16 Feb 2020
 */
export function formatPublishedDateForDisplay(dateString) {
    const timestamp = Date.parse(dateString);
    const date = new Date(timestamp);
    return `${addLeadingZero(date.getDate())}.${addLeadingZero(
        date.getMonth() + 1
    )}`;
}

export function differenceInDays(startDateString, endDateString = null) {
    const timestamp = Date.parse(startDateString);
    const startDate = new Date(timestamp);

    const endDate = endDateString
        ? new Date(Date.parse(endDateString))
        : new Date();

    const diffInMs = endDate - new Date(startDate);
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    return Math.floor(diffInDays);
}
