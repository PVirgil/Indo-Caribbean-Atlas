# Data dictionary

## Person
`name`, `record`, `sex`, `age`, `origin`, `ship`, `depart`, `arrive`, `assignment`, `source`, `url`, `note`.

For larger ingestion, replace display strings with normalized entities and preserve the source transcription separately.

## Recommended production entities
Person; NameVariant; FamilyRelationship; Voyage; Ship; Place; Estate; Institution; Event; CulturalPractice; Source; Collection; ArchivalItem; Claim; EvidenceLink; BibliographicWork; OralHistory; ConsentRecord.

## Provenance fields
Every extracted claim should support source ID, locator, transcription, normalized value, confidence, reviewer, review date, rights status, and notes.
