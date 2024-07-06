import React from 'react';
import './EmployeeList.css';

const EmployeeList = ({ employees, loadMore }) => {

    // Array de fondos para los empleados
    const backgrounds = [
        'url(/imgs/bg3.jpg)',
        'url(/imgs/bg2.jpg)',
        'url(/imgs/bg1.jpg)',
    ];

    // Método para obtener la imagen de perfil en función del género
    const getProfileImage = (format) => {
        return format === 'Ebook' ? '/imgs/ebook.jpg' : '/imgs/book.jpg';
    };

    // Renderiza la lista de empleados
    return (
        <div className="employee-list-container">
            <div className="employee-list">
                {employees.map((employee, index) => (
                    <div key={employee.id} className="employee-card"
                         style={{backgroundImage: backgrounds[index % backgrounds.length]}}>
                        <div className="profile-image"
                             style={{backgroundImage: `url(${getProfileImage(employee.format)})`}}></div>
                        <h2>{employee.title}</h2>
                        <h3>{employee.description}</h3>
                        <div className="employee-details">
                            {/* <span className={`badge gender ${employee.gender.toLowerCase()}`}>{employee.gender}</span> */}
                            <span className="badge marital-status">Pages: {employee.pages}</span>
                            <span className="badge age">Published: {employee.published}</span>
                            <span className="badge salary">Language: {employee.language}</span>
                            {/* <span className="badge salary">${employee.salary.toLocaleString()}</span> */}
                            {/* <span className="badge address"><p>📍{employee.address}</p></span> */}
                        </div>
                        <p>Author: {employee.author}</p>
                    </div>
                ))}
            </div>
            <div className="load-more-container">
                <button className="load-more" onClick={loadMore}>Cargar más</button>
            </div>
        </div>
    );
}

export default EmployeeList;