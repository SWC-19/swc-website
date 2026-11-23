// Stanley Wrestling Club practice schedule.
// The homepage calendar, its "Next practice" card and the club TV (/tv) all read this file,
// so practice days and times are changed here, in one place.
window.SWC=(function(){
  var practice={11:[9,10,12,16,17,19,23,24,30],12:[1,7,8,14,15,17,21,22,28]};
  function mtwth(y,m,from){var r=[],n=new Date(y,m+1,0).getDate();for(var d=from;d<=n;d++){var w=new Date(y,m,d).getDay();if(w===1||w===2||w===4)r.push(d)}return r}
  // Days off: remove a day with .filter, e.g. Jan 7 (varsity dual night) below.
  var PRACTICE={'2026-10':practice[11],'2026-11':practice[12],'2027-0':mtwth(2027,0,5).filter(function(d){return d!==7}),'2027-1':mtwth(2027,1,1),'2027-2':mtwth(2027,2,1)};
  var SCHED={'2026-10':[['Practice','Mon, Tue, Thu · 4:00–5:15 PM · 104 S Main St']],'2026-11':[['Practice','Mon, Tue, Thu · 4:00–5:30 PM · 104 S Main St']],
    '2027-0':[['Advanced girls','Mon, Tue, Thu · 4:00–5:30 PM'],['Advanced boys','Mon, Tue, Thu · 5:30–7:00 PM']],
    '2027-1':[['Feb 1–4','Same as January: girls 4:00–5:30 PM, boys 5:30–7:00 PM'],['Beginners','Tue, Thu · 4:00–4:45 PM (starts Feb 9)'],['Advanced girls','From Feb 8: Mon 4:00–5:30 PM · Tue, Thu 4:45–6:00 PM'],['Advanced boys','From Feb 8: Mon 5:30–7:00 PM · Tue, Thu 6:00–7:15 PM']],
    '2027-2':[['Beginners','Tue, Thu · 4:00–4:45 PM'],['Advanced girls','Mon 4:00–5:30 PM · Tue, Thu 4:45–6:00 PM'],['Advanced boys','Mon 5:30–7:00 PM · Tue, Thu 6:00–7:15 PM']]};
  // Mon/Tue/Thu during the season with no practice. The club TV shows these as "No practice" with the reason.
  // Key: 'year-month-day' with month numbered from 0 (Nov = 10, Dec = 11, Jan = 0). Use '' when there is no reason to show.
  var OFF={'2026-10-26':'Thanksgiving','2026-11-3':'Varsity dual night','2026-11-10':'Varsity dual night','2026-11-24':'Christmas Eve','2026-11-29':'','2026-11-31':'Rumble on Red','2027-0-7':'Varsity dual & senior night'};
  // The groups and times for one practice day (y, m = month number minus 1, d): [[label, start, end], ...]
  function times(y,m,d){
    if(y===2026)return [['Practice','4:00',m===11?'5:30':'5:15']];
    var w=new Date(y,m,d).getDay();
    if(m===0||w===1||(m===1&&d<5))return [['Girls','4:00','5:30'],['Boys','5:30','7:00']];
    return [['Beginners','4:00','4:45'],['Girls','4:45','6:00'],['Boys','6:00','7:15']];
  }
  return {PRACTICE:PRACTICE,SCHED:SCHED,OFF:OFF,times:times};
})();
