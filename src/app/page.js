import fetchJson from "@/lib/fetch-json";
import styles from "./page.module.css";
import ErrorResult from '../lib/ErrorResult/ErrorResult';
import AccesibilityGraph from '../lib/AccesibilityGraph/AccesibilityGraph'

export default async function Home() {
  const API = process.env.NEXT_PUBLIC_API_URL;
  const urlSites = `${API}/frd_site`;
  const urlScans = `${API}/frd_scans`;

  const sites = await fetchJson(urlSites);
  const scans = await fetchJson(urlScans);

  const object = 0;
  const sitesData = sites.data[object];
  const scansData = scans.data[object];

  return (
    <main>
      <ErrorResult />
      <AccesibilityGraph />
      <h1>{scansData.title}</h1>
    </main>
  );
}


