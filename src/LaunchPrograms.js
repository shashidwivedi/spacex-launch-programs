import LaunchDetailCard from "./LaunchDetailCard";

const LaunchPrograms = (props) => {
  return (
    <div className="LaunchPrograms row-lg">
      {props.launches.map((launch) => (
        <LaunchDetailCard {...launch} key={launch.flight_number} />
      ))}
    </div>
  );
}
 
export default LaunchPrograms;