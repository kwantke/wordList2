import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import dummy from "../db/data.json"
import useFetch from "../hooks/useFetch";

export interface IDay {
    id: number;
    day: number
}
export default function DayList(){ 
    const url = process.env.REACT_APP_DAYLIST as string
    const days:IDay[] = useFetch(url);

    if(days.length === 0){
        return <span>Loding...</span>
    }
    /*
    const [days, setDays] = useState<IDay[]>([]);
    useEffect(() => {
        fetch('http://localhost:3001/days')
        .then(res =>{
            return res.json()
        })
        .then(data =>{
            setDays(data);
        })
    },[])
    */
    return (
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day} </Link>
                </li>
            ))}
        </ul>    
    )
}