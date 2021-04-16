import LaunchDetailCard from "./LaunchDetailCard";

const LaunchPrograms = (props) => {
  return (
    <div>
      {props.launches.map((launch) => (
        <LaunchDetailCard launch={launch} />
      ))}
    </div>
  );
}
 
export default LaunchPrograms;