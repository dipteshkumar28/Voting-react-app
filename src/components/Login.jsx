import React from 'react';


const Login = (props) => {
  return (

    <div className='login-container '>
      <style jsx>{`
        /* Simple and Impressive Voting App CSS */

        /* Login Container */
        .login-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        .login-container::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: float 20s linear infinite;
        }

        /* Welcome Message */
        .welcome-message {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 1rem;
          color: white;
          text-shadow: 0 4px 8px rgba(0,0,0,0.3);
          background: linear-gradient(45deg, #fff, #e0e7ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: glow 2s ease-in-out infinite alternate;
          position: relative;
          z-index: 1;
        }

        .subtitle {
          font-size: 1.2rem;
          font-weight: 400;
          text-align: center;
          margin-bottom: 3rem;
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
          position: relative;
          z-index: 1;
          max-width: 600px;
          line-height: 1.5;
        }

        /* Login Button */
        .login-button {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          font-size: 1.2rem;
          font-weight: 600;
          border: none;
          border-radius: 12px;
          padding: 1.2rem 2.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
          position: relative;
          z-index: 1;
          overflow: hidden;
          min-width: 200px;
        }

        .login-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .login-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .login-button:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6);
        }

        .login-button:hover:not(:disabled)::before {
          left: 100%;
        }

        .login-button:active:not(:disabled) {
          transform: translateY(-1px);
        }

        .features {
          position: relative;
          z-index: 1;
          margin-top: 3rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 800px;
          width: 100%;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          color: white;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          display: block;
        }

        .feature-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .feature-description {
          font-size: 0.9rem;
          opacity: 0.9;
          line-height: 1.4;
        }

        .spinner {
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s ease-in-out infinite;
          margin-right: 8px;
        }

        /* Animations */
        @keyframes float {
          0% { transform: translateX(-50px) translateY(-50px); }
          100% { transform: translateX(-50px) translateY(-150px); }
        }

        @keyframes glow {
          0% { text-shadow: 0 4px 8px rgba(0,0,0,0.3); }
          100% { text-shadow: 0 4px 20px rgba(255,255,255,0.5); }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .welcome-message {
            font-size: 1.8rem;
          }
          
          .subtitle {
            font-size: 1rem;
            margin-bottom: 2rem;
          }
          
          .features {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-top: 2rem;
          }
          
          .login-button {
            padding: 1rem 2rem;
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .login-container {
            padding: 1rem;
          }
          
          .welcome-message {
            font-size: 1.5rem;
          }
          
          .feature-card {
            padding: 1rem;
          }
        }
      `}</style>
      <h1 className='welcome-message'>Welcome to Decentralized Voting Application</h1>
      <p className="subtitle">
        Secure, transparent, and immutable voting powered by blockchain technology.
        Connect your wallet to participate in democratic decision-making.
      </p>
      <button className='login-button' onClick={props.connectWallet}>Connect Wallet</button>
      <div className="features">
        <div className="feature-card">
          <span className="feature-icon">🔒</span>
          <div className="feature-title">Secure Voting</div>
          <div className="feature-description">
            Your votes are protected by cryptographic security and blockchain immutability
          </div>
        </div>

        <div className="feature-card">
          <span className="feature-icon">🌐</span>
          <div className="feature-title">Decentralized</div>
          <div className="feature-description">
            No central authority controls the voting process - power to the people
          </div>
        </div>

        <div className="feature-card">
          <span className="feature-icon">📊</span>
          <div className="feature-title">Transparent</div>
          <div className="feature-description">
            All votes are publicly verifiable while maintaining voter privacy
          </div>
        </div>
        <div className="feature-card">
          <span className="feature-icon">⚡</span>
          <div className="feature-title">Instant Results</div>
          <div className="feature-description">
            Real-time vote counting with automated smart contract execution
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login;
