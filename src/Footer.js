import "./App.css";

export default function Footer() {
  return (
    <div className="created">
      Coded by{" "}
      <a
        href="https://www.linkedin.com/search/results/all/?keywords=arina%20polianker&origin=RICH_QUERY_SUGGESTION&position=0&searchId=62317f2f-ecf4-472e-9076-faf36d5274b9&sid=%3AEr"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        Arina Polianker
      </a>
      , and open sourced on {""}
      <a
        href="https://github.com/arinapolianker/react-weather-app"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        GitHub
      </a>
      .
    </div>
  );
}
