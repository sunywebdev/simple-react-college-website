import { useEffect, useState } from "react";

const LoadData = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setdata(data))
    }, [])

    return [data, setdata]
};

export default LoadData;