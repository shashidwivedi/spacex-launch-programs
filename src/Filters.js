import './Filters.css';

const Filters = (props) => {
  return (
    <div className="Filters">
      <h2>Filters</h2>
      <span className="filter-name">Launch Year</span>
      <div className="filter-list">
        {props.yearslist.map((year) => (
          <div className="col"><button className={`filter-btn ${year === +props.year ? 'filter-active' : ''}`}>{year}</button></div>
        ))}
      </div>
      <span className="filter-name">Successful Launch</span>
      <div className="filter-list">
        <div className="col">
          <button className={`filter-btn ${props.successLaunch === true ? 'filter-active' : ''}`}>True</button>
        </div>
        <div className="col">
          <button className={`filter-btn ${props.successLaunch === false ? 'filter-active' : ''}`}>False</button>
        </div>
      </div>
      <span className="filter-name">Successful Landing</span>
      <div className="filter-list">
        <div className="col">
          <button className={`filter-btn ${props.successLanding === true ? 'filter-active' : ''}`}>True</button>
        </div>
        <div className="col">
          <button className={`filter-btn ${props.successLanding === false ? 'filter-active' : ''}`}>False</button>
        </div>
      </div>
    </div>
  );
}

export default Filters;