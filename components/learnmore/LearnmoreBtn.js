import React, { useState } from 'react';
import './learnmore.css'

const LearnmoreBtn = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='learnmore'
    style={{
        height: '200px'
    }}
    >
      <button
        type="button"
        className="btn"
        onClick= {() => setShowModal(true)}
      >
        Learn More
      </button>

      {showModal && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
              <div className="modal-header">
                <h5 className="modal-title">Finance Management Suggestions</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>
                  The purpose of financial management is to guide businesses or individuals on financial decisions that affect financial stability both now and in the future. To provide good guidance, financial management professionals will analyze finances and investments along with many other forms of financial data to help clients make decisions that align with goals.
                </p>
                <p>
                  Financial management can also offer clients increased financial stability and profitability when there’s a strategic plan for where, why, and how finances are allocated and used. How financial management professionals help clients reach goals will depend on whether the client is a company or an individual.
                </p>
                <p>
                  <strong>1. Planning and budgeting</strong><br />
                  During this analytical phase in the financial management cycle, a company uses past and current financial data to set financial targets, modify objectives, and make changes to the current budget. This phase will typically involve detailed planning as well as a big picture one, meaning a company will look at day-to-day operations, long-term financial plans, and try to link financial targets to these activities.
                </p>
                <p>
                  The goal is to create a strategic financial plan for the company that aligns with objectives for the next three to five years. When setting specific budgets, a company may budget for one fiscal year at a time. A big reason for this is that a budget involves many moving parts that are subject to change by market fluctuations.
                </p>
                <p>
                  <strong>2. Resource allocation</strong><br />
                  Financial managers assign value to capital resources (anything a company uses to manufacture/produce goods/services) and offer advice on allocating these resources based on criteria like projected company growth and financial goals. Resource allocation is important because it allows a company to have a long-term financial plan focused on its business objectives. Financial management professionals help companies by providing a framework for using capital resources and creating a portfolio that will generate the most revenue, given the company's financial status.
                </p>
                <p>
                  <strong>3. Operations and monitoring</strong><br />
                  This phase is critical to protect against fraudulent activity, errors, compliance issues, or other variances in the allocation of funds, etc. Financial management professionals should run regular financial reviews of business operations and cash flow. These periodic reviews can help mitigate fraud and identify other issues. It is a preventative step that ensures the continuity of business operations by securing the validity and accuracy of a company's financial processes.
                </p>
                <p>
                  <strong>4. Evaluation and reporting</strong><br />
                  Financial management professionals should evaluate a company’s current financial management system and propose changes when necessary. Financial reports and financial data can be helpful when assessing the efficiency and success of an existing system.
                </p>
              
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LearnmoreBtn;
