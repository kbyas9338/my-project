import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./paginate.css";

function Posts() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const todosPerPage = 10;

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setTodos(response.data))
      .catch((error) => {
        console.error("Error fetching todos:", error);
        toast.error("Failed to fetch todos");
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredTodos.length / todosPerPage);
  const offset = currentPage * todosPerPage;
  const currentTodos = filteredTodos.slice(offset, offset + todosPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.success(`Todo ${id} deleted successfully`);
  };

  const handleEditClick = (todo) => {
    setEditingTodoId(todo.id);
    setEditedTitle(todo.title);
  };

  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleSaveEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: editedTitle } : todo
      )
    );
    setEditingTodoId(null);
    setEditedTitle("");
    toast.success(`Todo ${id} updated successfully`);
  };

  const handleCancelEdit = () => {
    setEditingTodoId(null);
    setEditedTitle("");
    toast.info("Edit cancelled");
  };

  return (
    <div>
      <h2>All Todos from JSONPlaceholder</h2>

      {/* Search box */}
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(0); // Reset to first page on new search
        }}
        style={{
          width: "300px",
          padding: "8px",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />

      {/* Show spinner while loading */}
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <ClipLoader color="#36d7b7" size={50} />
          <p>Loading todos...</p>
        </div>
      ) : (
        <>
          {/* Todo list */}
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {currentTodos.map((todo) => (
              <li
                key={todo.id}
                style={{
                  marginBottom: "15px",
                  padding: "10px",
                  borderBottom: "1px solid #ccc",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div>
                  <p>
                    <strong>ID:</strong> {todo.id}
                  </p>
                  <p>
                    <strong>User ID:</strong> {todo.userId}
                  </p>
                  <p>
                    <strong>Title:</strong>{" "}
                    {editingTodoId === todo.id ? (
                      <input
                        type="text"
                        value={editedTitle}
                        onChange={handleEditChange}
                        style={{ width: "200px" }}
                      />
                    ) : (
                      todo.title
                    )}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    <span style={{ color: todo.completed ? "green" : "red" }}>
                      {todo.completed ? "Completed" : "Pending"}
                    </span>
                  </p>
                </div>

                <div style={{ textAlign: "right", minWidth: "140px" }}>
                  {editingTodoId === todo.id ? (
                    <>
                      <button onClick={() => handleSaveEdit(todo.id)}>
                        Save
                      </button>{" "}
                      <button onClick={handleCancelEdit}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEditClick(todo)}>
                        Edit
                      </button>{" "}
                      <button onClick={() => handleDelete(todo.id)}>
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* Pagination Controls */}
          {pageCount > 1 && (
            <ReactPaginate
              previousLabel={"← Prev"}
              nextLabel={"Next →"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
              pageRangeDisplayed={5}
              marginPagesDisplayed={1}
              breakLabel={"..."}
              breakClassName={"break-me"}
              disabledClassName={"disabled"}
            />
          )}
        </>
      )}

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default Posts;
