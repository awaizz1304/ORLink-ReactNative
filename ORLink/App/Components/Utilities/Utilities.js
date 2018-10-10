export const getInitials = (name) =>{
    var initials = name.match(/\b\w/g) || [];
    return initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
}

export const formatDate = (date) => {
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}