import "./Line.css";

export default function Line({ width = "80%" }) {
  return (
    <div
      className="line"
      style={{
        width,
      }}
      aria-hidden="true"
    />
  );
}
