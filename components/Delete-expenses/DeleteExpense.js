import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const DeleteExpense = ({ show, onHide, expense, onDelete, expensesData, setExpensesData }) => {
  const handleDelete = () => {
    const updatedExpenses = expensesData.filter((item) => item.id !== expense.id);
    setExpensesData(updatedExpenses);
    onDelete(expense); // Pass the entire expense object to onDelete
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Confirm Deletion</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Are you sure you want to delete this expense?
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Cancel
      </Button>
      <Button variant="danger" onClick={handleDelete}>
        Delete
      </Button>
    </Modal.Footer>
  </Modal>
  );
};

export default DeleteExpense;
