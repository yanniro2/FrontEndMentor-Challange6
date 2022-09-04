import "./style.css"
function App()
{
  return (
    <div className="App">
      <div className="status-card">
        <div className="status-card-container">
          <div className="status-card-left">
            <div className="status-card-left-text">
              <h1 className="status-card-left-text-h1">
                Get <span className="status-card-left-text-h1-span">insights</span> that help your business grow.
              </h1>
              <p className="status-card-left-text-p">
                Discover the benefits of data analytics and make better decisions
                regarding revenue, customer experience, and overall efficiency.
              </p>
            </div>
            <div className="status-card-left-details">
              <div className="status-card-left-details-companies">
                <h1 className="status-card-left-details-companies-h1">10k+</h1>
                <p className="status-card-left-details-companies-p">companies </p>
              </div>
              <div className="status-card-left-details-companies">
                <h1 className="status-card-left-details-companies-h1">314 </h1>
                <p className="status-card-left-details-companies-p">templates </p>
              </div>
              <div className="status-card-left-details-companies">
                <h1 className="status-card-left-details-companies-h1">12M+ </h1>
                <p className="status-card-left-details-companies-p">queries </p>
              </div>
            </div>
          </div>
          <div className="status-card-right">
            <div className="status-card-right-image"></div>
          </div>
        </div>
      </div>


      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge"
        >Frontend Mentor</a
        >. Coded by <a href="#">n12oyan</a>.
      </div>
    </div>
  );
}

export default App;
