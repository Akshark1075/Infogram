export default function getExp(startDate){
    var timeDiff= new Date().getTime()-new Date(startDate).getTime()
    var days= timeDiff/ (1000 * 3600 * 24 )
    var totalMonths=Math.round(days/30.417)
    const months = totalMonths % 12
    const year = Math.floor(totalMonths / 12)
     let mos=months===1?"mo":"mos"
     let yrs=year===1?"yr ":"yrs "  
     return year+yrs+months+mos
}