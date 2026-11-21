import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
export default function Header() {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/menus/")
            .then((res) => res.json())
            .then((menus) => { setMenu(menus) })
            .catch((me) => { console.log('menus not loading', me) })
    }, [])
    const myContainer = {
        padding: "20px 60px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    }

    return (
        <div style={myContainer} className='mymneus'>
            <div className="logo">
                Mynav
            </div>
            <div className="menus ">
                <ul>
                    {
                        menu.map((mi) =>
                            <li key={mi.mitem}> <Link to={mi.navelink}>  {mi.mname}  </Link> </li>
                        )
                    }

                </ul>
            </div>
        </div>
    )
}


