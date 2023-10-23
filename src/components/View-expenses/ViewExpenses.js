import React, { useState, useEffect } from 'react';
import expenses from './../../Data/Data';
import './view-expenses.css';
import DeleteExpense from '../Delete-expenses/DeleteExpense';
import CreateExpense from '../create-expenses/CreateExpense';
import EditExpense from '../edit-expense/EditExpense';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ScrollArea, Box } from '@mantine/core';

const ExpenseTable = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [expenseToDelete, setExpenseToDelete] = useState(null);
  const [expensesData, setExpensesData] = useState(expenses);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [createExpenseError, setCreateExpenseError] = useState('');

  const [showEditModal, setShowEditModal] = useState(false);
  const [expenseToEdit, setExpenseToEdit] = useState(null);
  const [filterOption, setFilterOption] = useState('None');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to check if the screen width is less than or equal to 850px
  const isMobile = windowWidth <= 850;

  useEffect(() => {
    filterExpenses();
  }, [filterOption, selectedDate, selectedMonth, selectedYear, searchText]);
  
  //function to handle creating an expense

  const handleCreateExpense = (newExpense) => {
    const now = new Date();
    const formattedDateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    const createdBy = newExpense.createdBy || 'user@example.com';
    newExpense.updatedAt = formattedDateTime;
    newExpense.createdBy = createdBy;
    const updatedExpenses = [...expensesData, newExpense];
    setExpensesData(updatedExpenses);
    setShowCreateModal(false);
    setCreateExpenseError('');
  };

 //function to handle deleting an expense

  const handleDelete = (expense) => {
    setExpenseToDelete(expense);
    setShowDeleteModal(true);
  };
  
   //function to handle editing an expense
  
  const handleEdit = (expenseToEdit) => {
    setExpenseToEdit(expenseToEdit);
    setShowEditModal(true);
  };

  const handleUpdateExpense = (updatedExpense) => {
    const expenseIndex = expensesData.findIndex((expense) => expense.id === updatedExpense.id);
    if (expenseIndex !== -1) {
      const updatedExpenses = [...expensesData];
      updatedExpenses[expenseIndex] = updatedExpense;
      setExpensesData(updatedExpenses);
      setShowEditModal(false);
    }
  };

  //function to handle filtering an expense

  const filterExpenses = () => {
    let filteredExpenses = expenses;

    if (filterOption === 'Date' && selectedDate) {
      filteredExpenses = filteredExpenses.filter((expense) => {
        const expenseDate = new Date(expense.date);
        const selectedDateValue = new Date(selectedDate);
        return (
          expenseDate.getDate() === selectedDateValue.getDate() &&
          expenseDate.getMonth() === selectedDateValue.getMonth() &&
          expenseDate.getFullYear() === selectedDateValue.getFullYear()
        );
      });
    } else if (filterOption === 'Month' && selectedMonth && selectedYear) {
      filteredExpenses = filteredExpenses.filter((expense) => {
        const expenseDate = new Date(expense.date);
        return (
          expenseDate.getMonth() === selectedMonth - 1 &&
          expenseDate.getFullYear() === selectedYear
        );
      });
    } else if (filterOption === 'Year' && selectedYear) {
      filteredExpenses = filteredExpenses.filter((expense) => {
        const expenseDate = new Date(expense.date);
        return expenseDate.getFullYear() === selectedYear;
      });
    }

      filteredExpenses.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  });

    if (searchText) {
      filteredExpenses = filteredExpenses.filter((expense) =>
        expense.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setExpensesData(filteredExpenses);
  };

  return (
    <>
     <div
  style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }}
>
  <div
  className='searchdiv'
  >
    {/* Search input button code starts here */}
    <input
      style={{
        cursor: 'pointer',
        backgroundColor: 'white',
        color: 'purple',
        border: 'none',
        padding: '10px',
        borderRadius: '8px',
        margin: '15px',
        marginRight: '15px',
        maxWidth: '250px',
        outline: 'none',
      }}
      className="searchbtn"
      type="text"
      placeholder="Search by Name"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
    {/* Search input button code ends here */}
  </div>

  <div>
    {/* Select filter button code starts here */}
    <select
      style={{
        cursor: 'pointer',
        backgroundColor: 'white',
        color: 'purple',
        border: 'none',
        padding: '10px',
        borderRadius: '8px',
        margin: '15px',
        outline: 'none',
      }}
      className="select-month-btn"
      value={filterOption}
      onChange={(e) => setFilterOption(e.target.value)}
    >
      <option value="None">Select Filter</option>
      <option value="Month">Filter by Month</option>
      <option value="Year">Filter by Year</option>
    </select>
    {/* Select filter button code ends here */}
  </div>

  <div>
    {/* Create button code starts here */}
    <button
      className="createbtn"
      onClick={() => setShowCreateModal(true)}
      style={{
        cursor: 'pointer',
        backgroundColor: 'white',
        color: 'purple',
        border: 'none',
        padding: '10px',
        borderRadius: '8px',
        margin: '15px',
        outline: 'none',
      }}
    >
      CreateExpense
    </button>
    {createExpenseError && <div className="error-message">{createExpenseError}</div>}
    <CreateExpense show={showCreateModal} onHide={() => setShowCreateModal(false)} onCreate={handleCreateExpense} />
    {/* Create button code ends here */}
  </div>


        {/* Table code starts here*/}
      
      </div>
      {isMobile ? (
        <div className="view-expenses">
          <div className="table-card">
          <ScrollArea w={300} h={200} style={{ maxWidth: '850px' }}>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" style={{ textAlign: 'center' }}>
                    #
                  </th>
                  <th scope="col" style={{ textAlign: 'center' }}>
                    Name
                  </th>
                  <th scope="col" style={{ textAlign: 'center' }}>
                    Category
                  </th>
                  <th scope="col" style={{ textAlign: 'center' }}>
                    Date
                  </th>
                  <th scope="col" style={{ textAlign: 'center' }}>
                    Amount
                  </th>
                  <th scope="col" style={{ textAlign: 'center' }}>
                    Updated at
                  </th>
                  <th scope="col" style={{ textAlign: 'center' }}>
                    Created by
                  </th>
                  <th scope="col" style={{ textAlign: 'center' }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {expensesData.map((expense, index) => (
                  <tr key={expense.id}>
                    <th scope="row" style={{ textAlign: 'center' }}>
                      {index + 1}
                    </th>
                    <td>{expense.name}</td>
                    <td>{expense.category}</td>
                    <td>{expense.date}</td>
                    <td>${expense.amount}</td>
                    <td>{expense.updatedAt}</td>
                    <td>{expense.createdBy}</td>
                    <td>
                      <button
                        onClick={() => handleEdit(expense)}
                        style={{
                          color: 'green',
                          cursor: 'pointer',
                          margin: '5px',
                          border: 'none',
                        }}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button
                        style={{
                          color: 'red',
                          cursor: 'pointer',
                          margin: '5px',
                          border: 'none',
                        }}
                        onClick={() => handleDelete(expense)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollArea>
          </div>
          
        </div>
        
      ) : (
        
        <div className="view-expenses">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col" style={{ textAlign: 'center' }}>
                  #
                </th>
                <th scope="col" style={{ textAlign: 'center' }}>
                  Name
                </th>
                <th scope="col" style= {{ textAlign: 'center' }}>
                  Category
                </th>
                <th scope="col" style={{ textAlign: 'center' }}>
                  Date
                </th>
                <th scope="col" style={{ textAlign: 'center' }}>
                  Amount
                </th>
                <th scope="col" style={{ textAlign: 'center' }}>
                  Updated at
                </th>
                <th scope="col" style={{ textAlign: 'center' }}>
                  Created by
                </th>
                <th scope="col" style={{ textAlign: 'center' }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {expensesData.map((expense, index) => (
                <tr key={expense.id}>
                  <th scope="row" style={{ textAlign: 'center' }}>
                    {index + 1}
                  </th>
                  <td>{expense.name}</td>
                  <td>{expense.category}</td>
                  <td>{expense.date}</td>
                  <td>${expense.amount}</td>
                  <td>{expense.updatedAt}</td>
                  <td>{expense.createdBy}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(expense)}
                      style={{
                        color: 'green',
                        cursor: 'pointer',
                        margin: '5px',
                        border: 'none',
                      }}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      style={{
                        color: 'red',
                        cursor: 'pointer',
                        margin: '5px',
                        border: 'none',
                      }}
                      onClick={() => handleDelete(expense)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      )}
      {showDeleteModal && expenseToDelete && (
        <DeleteExpense
          show={showDeleteModal}
          onHide={() => setShowDeleteModal(false)}
          expense={expenseToDelete}
          onDelete={handleDelete}
          expensesData={expensesData}
          setExpensesData={setExpensesData}
        />
      )}
      {showEditModal && expenseToEdit && (
        <EditExpense
          show={showEditModal}
          onHide={() => setShowEditModal(false)}
          expense={expenseToEdit}
          onUpdate={handleUpdateExpense}
        />
      )}
       
    </>
  );
};

export default ExpenseTable;
