import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeForm = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');
  const [salary, setSalary] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchEmployee = async () => {
        const res = await axios.get(`/api/employees/${id}`);
        const { name, position, department, salary } = res.data;
        setName(name);
        setPosition(position);
        setDepartment(department);
        setSalary(salary);
      };
      fetchEmployee();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const employee = { name, position, department, salary };

    try {
      if (id) {
        await axios.put(`/api/employees/${id}`, employee);
      } else {
        await axios.post('/api/employees', employee);
      }
      navigate('/employees');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section>
      <div className="container">
        <div className="row">
       
    <form onSubmit={handleSubmit} className='col-lg-6'>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        placeholder="Position"
        required
      />
      <input
        type="text"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        placeholder="Department"
        required
      />
      <input
        type="number"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        placeholder="Salary"
        required
      />
      <button type="submit">{id ? 'Update' : 'Create'} Employee</button>
    </form>
       
    </div>
      </div>
    </section>
  );
};

export default EmployeeForm;
