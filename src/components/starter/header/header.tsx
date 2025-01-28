import { component$, useStyles$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import{ Link } from '@builder.io/qwik-city';
import style from "./header.css?inline";


export default component$(() => {
   useStyles$(style);
   
  return (
    <header>
      <nav>
        <img src="/newjeansICON.jpg" alt="logo" />
        <h1>NewJeans</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact1">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});
