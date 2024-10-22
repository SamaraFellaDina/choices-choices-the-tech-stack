import Image from "next/image";
import styles from "./page.module.css";
import ErrorResult from '../lib/ErrorResult/ErrorResult';
import AccesibilityGraph from '../lib/AccesibilityGraph/AccesibilityGraph'


export default function Home({children,}) {
  return (
    <main>
    <ErrorResult />
    <AccesibilityGraph />
    
      <h1>Test</h1>
    </main>
  );
}



