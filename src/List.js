import React, {useEffect, useState } from 'react'

function List(props) {
    const [user, setUser] = useState([]);
             
    useEffect(() => {
            fetch('https://api.spaceXdata.com/v3/launches?limit=100').then((data) => {
                data.json().then((result) => {
                    console.warn('result', result)
                    setUser(result)
                })
            })
        },[])
                
    return (
        <div className="List">
            
                {
                   user.map((item, index) =>
                    
                        <div className='smallBox' key={index}>
                            <img src={item.links.mission_patch_small} alt="not visible" />
                            <div className="missionName">{item.mission_name} #{index}</div>
                            <div>Mission Ids : {item.flight_number}</div>
                            <div>Launch Year : {item.launch_year}</div>
                            <div>Successful Launch : {item.launch_success ? "true":"false"}</div>
                            <div>Successful Landing : {item.land_success ? "true":"false"}</div>

                        </div>
                    
                    )
                }
            
        </div>
    );
}

export default List;
