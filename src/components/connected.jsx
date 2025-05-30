import React from 'react';

const Connected = (props) => {
  return (
    <div className='connected-container'>
      <h1 className="connected-header">🗳️ Voting Dashboard</h1>
      <div class="connected-account">
        <strong>Connected Account:</strong> {props.account}
      </div>
      <div class="status-card">
        <div class="status-label">Voting Status</div>
        <div class="status-value">Active Session</div>
      </div>
      {props.showButton ? (
        <p className="connected-account">You have already voted</p>
      ) : (
        <div class="voting-section">
          <h3 class="voting-title">Cast Your Vote</h3>
          <div class="input-group">
            <label class="input-label" for="candidateIndex">Enter Candidate Index:</label>
            <input type="number" id="candidateIndex" placeholder="0, 1, 2, or 3" min="0" max="3" value={props.number} onChange={props.handleNumberChange} />
          </div>
          <button class="vote-button" onClick={props.voteFunction}>
            Vote Now
          </button>
        </div>
      )}

      <table id="myTable" className="candidates-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Candidate Name</th>
            <th>Candidate Votes</th>
          </tr>
        </thead>
        <tbody>
          {props.candidates && props.candidates.length > 0 ? (
            props.candidates.map((candidate, index) => (
              <tr key={index}>
                <td>{candidate.index}</td>
                <td>{candidate.name}</td>
                <td>{candidate.voteCount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No candidates available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Connected;
