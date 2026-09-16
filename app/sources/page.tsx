import { sources } from "@/lib/data";

export const metadata = {
  title: "Sources",
};

export default function Page() {
  return (
    <main className="shell">
      <header className="pagehead">
        <div className="ey">Evidence backbone</div>
        <h1>Source Registry</h1>
        <p className="lead">
          Institutional preservation archives and cultural documentary-heritage authorities used to
          structure and verify the preserved Atlas.
        </p>
      </header>

      <div className="notice">
        Access is not the same as permission to republish. Database, image,
        scan and transcription rights must be checked at the repository/item
        level.
      </div>

      <section className="section">
        {sources.map((s) => (
          <article className="source" key={s.id}>
            <span className="tag">
              {s.id} · {s.kind}
            </span>

            <h2 style={{ fontSize: 28 }}>{s.name}</h2>

            <p>
              <b>Coverage:</b> {s.coverage}
            </p>

            <p className="prose">{s.summary}</p>

            <p className="small">
              <b>Rights:</b> {s.rights}
            </p>

            <a
              className="link externalLink"
              href={s.url}
              target="_blank"
              rel="noreferrer"
            >
              <span>Open institutional source</span>
              <span
                className="externalLinkArrow"
                aria-hidden="true"
              />
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
