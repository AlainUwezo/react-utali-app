export const FormatEventDate = (eventDate: Date)=>{
    const date = eventDate.getDate()
    const month = eventDate.getMonth() + 1
    const year = eventDate.getFullYear()

    const hour = eventDate.getHours();
    const minutes = eventDate.getMinutes()

    return `${date}/${month}/${year} ${hour}h:${minutes}min`
    
}