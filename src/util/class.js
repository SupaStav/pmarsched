class Day {
    day;
    starttime;
    endtime;
    location;
}

class Class
{
    id;
    description;
    credits;
    instructors = [];
    schedule = [];
    location;

    setSchedule(d,s,e,l)
    {
        a = new Day;
        a.day = d;
        a.starttime = s;
        a.endtime = e;
        a.location = l;

        this.schedule.push(a);
    }
}

export default Class;