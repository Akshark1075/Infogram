export default function getExp(){
    var timeDiff= new Date().getTime()-new Date("2018-10-08").getTime()
    var days= timeDiff/ (1000 * 3600 * 24 )
    var totalMonths=Math.round(days/30.417)
     var num=Math.round((totalMonths*100)/12)
     var numstr=""+num
     var year=numstr[0]
     
     var months=Math.round(Number(numstr.slice(1))/10 )
     let mos=months===1?"mo":"mos"
     let yrs=year===1?"yr ":"yrs "  
     return year+yrs+months+mos
}