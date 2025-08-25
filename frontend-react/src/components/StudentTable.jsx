import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StudentTable.css"; // import a separate CSS for clarity

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(0);
  const [size] = useState(5);
  const [sortBy, setSortBy] = useState("id");
  const [direction, setDirection] = useState("asc");
  const [totalPages, setTotalPages] = useState(0);

  const [form, setForm] = useState({ id: null, name: "", age: "", marks: "" });

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:8080/students", {
        params: { page, size, sortBy, direction },
      });
      setStudents(res.data.content);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.error("Error fetching students", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [page, sortBy, direction]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (form.id) {
        await axios.put(`http://localhost:8080/students/${form.id}`, form);
      } else {
        await axios.post("http://localhost:8080/students", form);
      }
      setForm({ id: null, name: "", age: "", marks: "" });
      fetchStudents();
    } catch (error) {
      console.error("Error saving student", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/students/${id}`);
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student", error);
    }
  };

  const handleEdit = (student) => {
    setForm(student);
  };

  return (
    <div className="card">
      <h2 className="section-title">
        {form.id ? "Edit Student" : "Add Student"}
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          step="0.1"
          name="marks"
          placeholder="Marks"
          value={form.marks}
          onChange={handleChange}
          required
        />

        <div className="form-actions">
          <button
            type="submit"
            className={form.id ? "btn btn-update" : "btn btn-add"}
          >
            {form.id ? "Update Student" : "Add Student"}
          </button>
          {form.id && (
            <button
              type="button"
              className="btn btn-cancel"
              onClick={() =>
                setForm({ id: null, name: "", age: "", marks: "" })
              }
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <h2 className="section-title">Student List</h2>

      {/* Controls */}
      <div className="controls">
        <label>Sort By: </label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="id">ID</option>
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="marks">Marks</option>
        </select>
        <button
          onClick={() => setDirection(direction === "asc" ? "desc" : "asc")}
          className="btn btn-sort"
        >
          {direction === "asc" ? "↑ Ascending" : "↓ Descending"}
        </button>
      </div>

      {/* Table */}
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Marks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.marks}</td>
                <td>
                  <button
                    onClick={() => handleEdit(student)}
                    className="btn btn-update"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="btn btn-delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No students found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          className="btn btn-nav"
        >
          ⬅ Prev
        </button>
        <span>
          Page {page + 1} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => (p + 1 < totalPages ? p + 1 : p))}
          disabled={page + 1 >= totalPages}
          className="btn btn-nav"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default StudentTable;
