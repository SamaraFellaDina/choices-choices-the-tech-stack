import fetchJson from './lib/fetch-json';
import styles from './page.module.css';
import Title from '../lib/Title/Title';
import ErrorResult from '../lib/ErrorResult/ErrorResult';
import AccesibilityGraph from '../lib/AccesibilityGraph/AccesibilityGraph';
import AutomaticScan from '../lib/AutomaticScan/AutomaticScan';
import TypeGraph from '../lib/TypeGraph/TypeGraph';

export default async function Home() {

  const API = 'https://fdnd-agency.directus.app/items';
  const urlSites = `${API}/frd_site`;
  const urlScans = `${API}/frd_scans`;

  const sites = await fetchJson(urlSites);
  const scans = await fetchJson(urlScans);

  const object = 1;
  const sitesData = sites.data[object];
  const scansData = scans.data[object];

  return (
    <main className={styles.main}>
      <Title sitesData={sitesData}/>
      <AutomaticScan scansData={scansData}/>
      <ErrorResult scansData={scansData}/>
      <TypeGraph scansData={scansData}/>
      <AccesibilityGraph scansData={scansData}/>
    </main>
  );
}

