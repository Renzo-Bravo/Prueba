import "./Line.css";

export default function Line({ width = "80%", margin = "0.4rem"}) {
  return (
    <div
      className="line"
      style={{
        width,
        margin,
      }}
      aria-hidden="true"
    />
  );
}
