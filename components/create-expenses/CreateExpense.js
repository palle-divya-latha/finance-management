import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CreateExpense = ({ show, onHide, onCreate }) => {
  const [expenseData, setExpenseData] = useState({
    name: '',
    date: '',
    category: '',
    description: '',
    amount: '',
    createdBy: '', // Add a field for the creator's name
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({
      ...expenseData,
      [name]: value,
    });
  };

  const handleCreate = () => {
    

    // Call the onCreate callback to pass the new expense data to the parent component
    onCreate(expenseData);

    // Reset the form and close the modal
    setExpenseData({
      name: '',
      date: '',
      category: '',
      description: '',
      amount: '',
      createdBy: '', 
    });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Create Expense</Modal.Title>
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
              value={expenseData.name}
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
              value={expenseData.date}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              className="form-control"
              id="category"
              name="category"
              value={expenseData.category}
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
              value={expenseData.amount}
              onChange={handleChange}
              min="0"
            />
          </div>

          {/* Add an input field for the creator's name */}
          <div className="form-group">
            <label htmlFor="createdBy">Created by</label>
            <input
              type="text"
              className="form-control"
              id="createdBy"
              name="createdBy"
              value={expenseData.createdBy}
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
        <Button variant="primary" onClick={handleCreate}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateExpense;
