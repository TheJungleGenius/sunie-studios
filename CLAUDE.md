# Project Skills & Guidelines

This project has been enhanced with specialized skills to guide development work.

## Available Skills

### Frontend Design
When building web components, pages, or interfaces, follow the guidance in `.claude/skills/frontend-design/SKILL.md`. 

**Key principles:**
- Create distinctive, production-grade interfaces that avoid generic AI aesthetics
- Commit to a bold aesthetic direction before coding
- Use creative typography, color palettes, and motion
- Implement with meticulousness and intentionality
- Avoid clichés like Inter fonts, purple gradients, and predictable patterns

### Web Application Testing
When testing local web applications, refer to `.claude/skills/webapp-testing/SKILL.md`.

**Key principles:**
- Write native Python Playwright scripts for automation
- Use helper scripts in `scripts/with_server.py` as black boxes
- Always wait for `networkidle` on dynamic apps before inspection
- Follow the decision tree: static HTML → dynamic app running → dynamic app needing server startup
- Use reconnaissance-then-action pattern for discovering and interacting with DOM elements

## Development Context

- **Repository**: SunieStudios photography portfolio website
- **Frontend**: React with Tailwind CSS
- **Stack**: TypeScript, Node.js
- **Focus Areas**: Photography portfolio showcase, UI polish, testing automation

## How to Use These Skills

When working on tasks that involve UI design or web testing:
1. Reference the relevant skill file in `.claude/skills/`
2. Apply the principles and patterns documented there
3. Use the decision trees and examples as guides
4. Ask Claude to apply the skill guidance when requesting work

Example: "Using the frontend-design skill, create a distinctive landing page for the wedding photography section"
