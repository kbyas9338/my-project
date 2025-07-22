import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import ReactPaginate from "react-paginate";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/paginate.css";
import "./toastStyles.css";

const override = {
  display: "block",
  margin: "0 auto",
};

const postsPerPage = 10;
const defaultImage = "/image.webp";

export default function Pagination() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [editRowId, setEditRowId] = useState(null);
  const [editedPost, setEditedPost] = useState({ title: "", body: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const dataWithImages = response.data.map((post) => ({
        ...post,
        image: post.imageUrl || defaultImage,
      }));
      setPosts(dataWithImages);
    } catch (error) {
      toast.error("❌ Error fetching posts: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = useMemo(() => {
    let temp = [...posts];
    if (searchTerm) {
      temp = temp.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (sortOrder === "asc") {
      temp.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "desc") {
      temp.sort((a, b) => b.title.localeCompare(a.title));
    }
    return temp;
  }, [searchTerm, sortOrder, posts]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    setActionLoading(true);
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      if (response.status === 200) {
        setPosts(posts.filter((post) => post.id !== id));
        toast.success(`✅ Post ${id} deleted successfully`);
      }
    } catch (error) {
      toast.error(`❌ ${error.message}`);
    } finally {
      setActionLoading(false);
    }
  };

  const handleEditClick = (post) => {
    setEditRowId(post.id);
    setEditedPost({ title: post.title, body: post.body });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    setEditRowId(null);
    setEditedPost({ title: "", body: "" });
    toast.info("ℹ️ Edit cancelled");
  };

  const handleSave = async () => {
    const current = posts.find((p) => p.id === editRowId);
    if (
      current.title === editedPost.title &&
      current.body === editedPost.body
    ) {
      toast.info("ℹ️ No changes detected");
      return;
    }
    const payload = {
      id: editRowId,
      title: editedPost.title,
      body: editedPost.body,
    };
    setActionLoading(true);
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${editRowId}`,
        payload
      );
      if (response.status === 200) {
        const updatedPosts = posts.map((post) =>
          post.id === editRowId ? { ...post, ...payload } : post
        );
        setPosts(updatedPosts);
        setEditRowId(null);
        toast.success(`✅ Post ${editRowId} updated successfully`);
      }
    } catch (error) {
      toast.error("❌ Error updating post: " + error.message);
    } finally {
      setActionLoading(false);
    }
  };

  const pageCount = Math.ceil(filteredPosts.length / postsPerPage);
  const offset = currentPage * postsPerPage;
  const currentPosts = filteredPosts.slice(offset, offset + postsPerPage);

  return (
    <div className="paginate-container container my-4">
      <ToastContainer position="top-right" autoClose={3000} />
      {loading ? (
        <ClipLoader
          color="#36d7b7"
          loading={loading}
          cssOverride={override}
          size={100}
        />
      ) : (
        <>
          <div className="d-flex justify-content-between mb-3">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search title..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(0);
              }}
              style={{ maxWidth: "300px" }}
            />

            <select
              className="form-select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              style={{ maxWidth: "150px" }}
            >
              <option value="">Sort</option>
              <option value="asc">Ascending (A–Z)</option>
              <option value="desc">Descending (Z–A)</option>
            </select>
          </div>

          <p className="text-end text-muted">
            Showing {offset + 1}–
            {Math.min(offset + postsPerPage, filteredPosts.length)} of{" "}
            {filteredPosts.length} posts
          </p>

          {currentPosts.length > 0 ? (
            <>
              <table className="table table-dark table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th style={{ width: "20%" }}>Title</th>
                    <th>Image</th>
                    <th style={{ width: "50%" }}>Body</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentPosts.map((post) => (
                    <tr key={post.id}>
                      <td>{post.id}</td>
                      <td>
                        {editRowId === post.id ? (
                          <input
                            className="form-control"
                            name="title"
                            value={editedPost.title}
                            onChange={handleEditChange}
                          />
                        ) : (
                          post.title
                        )}
                      </td>
                      <td>
                        <img
                          src={post.image}
                          alt={`Post ${post.id} thumbnail`}
                          style={{
                            width: "100px",
                            height: "60px",
                            objectFit: "cover",
                            borderRadius: "4px",
                          }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = defaultImage;
                          }}
                        />
                      </td>
                      <td>
                        {editRowId === post.id ? (
                          <input
                            className="form-control"
                            name="body"
                            value={editedPost.body}
                            onChange={handleEditChange}
                          />
                        ) : (
                          post.body
                        )}
                      </td>
                      <td>
                        {editRowId === post.id ? (
                          <>
                            <button
                              className="btn btn-success btn-sm me-2"
                              onClick={handleSave}
                              disabled={actionLoading}
                            >
                              Save
                            </button>
                            <button
                              className="btn btn-secondary btn-sm"
                              onClick={handleCancel}
                              disabled={actionLoading}
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <button
                            className="btn btn-primary btn-sm me-2"
                            onClick={() => handleEditClick(post)}
                            disabled={actionLoading}
                          >
                            Edit
                          </button>
                        )}
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(post.id)}
                          disabled={actionLoading}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <ReactPaginate
                pageCount={pageCount}
                onPageChange={handlePageChange}
                containerClassName="pagination"
                activeClassName="active"
                previousLabel="Prev"
                nextLabel="Next"
                breakLabel="..."
                pageClassName="page-item"
                previousClassName="page-item"
                nextClassName="page-item"
                pageLinkClassName="page-link"
                nextLinkClassName="page-link"
                previousLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                forcePage={currentPage}
              />
            </>
          ) : (
            <p className="text-center mt-4">No posts found.</p>
          )}
        </>
      )}
    </div>
  );
}
