const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const number = 1000

export const getDay = (timeStamp) => {
    const tSDetail = new Date(timeStamp * number);
    const day = tSDetail.getDay()
    return days[day]
}

export const getDate = (timeStamp) => {
    const tSDetail = new Date(timeStamp * number);
    const date = tSDetail.getDate()
    const month = tSDetail.getMonth() + 1
    const year = tSDetail.getFullYear()
    return `${date}/${month}/${year}`
}

export const getTime = (timeStamp) => {
    const date = new Date(timeStamp * number);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}
