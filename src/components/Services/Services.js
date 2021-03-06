import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
      fetch("fakeData.json")
        .then((res) => res.json())
        .then((data) => setCourses(data));
    }, []);

    return (
      <div>
        <h1 className="welcome my-5">Our Digital Services,,</h1>
        <div className="course">
          {courses.map((course) => (
            <Service key={course.id} course={course}></Service>
          ))}
        </div>
      </div>
    );
};

export default Services;