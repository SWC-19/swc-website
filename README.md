# Stanley Wrestling Club website

Public website for the Stanley Wrestling Club (SWC), Stanley, ND.
Live at https://swc-19.github.io/swc-website/

## How it works
- The whole site is one long page in one file, `index.html`. Photos are in `photos/site/`.
- Sections, top to bottom: hero with countdown and four quick boxes (Register, Pay fees, Calendar, Tournaments), Season dates, About the club, Get started (four steps), Schedule (next practice, meets and tournaments, season calendar), Pay, Parents, Photos, Donate/sponsor, Contact.
- It is hosted free with GitHub Pages from the `main` branch. Changes go live about a minute after they reach `main`.
- There is no server and no database. Nothing about families is stored here.

## How we make changes
- Make each change on a branch, check it at phone and computer sizes, then merge it into `main`. No need to ask first.
- After it is live, show a preview and say in plain words what changed.
- If something you are told is unclear (a date, a name, a place), ask instead of guessing.

## Where things live
- **Registration:** Tally form https://tally.so/r/7Xq0xA ("Registration & Payment 2026-27") (one form per family, up to 4 wrestlers; the waiver is signed on the form; registration, uniforms and dues are paid by card at the end of the form). Every Register button on the site points here. Submissions are viewed in the Tally account, not on this site.
- **Tournament payments:** Tally form https://tally.so/r/YjP8xB ("Tournament Entries 2026-27"). $25 per wrestler per tournament; families tick tournaments for up to 4 wrestlers and pay once. The thank-you screen tells them to take a screenshot as their record. Every tournament Pay button points here (`PAY_LINKS` at the bottom of `index.html`). When a tournament is added or removed, change it in the form too.
- **Coach check-in form:** https://tally.so/r/QoK1qk
- **Team messages:** the Heja app (team code GR986946) and the Facebook page facebook.com/stanleywrestlingclub
- **Club email:** stanleywrestlingclub@gmail.com
- **Practice location:** 104 S Main St, Stanley, ND 58784. Practice is drop-off only.

## Season dates
- **Preseason:** starts Mon Nov 9, 2026. Mon/Tue/Thu 4:00-5:15 PM. 2nd-5th grade with 2+ years of experience. No fee. USA Wrestling membership required.
- **Advanced boys and girls:** start Mon Jan 4, 2027.
- **Beginners:** start Tue Feb 2, 2027.

## Fees (from the registration form)
- Uniform set: $50 per wrestler, one time (not needed for 6th graders who wrestled with the high school)
- January dues: $50 per advanced wrestler
- February and March dues: $100 a month for the first wrestler, $75 for each additional
- 7th-12th graders: no fees
- Family fee if not volunteering: $300
- Tournaments: $25 per wrestler

If a price changes in the form, change it in the Pay section and the "What does it cost after preseason?" answer too.

## Practice times
| Month | Group | Days and times |
|---|---|---|
| Nov-Dec 2026 | Preseason | Mon, Tue, Thu 4:00-5:15 PM (dates listed by hand; no practice Nov 26, Dec 3 and Dec 10 (dual nights), Dec 24, 29, 31) |
| Jan 2027 | Advanced girls | Mon, Tue, Thu 4:00-5:15 PM |
| Jan 2027 | Advanced boys | Mon, Tue, Thu 5:15-6:30 PM |
| Feb-Mar 2027 | Beginners | Tue, Thu 4:00-4:45 PM (from Feb 2) |
| Feb-Mar 2027 | Advanced girls | Mon 4:00-5:15 PM; Tue, Thu 4:45-6:00 PM |
| Feb-Mar 2027 | Advanced boys | Mon 5:15-6:30 PM; Tue, Thu 6:00-7:15 PM |

Every Mon/Tue/Thu in January (from Jan 4), February and March is marked as a practice day. No days off have been given yet.

## Meets and tournaments
- Dec 3 and Dec 10: Varsity duals at Stanley High School (free to attend)
- Dec 30-31: Rumble on Red, Fargo ($25 per wrestler)
- Fri Feb 26: NDUSA Team North Dakota Qualifier, Bismarck
- Fri Feb 26: Dakota Rattlers Individuals, Center
- Sat Feb 27: Bismarck Gorilla Wrestling "The Gorilla", Bismarck
- Sat Mar 6: Dakota Rattlers Individual Tournament, Minot
- Mar 13-14: Brodie Gorder Memorial Iron Eagle Tournament, Sidney, MT
- Mar 26-27: NDUSA Youth Folkstyle State Duals and Individual Championships, Bismarck
- Apr 2-4: Heartland USA National Duals, Council Bluffs, IA (qualifiers only)
- Apr 9-11: Black Hills Nationals (AAU card required; families register and pay on their own)

## Changing dates (calendar, countdown, next practice)
All three read from the script near the bottom of `index.html`:
- `EVENTS`: season starts, duals, tournaments and deadlines. The season calendar shows them, and the countdown at the top of the page counts down to the next one. Colors: `s` season starts (green), `d` varsity dual (red), `r` tournament (gold), `k` deadline (purple). Months are numbered from 0 (Jan = 0, Dec = 11). Use `e` for the last day of a multi-day event.
- `PRACTICE`: which days are practice days (blue on the calendar). Nov and Dec are listed by hand; Jan-Mar are every Mon/Tue/Thu.
- `SCHED`: the practice times listed under each month.
- `CAL_MONTHS`: which months have a button above the calendar (now Nov-Feb; add `[2027,2]` to bring March back).
- The "Next practice" card follows `PRACTICE`; its times come from the `ptimes` function.

The meets list in the Schedule section is plain HTML. When a tournament changes, update it there and in `EVENTS`.

## Still to do
- Practice schedule after March, and any days off (holidays, tournament weekends).
- Not built yet: volunteer sign-up page and admin roster page. These need fee amounts and a club payment account first.
