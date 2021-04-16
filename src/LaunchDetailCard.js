const LaunchDetailCard = ({flight_number, mission_name}) => {
  return (
    <div className="LaunchDetailCard">
      {`${mission_name} #${flight_number}`}
    </div>
  );
}
 
export default LaunchDetailCard;