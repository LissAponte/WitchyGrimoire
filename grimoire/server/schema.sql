CREATE TABLE IF NOT EXISTS notes (
  id         SERIAL PRIMARY KEY,
  section    TEXT        NOT NULL,
  title      TEXT        NOT NULL DEFAULT '',
  body       TEXT        NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS notes_section_created_idx ON notes (section, created_at DESC);
