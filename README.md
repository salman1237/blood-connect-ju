# Blood Connect JU

Build a VISUAL PROTOTYPE ONLY of "Blood Connect JU," a blood donation

coordination platform for Jahangirnagar University students, faculty,

and staff. Use React + Tailwind.

IMPORTANT — SCOPE FOR THIS PASS

Do NOT connect Supabase or any real backend. Do NOT implement real

authentication, password hashing, email verification, or database

writes. This pass is purely about visualizing every screen in the app

with realistic mock/sample data, so the full product can be reviewed

before any real functionality is built. Buttons like "Sign Up" or

"Login" should simply navigate to the next screen in the flow (no real

validation needed) — use local component state or a simple router,

nothing more.

DESIGN DIRECTION

- Calm, trustworthy "civic-tech" feel, not alarming or overly clinical.

- One confident red as the accent/CTA color against a neutral

  white/off-white + charcoal base. Use red sparingly — primary buttons,

  urgency badges, status tags.

- Mobile-first layouts, clean and highly legible, since most users will

  be on Android phones.

- Bilingual-ready: include a visible language toggle (English / বাংলা)

  in the header, even if only English text is filled in for now.

- Populate every screen with realistic mock data (sample names, blood

  groups, hospitals, timestamps) so nothing looks empty — this is what

  makes a visualization prototype actually useful to review.

BUILD ALL OF THE FOLLOWING SCREENS

Auth flow:

1. Public Landing page — explains what Blood Connect JU is, shows a

   live snippet of active requests, CTAs to "Sign Up" and "Login."

2. Sign Up page — name, university email, password, role selector

   (Student / Staff / Faculty), blood group, hall/department, phone.

3. Login page — email + password, "Forgot password?" link.

4. Email/OTP Verification page — code input screen with a "Resend

   code" link (mock — no real email needs to send).

5. Forgot Password page — email input.

6. Reset Password page — new password + confirm.

7. Complete Profile / Onboarding — a short 2-3 step flow to finish

   setting up blood group, availability, and hall/department if not

   already captured at signup.

Core app screens (post-login):

8. Home / Dashboard — live feed of active emergency requests (blood

   group, units, urgency badge, hospital, time posted, verified badge

   where applicable), filters for blood group and hall/department, and

   a prominent "Post Emergency Request" button.

9. Post Emergency Request form — blood group, units needed,

   hospital/location, urgency level (Critical / Within 24h / Planned),

   optional patient context, contact method.

10. Request Detail page — full request info, status tracker (Open →

    Donor Found → Fulfilled), list of donors who've responded "I can

    donate," and a "Mark as Fulfilled" action for the requester.

11. Donor Search / Directory — searchable, filterable list of donors

    by blood group / hall / department / availability, with eligibility

    (based on last donation date) shown as a badge.

12. Donor Profile (own profile view) — blood group, donation history

    timeline, badges (e.g. "5-Time Donor," "O- Lifesaver"), eligibility

    countdown if recently donated, availability toggle.

13. Notifications page — list of in-app notifications (new matching

    request nearby, someone responded to your request, request

    fulfilled, etc.).

14. Leaderboard — hall/department ranking by confirmed donations, with

    a fun, lightly gamified visual treatment.

15. Settings page — language toggle, notification preferences, edit

    profile, logout.

Admin/Verifier screens:

16. Verifier Queue — list of pending requests awaiting verification,

    with Approve/Reject actions.

17. Admin Dashboard — key stats (donors by blood group, requests

    fulfilled vs expired, average response time) shown as cards/simple

    charts, plus a user management table.

Also include:

18. An empty state (e.g. "No active requests right now" on the

    dashboard) and a loading state treatment, so those visual patterns

    exist even though there's no real data layer yet.

NAVIGATION

Add a simple persistent nav (sidebar on desktop, bottom nav on mobile)

covering Home, Donor Search, Notifications, Leaderboard, Profile — so

every core screen is reachable while clicking through the prototype.

DELIVERABLE

A clickable, fully mock-data-populated prototype covering all 18

screens above, in one consistent visual system.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://blood-connect-ju.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d55d6cc6-2d5d-4fa5-a0ba-55ce3096c8c2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
