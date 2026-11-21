import { useEffect, useState } from "react";

function Studentpage() {

    const [students, setStudents] = useState([]);

    useEffect(() => {

        fetch("http://127.0.0.1:8000/api/students/")
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.log(error));

    }, []);

    return (
        <div>
            <h1>Student Management System</h1>

            <h2>Student List</h2>

            {students.map(student => (
                <div key={student.id}>
                    <h3>{student.name}</h3>
                    <p>{student.course}</p>
                </div>
            ))}

        </div>
    );
}

export default Studentpage;



// import { useEffect, useState } from "react";

// function Studentpage() {
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/students/")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("API request failed");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("API DATA:", data);
//         setStudents(data);
//       })
//       .catch((error) => {
//         console.error("Fetch Error:", error);
//         setError(error.message);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <div>
//       <h1>Student Management System</h1>

//       {loading && <p>Loading...</p>}

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {students.map((student) => (
//         <div key={student.id}>
//           <h3>{student.name}</h3>
//           <p>{student.course}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Studentpage;
