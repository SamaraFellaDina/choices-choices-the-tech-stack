import fetchJson from "@/lib/fetch-json";
import styles from "./page.module.css";
import Title from '../lib/Title/Title';
import ErrorResult from '../lib/ErrorResult/ErrorResult';
import AccesibilityGraph from '../lib/AccesibilityGraph/AccesibilityGraph'
import AutomaticScan from '../lib/AutomaticScan/AutomaticScan'
import TypeGraph from '../lib/TypeGraph/TypeGraph'


export default async function Home() {
  const API = process.env.NEXT_PUBLIC_API_URL;
  const urlSites = `${API}/frd_site`;
  const urlScans = `${API}/frd_scans`;

  const sites = await fetchJson(urlSites);
  const scans = await fetchJson(urlScans);

  const object = 0;
  const sitesData = sites.data[object];
  const scansData = scans.data[object];
  console.log(sitesData)
  return (
    <main>
      <Title sitesData={sitesData}/>
      <AutomaticScan scansData={scansData}/>
      <ErrorResult scansData={scansData}/>
      <TypeGraph scansData={scansData}/>
      <AccesibilityGraph scansData={scansData}/>
    </main>
  );
}


