import {people} from "@/lib/data";export const metadata={title:"People"};export default function Page(){return <main className="shell"><header className="pagehead"><div className="ey">Prosopography · genealogy</div><h1>People</h1><p className="lead">Source-linked starter records showing how individual migration histories can be reconstructed without detaching facts from their archival context.</p></header><div className="notice">Names, places and classifications follow archival indexes and may use historical spellings. Open the source record before drawing genealogical conclusions.</div><section className="section"><div className="grid2">{people.map(p=><article className="card" key={p.record}><span className="tag">{p.record} · {p.source}</span><h3>{p.name}</h3><p><b>{p.sex} · Age:</b> {p.age}<br/><b>Origin:</b> {p.origin}<br/><b>Ship:</b> {p.ship}<br/><b>Departure:</b> {p.depart}<br/><b>Arrival:</b> {p.arrive}<br/><b>Assignment:</b> {p.assignment}</p><p>{p.note}</p><a
  className="link externalLink"
  href={p.url}
  target="_blank"
  rel="noreferrer"
>
  <span>Open archival record</span>
  <span className="externalLinkIcon" aria-hidden="true"></span>
</a></article>)}</div></section></main>}
