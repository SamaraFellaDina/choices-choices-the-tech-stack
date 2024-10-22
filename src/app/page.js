import Image from "next/image";
import styles from "./page.module.css";
import ErrorResult from '../lib/ErrorResult/ErrorResult';
import AccesibilityGraph from '../lib/AccesibilityGraph/AccesibilityGraph'
import API from './API/route'


export default async function Home({children}) {
  let API = await fetch('https://fdnd-agency.directus.app/items')
  let data = await API.json()
  console.log(data)
  return (
    <main>
    <ErrorResult />
    <AccesibilityGraph />
    
      <h1>Test</h1>
    </main>
  );
}



