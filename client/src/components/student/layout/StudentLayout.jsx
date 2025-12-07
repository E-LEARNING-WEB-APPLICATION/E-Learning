import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../footer/Footer";
import StudentNavbar from "../navbar/StudentNavbar";

const StudentLayout = () => {
<<<<<<< HEAD
    return (
        <div>
            <StudentNavbar />
            <main className='container-fluid mt-0'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
=======
  return (
    <div>
      <StudentNavbar />
      <main className="container-fluid mt-0 p-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
>>>>>>> b221a4485fee0590874f6684ad0bbe75e6cebca4

export default StudentLayout;
