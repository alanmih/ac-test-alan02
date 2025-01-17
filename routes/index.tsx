/** @jsx h */
import { h } from "preact";
import Search from "../islands/search.tsx";

export default function Home() {
  return (
    <div>
      <a href="https://www.active-connector.com/">
        <img
          src="/logo.png"
          alt="Active Connector company logo"
        />
      </a>
      <h2>
        Skill Test (Software Engineer)
      </h2>
      <Search />
    </div>
  );
}
