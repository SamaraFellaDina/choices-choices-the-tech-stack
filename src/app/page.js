import fetchJson from "@/lib/fetch-json";
import styles from "./page.module.css";
import ErrorResult from '../lib/ErrorResult/ErrorResult';
import AccesibilityGraph from '../lib/AccesibilityGraph/AccesibilityGraph'
import API from './API/route'


export default async function Home({children}) {
  let API = await 'https://fdnd-agency.directus.app/items'
  let urlSites = `${API}/frd_site`
  let urlScans = `${API}/frd_scans`;

  let sites = await fetchJson(urlSites);
  let scans = await fetchJson(urlScans);

  let object = 0
  let sitesData = sites.data[object]
  let scansData = scans.data[object]

  console.log(sites.data[object])
  return (
    <main>
    <ErrorResult />
    <AccesibilityGraph />
    
      <h1>Test</h1>
    </main>
  );
}



