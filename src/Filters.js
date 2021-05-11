import React from 'react'
export default function Filters(props) {

    let array = [];
    for (let i = 2006; i <= 2020; i++) {
        console.warn(i);
        array.push(i);
        console.warn(array);
    }
    
    return (
        <div className="Filters">
            <h3 className='heading'>Filters</h3>
            <div>
                <div className='head'>Launch Year</div>
                <hr />
                <div className='buttonYear'>
                    {
                        array.map((year, index) => {
                            return (<button key={index} className="btn">{year}</button>)
                        })
                    }
                </div>

            </div>
            <div>
                <div className='head'>Successful Launch</div>
                <hr />
                <button className="btn launchSuccess" >True</button>
                <button className="btn">False</button>
            </div>

            <div>
                <div className='head'>Successful Landing</div>
                <hr />
                <button className="btn landSuccess">True</button>
                <button className="btn">False</button>
            </div>

        </div>
    )
}