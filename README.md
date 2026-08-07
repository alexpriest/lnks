# lnks

Stateless redirect service on lnks.alxprst.co. Turns clickable https links
into Messages threads (`/m/+E164` -> `imessage://`) and phone calls
(`/c/+E164` -> `tel:`), because link-hosting apps (Attio et al) only
linkify http(s). E.164-only allowlist. Consumed by obsidian-crm's
push_attio.py (Open thread column in Attio). Deployed on Vercel.
