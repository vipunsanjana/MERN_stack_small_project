
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';


function Home() {
    let date = new Date().getFullYear();
    

    const typedTextRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: ["This is Our Web Site...","Software Engineering...","...Uiversity of Kelaniya...","...Developed by Vipun Sanjana"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
        };

        const typed = new Typed(typedTextRef.current, options);

        return () => {
            typed.destroy();
        };
    }, []);


    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <main className="main-container">
            <div className="main-title">
                <h3>ADMIN DASHBOARD <span style={{marginInlineStart:"200px"}} ref={typedTextRef}></span></h3>
            </div>
            <div className="main-cards">
                <div className="card">
                    <div className="card-inner">
                        <h3>PRODUCTS</h3>
                        <BsFillArchiveFill className="card-icon" />
                    </div>
                    <h1>250</h1>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <h3>CATEGORIES</h3>
                        <BsFillGrid3X3GapFill className="card-icon" />
                    </div>
                    <h1>85</h1>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <h3>CUSTOMERS</h3>
                        <BsPeopleFill className="card-icon" />
                    </div>
                    <h1>1000</h1>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <h3>ALERTS</h3>
                        <BsFillBellFill className="card-icon" />
                    </div>
                    <h1>400</h1>
                </div>
            </div>
            <div className="charts">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
                
            </div>
            &copy; Developerd by Vipun Sanjana for beter web {date}
        </main>
    )
}

export default Home