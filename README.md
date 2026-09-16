# Indo-Caribbean Atlas

**A provenance-first digital humanities platform for exploring Indo-Caribbean migration, memory, culture, and archival history.**

The Indo-Caribbean Atlas is an open digital research project designed to connect people, voyages, places, archival records, cultural practices, and historical events across the Indo-Caribbean experience.

Rather than presenting history as a collection of disconnected facts, the Atlas treats historical knowledge as a network of relationships:

**People → Voyages → Ships → Ports → Places → Records → Communities → Culture → Memory**

The project combines archival research, historical data modeling, digital humanities methods, and accessible web design to create an environment where researchers, students, genealogists, educators, and community members can explore Indo-Caribbean history while remaining connected to the evidence behind it.

---

## Purpose

Between the nineteenth and early twentieth centuries, hundreds of thousands of Indians traveled through systems of indentured labor to colonies across the Caribbean and the wider plantation world.

Their histories survive across immigration registers, ship records, estate documents, colonial correspondence, archival indexes, family histories, oral traditions, photographs, newspapers, and community memory.

These materials are often distributed across countries, institutions, collections, and formats.

The Indo-Caribbean Atlas is designed to help reconnect them.

Its central principle is simple:

> **Historical claims should remain connected to their evidence.**

The platform therefore emphasizes provenance, archival context, responsible interpretation, and transparent uncertainty rather than presenting historical data as unquestionable fact.

---

## What the Atlas Explores

### People

Individual historical records provide the foundation for reconstructing migration histories.

Person records can connect information such as names, registration numbers, ages, recorded places of origin, ships, departure dates, arrival dates, destinations, assignments, and archival sources.

Historical spellings and classifications are preserved where necessary so researchers can trace information back to the original record.

---

### Voyages

Migration records connect individual lives to ships, ports, dates and destinations, revealing the routes, movements and historical circumstances that shaped journeys across oceans and the formation of new communities in the Caribbean.

Voyage records provide a bridge between individual biographies and larger migration systems.

---

### Places

Historical migration cannot be understood without geography.

The Atlas is designed to connect records with locations including ports of departure, Caribbean ports, estates, settlements, villages, districts, countries of origin, and later diaspora communities.

Over time, these relationships can support historical GIS and interactive migration mapping.

---

### Culture

Indenture was only one chapter of Indo-Caribbean history.

The Atlas also provides a framework for documenting the cultural worlds created and transformed by Indo-Caribbean communities, including language, religion, music, foodways, festivals, literature, family traditions, political life, and community institutions.

Culture is treated as dynamic historical development rather than as a static collection of traditions.

---

### Timeline

The timeline places individual records and archival collections within broader historical developments.

Events can connect migration, colonial administration, legislation, settlement, cultural transformation, political change, and later movements of Indo-Caribbean communities across the Caribbean and global diaspora.

---

### Sources

The Source Registry forms the evidence backbone of the Atlas.

Rather than separating historical statements from their origins, the platform is designed around a provenance model:

**Entity → Claim → Evidence → Archival Item or Index → Collection → Repository**

Sources may include national archives, university collections, documentary heritage programs, scholarly research, digitized archival indexes, and other authoritative repositories.

Whenever possible, records link directly to the institution responsible for preserving the underlying evidence.

---

## Research Methodology

The Atlas includes a methodology layer for building historical knowledge responsibly, combining careful source evaluation, transparent documentation, archival context and evidence-based research practices to ensure that interpretations remain traceable, credible and respectful of the people and communities represented.

Historical records are not neutral datasets.

Colonial records may contain inconsistent spellings, transcription errors, administrative categories, missing information, imposed identities, and terminology that is offensive or misleading by contemporary standards.

For that reason, the Atlas distinguishes between what a historical source **records** and what the platform itself **asserts**.

For example, a field such as `recorded_caste` represents a classification found in an archival record. It should not automatically be interpreted as a definitive statement about an individual's identity.

Uncertainty should be preserved rather than silently resolved.

---

## Source Hierarchy

Evidence should be evaluated according to its provenance and purpose.

The project generally distinguishes among:

**Primary institutional sources** — archival registers, immigration records, ship records, government collections, manuscripts, scans, and institutional databases.

**Scholarly sources** — peer-reviewed research, academic books, scholarly editions, and university research projects.

**Heritage sources** — museums, documentary heritage programs, cultural institutions, and curated historical resources.

**Oral and community sources** — interviews, family histories, community archives, personal collections, and transmitted memory, documented with appropriate consent and context.

**Discovery sources** — resources useful for locating evidence but which should not automatically be treated as authoritative historical proof.

AI-generated material is never considered historical evidence by itself.

---

## Archival Foundations

The project's source architecture has been designed around major institutional collections relevant to Indo-Caribbean migration and indenture, including materials preserved by:

* UNESCO's Memory of the World Programme
* National Archives of Trinidad and Tobago
* National Archives of Guyana
* Nationaal Archief of the Netherlands
* The University of the West Indies and associated archival collections

The inclusion of a repository does not imply that its material may automatically be reproduced.

**Access is not the same as permission to republish.**

Copyright, database rights, image rights, transcription rights, privacy restrictions, institutional terms, and other conditions must be evaluated at the collection or item level before material is reproduced or redistributed.

---

## Data Model

The Atlas is intended to evolve from a curated digital publication into structured historical research infrastructure.

Core entities may include:

```text
Person
Voyage
Ship
Port
Place
Estate
Community
Event
Cultural Practice
Archival Record
Collection
Repository
Claim
Evidence
Citation
Oral History
```

Relationships between these entities make more sophisticated historical questions possible.

For example:

```text
Person
  ↓ traveled_on
Voyage
  ↓ used
Ship
  ↓ departed_from
Port
  ↓ arrived_at
Port
  ↓ associated_with
Place
```

A separate evidence relationship can preserve provenance:

```text
Person
  ↓ has_claim
Claim
  ↓ supported_by
Evidence
  ↓ derived_from
Archival Record
  ↓ belongs_to
Collection
  ↓ preserved_by
Repository
```

This separation between entities, claims, and evidence is fundamental to the project's research architecture.

---

## Current Platform

The current version is a responsive Next.js application containing dedicated sections for:

```text
Home
People
Voyages
Places
Culture
Timeline
Sources
Research
Learn
About
```

Structured starter datasets are included for people, voyages, sources, and timeline events.

The current release should be understood as a foundation for a much larger historical dataset rather than a comprehensive database of Indo-Caribbean history.

---

## Technology

The current platform is built with:

* **Next.js 14**
* **React 18**
* **TypeScript**
* **CSS**
* **Structured JSON and CSV data**
* **Vercel-compatible deployment**

The architecture intentionally keeps the initial application lightweight while allowing future migration toward a larger research stack involving relational databases, geospatial infrastructure, APIs, search systems, and knowledge graphs.

---

## Project Structure

```text
indo-caribbean-atlas/
│
├── app/
│   ├── about/
│   ├── culture/
│   ├── learn/
│   ├── people/
│   ├── places/
│   ├── research/
│   ├── sources/
│   ├── timeline/
│   ├── voyages/
│   ├── globals.css
│   ├── icon.png
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Footer.tsx
│   └── Nav.tsx
│
├── data/
│   ├── people.csv
│   ├── people.json
│   ├── sources.json
│   ├── timeline.json
│   ├── voyages.json
│   └── DATA_DICTIONARY.md
│
├── lib/
│   └── data.ts
│
├── next.config.mjs
├── package.json
├── tsconfig.json
├── vercel.json
└── README.md
```

---

## Running Locally

The project requires a recent version of Node.js.

Clone or download the repository, enter the project directory, and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local address shown by Next.js in your browser.

For a production build:

```bash
npm run build
npm start
```

---

## Deployment

The application is designed to deploy cleanly on Vercel.

After importing the repository, Vercel should recognize the Next.js project automatically.

A normal deployment workflow is:

```text
Edit
  ↓
Commit
  ↓
Push
  ↓
Build
  ↓
Deploy
```

Before publishing changes, run:

```bash
npm run build
```

to identify TypeScript, rendering, or build-time errors.

---

## Data Contributions

Historical data should not be added simply because it appears plausible.

Contributions should preserve enough information for another researcher to understand where the information came from and how it was interpreted.

Whenever possible, a new historical record should include:

```text
Source repository
Collection or database
Record identifier
Source URL or archival reference
Historical value as recorded
Normalized value, if applicable
Research note
Uncertainty or confidence information
Rights information where relevant
```

Do not silently modernize names, places, categories, or spellings when doing so would make the original archival record difficult to reconstruct.

---

## Genealogical Research

The Atlas may support genealogical discovery, but historical record linkage should be treated probabilistically.

Two records containing similar names do not necessarily describe the same person.

Potential matches should consider multiple attributes, such as registration numbers, names, relatives, age, birthplace, ship, voyage, estate, dates, and archival context.

Ambiguous matches should remain explicitly ambiguous.

The platform should assist investigation rather than manufacture certainty.

---

## Oral Histories

Future oral-history functionality should prioritize informed consent and community control.

Contributors should understand how recordings, transcripts, names, photographs, and personal information may be stored, displayed, searched, or reused.

Where appropriate, oral histories should support restrictions such as:

```text
Public
Community-only
Research-only
Embargoed
Anonymous
Restricted
Withdrawn
```

Sensitive family or personal information should never be made public merely because the technology makes publication possible.

---

## Responsible Use of AI

AI can assist historical research, but it must not become an invisible source of historical claims.

Potential uses include document discovery, transcription assistance, entity extraction, translation assistance, record comparison, search, summarization, and exploratory research.

Any AI-assisted historical claim should ultimately remain traceable to human-verifiable evidence.

The governing principle is:

> **AI may help researchers find and interpret evidence. It does not replace the evidence.**

Generated information should never be inserted into the historical record as established fact without verification.

---

## Long-Term Vision

The long-term goal of the Indo-Caribbean Atlas is to become interconnected digital research infrastructure for Indo-Caribbean history.

Future capabilities could support large-scale archival datasets, historical GIS, voyage reconstruction, family-history research, record linkage, oral histories, cultural documentation, educational materials, advanced search, and evidence-grounded research tools.

The larger ambition is not simply to digitize historical information.

It is to make relationships visible:

```text
a name in a register
        ↓
a person

a ship in an index
        ↓
a journey

a location in a record
        ↓
a community

a document in an archive
        ↓
evidence

thousands of connected records
        ↓
a history that can be explored
```

---

## Historical and Ethical Note

The Atlas deals with histories shaped by colonialism, indenture, plantation economies, migration, displacement, adaptation, resistance, family formation, cultural transformation, and community building.

Archival terminology may reflect the assumptions and administrative systems of the institutions that produced the records.

Preserving historical terminology for research purposes does not imply endorsement of those classifications.

The project aims to document historical evidence faithfully while providing the context necessary to interpret that evidence responsibly.

---

## Rights and Attribution

Unless explicitly stated otherwise, the Indo-Caribbean Atlas does **not** claim ownership of archival records, scans, photographs, databases, transcriptions, or other materials belonging to external repositories.

Users and contributors are responsible for following the terms, licenses, attribution requirements, and reuse restrictions established by the institutions that preserve those materials.

Links to external repositories are provided for research and provenance.

---

## Status

**Active development.**

The current application establishes the research model, source architecture, visual system, and initial structured datasets for the Indo-Caribbean Atlas.

Historical coverage remains intentionally incomplete while the underlying evidence system is developed.

Accuracy, provenance, responsible interpretation, and sustainable expansion take priority over rapidly accumulating unverified records.

---

## Guiding Principle

**Connect the record to the person, the person to the journey, the journey to the place, and every historical claim back to its evidence.**

That is the foundation of the Indo-Caribbean Atlas.
