import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const EditExpense = ({ show, onHide, expense, onUpdate }) => {
  const [editedExpense, setEditedExpense] = useState(expense);

  useEffect(() => {
    setEditedExpense(expense);
  }, [expense]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedExpense({
      ...editedExpense,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    

    // Call the onUpdate callback to pass the updated expense data to the parent component
    onUpdate(editedExpense);

    // Reset the form and close the modal
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}
    
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Expense</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={editedExpense.name}
              onChange={handleChange}
              placeholder="Expense Name (Max 140 characters)"
              maxLength="140"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date of Expense</label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              value={editedExpense.date}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              className="form-control"
              id="category"
              name="category"
              value={editedExpense.category}
              onChange={handleChange}
            >
              <option value="">Select a Category</option>
              <option value="Health">Health</option>
              <option value="Electronics">Electronics</option>
              <option value="Travel">Travel</option>
              <option value="Education">Education</option>
              <option value="Books">Books</option>
              <option value="Others">Others</option>
            </select>
          </div>


          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              className="form-control"
              id="amount"
              name="amount"
              value={editedExpense.amount}
              onChange={handleChange}
              min="0"
            />
          </div>

          <div className="form-group">
            <label htmlFor="createdBy">Created by</label>
            <input
              type="text"
              className="form-control"
              id="createdBy"
              name="createdBy"
              value={editedExpense.createdBy}
              onChange={handleChange}
              placeholder="Creator's Name"
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpdate}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditExpense;
