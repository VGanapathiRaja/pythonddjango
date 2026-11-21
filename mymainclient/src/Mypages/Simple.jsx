import React from 'react'
import { useState } from 'react'
import API from '../Api'
export default function Simple() {
    const [simpledata, setSimpledata] = useState({ uname: "", uemail: "" })
    const handleChange = (e) => {
        setSimpledata({ ...simpledata, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!simpledata.uname || !simpledata.uemail) {
            alert('please fill the data')
        }
        else {
            alert('data savein console')
            console.log(simpledata)
            // localStorage.setItem({ 'fomrdata': simpledata })
            setSimpledata({ uname: "", uemail: "" })
        }
        try {
            await API.post('simpledatasss', simpledata)
            alert("data added in db")
        }
        catch (e) {
            console.log('data not sent ', e)
            alert("data not sent bakcend ")
        }
    }
    return (
        <div style={{ margin: "0 auto", display: "flex", justifyContent: 'center' }}>
            <form onSubmit={handleSubmit}>
                <h2>Simple Page</h2>
                <div className="inputs">
                    <label htmlFor="unaem">Uname</label>
                    <div>
                        <input type="text" name='uname' placeholder='Enter your name' onChange={handleChange} value={simpledata.uname} />
                    </div>
                </div>
                <div className="inputs">
                    <label htmlFor="unaem">Uemai</label>
                    <div>
                        <input type="email" name='uemail' placeholder='Enter your email' onChange={handleChange} value={simpledata.uemail} />
                    </div>
                </div>
                <div className="inputs">
                    <button type='submit'>Simple Submit</button>
                </div>
            </form>
        </div>
    )
}
