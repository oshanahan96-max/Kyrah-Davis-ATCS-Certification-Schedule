# Certification Dashboard – Netlify setup

Check-offs save online (Netlify Blobs), so they sync between Kyrah's phone and laptop and you can open the same link to see her progress.

## One-time setup (about 10 minutes)

Drag-and-drop deploys do NOT run the save function. Use one of these:

**Option A – GitHub (easiest to update later)**
1. Create a GitHub repo and upload everything in this folder.
2. In Netlify: Add new site → Import an existing project → pick the repo.
3. Leave build settings as they are (netlify.toml handles it) → Deploy.

**Option B – Netlify CLI**
1. Install Node.js, then run: `npm install -g netlify-cli`
2. In this folder: `npm install`, then `netlify login`, then `netlify deploy --prod`

Blobs storage turns on automatically. No database or keys needed.

## Check it works
Open the site, tick a task, then open the link on another device. The note under the calendar should read "Check-offs saved online".

## Reuse for another inspector
Edit `schedule-data.json` (name, contact, courses, tasks) and redeploy.
For several inspectors at once, give each a separate copy of the site, or add a unique `"id"` field to each data file so their progress is stored separately.

## Note
Anyone with the link can view and tick items. Don't share it publicly.
