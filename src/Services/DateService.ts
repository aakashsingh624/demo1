export function convertDateString(date: string) {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const tempDate = new Date(date);
    return (
        tempDate.getDate() +
        " " +
        months[tempDate.getMonth()] +
        " " +
        tempDate.getFullYear()
    );
}
