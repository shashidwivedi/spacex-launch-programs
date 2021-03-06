import './Filters.css';

const Filters = (props) => {
  const handleClickYear = (e) => {
    props.setYear(e.target.dataset.year)
  }

  const handleClickLaunch = (e) => {
    console.log(e.target.dataset.launch);
    props.setSuccessLaunch(e.target.dataset.launch)
  }

  const handleClickLanding = (e) => {
    props.setSuccessLanding(e.target.dataset.landing)
  }

  return (
    <div className="Filters">
      <h2>Filters</h2>
      <span className="filter-name">Launch Year</span>
      <div className="filter-list">
        {props.yearslist.map((year) => (
          <div className="col" key={year}>
            <button data-year={year}
              onClick={(e) => handleClickYear(e)}
              className={`filter-btn ${year === +props.year ? 'filter-active' : ''}`}
            >{year}</button>
          </div>
        ))}
      </div>
      <span className="filter-name">Successful Launch</span>
      <div className="filter-list">
        <div className="col">
          <button data-launch={true} onClick={(e) => handleClickLaunch(e)} className={`filter-btn ${props.successLaunch === 'true' ? 'filter-active' : ''}`}>True</button>
        </div>
        <div className="col">
          <button data-launch={false} onClick={(e) => handleClickLaunch(e)} className={`filter-btn ${props.successLaunch === 'false' ? 'filter-active' : ''}`}>False</button>
        </div>
      </div>
      <span className="filter-name">Successful Landing</span>
      <div className="filter-list">
        <div className="col">
          <button data-landing={true} onClick={(e) => handleClickLanding(e)} className={`filter-btn ${props.successLanding === 'true' ? 'filter-active' : ''}`}>True</button>
        </div>
        <div className="col">
          <button data-landing={false} onClick={(e) => handleClickLanding(e)} className={`filter-btn ${props.successLanding === 'false' ? 'filter-active' : ''}`}>False</button>
        </div>
      </div>
    </div>
  );
}

export default Filters;