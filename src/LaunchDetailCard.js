import "./LaunchDetailCard.css";

const LaunchDetailCard = ({flight_number, mission_name, mission_id, links, launch_year, launch_success, launch_landing}) => {
  return (
    <div className="LaunchDetailCard">
      <div className="img-container">
        <img src={links.mission_patch_small} alt={`flight ${flight_number}`} />
      </div>
      <span className="launch-title">{`${mission_name} #${flight_number}`}</span><br />
      <span>Mission Ids:</span>
      <ul>
        {mission_id.map((m_id) => (<li key={m_id}>{m_id}</li>))}
      </ul>
      <span>Launch Year:</span> {launch_year}<br />
      <span>Succesful Launch:</span> { launch_success ? 'True' : 'False' }<br />
      <span>Succesful Landing:</span> { launch_landing ? 'True' : 'False' }
    </div>
  );
}
 
export default LaunchDetailCard;