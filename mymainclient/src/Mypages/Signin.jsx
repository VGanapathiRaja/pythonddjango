import React, { useState } from "react";
import '../App.css'
import API from "../Api";
export default function Signin() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        profilefiles: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword || !formData.profilefiles) {
            alert("Please fill all data !")
        }
        else if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        else {
            console.log(formData);
            alert("Registration Successful!");
            setFormData({
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                profilefiles: ""
            });
        }

        try {
            console.log(API)
            await API.post('Signin', formData);
            alert("Data sended to backend and db ..!")
        }
        catch (e) {
            console.log(e, "data not sent backend ")
            alert("data not save in db and backend ")
        }



    };
    return (
        <section>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h2>Sign Up Form</h2>

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="file"
                        name="profilefiles"
                        placeholder="Profile Image"
                        value={formData.profilefiles}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Register</button>

                    <p>Already have an account? Login</p>
                </form>
            </div>
        </section>
    )
}



// import React, { useState } from "react";
// import "../App.css";
// import API from "../Api";

// export default function Signin() {

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//         profilefiles: null
//     });

//     const handleChange = (e) => {

//         const { name, value, files, type } = e.target;

//         setFormData({
//             ...formData,
//             [name]: type === "file" ? files[0] : value
//         });
//     };

//     const handleSubmit = async (e) => {

//         e.preventDefault();

//         if (
//             !formData.name ||
//             !formData.email ||
//             !formData.password ||
//             !formData.confirmPassword
//         ) {
//             alert("Please fill all required fields!");
//             return;
//         }

//         if (formData.password !== formData.confirmPassword) {
//             alert("Passwords do not match!");
//             return;
//         }

//         try {

//             const data = new FormData();

//             data.append("name", formData.name);
//             data.append("email", formData.email);
//             data.append("password", formData.password);
//             data.append("confirmPassword", formData.confirmPassword);

//             if (formData.profilefiles) {
//                 data.append("profilefiles", formData.profilefiles);
//             }

//             const response = await API.post("signin/", data);

//             alert(response.data.message);

//             setFormData({
//                 name: "",
//                 email: "",
//                 password: "",
//                 confirmPassword: "",
//                 profilefiles: null
//             });

//             e.target.reset();

//         }
//         catch (error) {

//             console.log(error.response?.data || error.message);

//             const errors = error.response?.data;

//             console(
//                 errors
//                     ? JSON.stringify(errors)
//                     : "Registration failed. Please try again."
//             );
//             alert("data not sended ")
//         }
//     };

//     return (

//         <section>
//             <div className="container">

//                 <form onSubmit={handleSubmit} encType="multipart/form-data">

//                     <h2>Sign Up Form</h2>

//                     <input
//                         type="text"
//                         name="name"
//                         placeholder="Enter Your Name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                     />

//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Enter Your Email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                     />

//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Enter Password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                     />

//                     <input
//                         type="password"
//                         name="confirmPassword"
//                         placeholder="Confirm Password"
//                         value={formData.confirmPassword}
//                         onChange={handleChange}
//                         required
//                     />

//                     <input
//                         type="file"
//                         name="profilefiles"
//                         accept="image/*"
//                         onChange={handleChange}
//                     />

//                     <button type="submit">
//                         Register
//                     </button>

//                     <p>Already have an account? Login</p>

//                 </form>
//             </div>
//         </section>
//     );
// }




// import React, { useState } from "react";
// import API from "../Api";

// export default function Register() {

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         mobile: "",
//         password: ""
//     });

//     const handleChange = (e) => {

//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });

//     };

//     const handleSubmit = async (e) => {

//         e.preventDefault();

//         try {

//             const response = await API.post(
//                 "register/",
//                 formData
//             );

//             alert(response.data.message);

//             setFormData({
//                 name: "",
//                 email: "",
//                 mobile: "",
//                 password: ""
//             });

//         }
//         catch (error) {

//             console.log(error.response?.data);

//             alert(
//                 JSON.stringify(error.response?.data ||
//                 "Registration failed")
//             );

//         }

//     };

//     return (

//         <div className="container">

//             <h2>Registration Form</h2>

//             <form onSubmit={handleSubmit}>

//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Enter Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                 />

//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                 />

//                 <input
//                     type="tel"
//                     name="mobile"
//                     placeholder="Enter Mobile Number"
//                     value={formData.mobile}
//                     onChange={handleChange}
//                     required
//                 />

//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Enter Password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                 />

//                 <button type="submit">
//                     Register
//                 </button>

//             </form>

//         </div>

//     );

// }
