# Decisions

Date: 2026-09-07
Decision: Create only project instructions in `doc/` and do not scaffold source code, styles, package files, or page sections.
Rationale: The user explicitly requested "Створи тільки інструкції більше не чого."
Trade-offs: The target folder now has planning documentation, but the actual front-end project still needs a confirmed stack and a separate implementation step.

Date: 2026-09-07
Decision: Treat the stack and script typing as `[NEEDS CONFIRMATION]`.
Rationale: The request did not specify Webpack, React, Angular, JavaScript, or TypeScript for this new Wander10 project.
Trade-offs: This avoids inventing technical choices, but setup commands and starter files cannot be finalized yet.

Date: 2026-09-07
Decision: Store the design description as implementation guidance rather than generating HTML/CSS from it.
Rationale: The active `frontend-doc-agent` instructions require design planning details to be stored in documentation until the user requests a specific implementation step.
Trade-offs: The visual direction is preserved carefully, but no visible website exists yet.
