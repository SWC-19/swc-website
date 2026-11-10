# Stanley Wrestling Club website

Public website for the Stanley Wrestling Club (SWC), Stanley, ND.
Live at https://stanleywrestlingclub.org (domain bought on Cloudflare; DNS: four GitHub A records + www CNAME to swc-19.github.io, all "DNS only"). Old address https://swc-19.github.io/swc-website/ forwards there.

## How it works
- The whole site is one long page in one file, `index.html`. Photos are in `photos/site/`.
- Photos appear at the top (hero), in About, above the meets list, in Parents, and in the Photos gallery. Tapping any photo opens a full-screen viewer that steps through every photo in the gallery, uncropped. Full-size photos (photo-28 to photo-31) look best in the big spots.
- Sections, top to bottom: hero with countdown and four quick boxes (Register, Pay fees, Calendar, Tournaments), Season dates, About the club, Get started (four steps), Schedule (next practice, meets and tournaments, season calendar), Pay, Parents, Photos, Donate/sponsor, Contact.
- It is hosted free with GitHub Pages from the `main` branch. Changes go live about a minute after they reach `main`.
- There is no server and no database. Nothing about families is stored here.

## How we make changes
- Make each change on a branch, check it at phone and computer sizes, then merge it into `main`. No need to ask first.
- After it is live, show a preview and say in plain words what changed.
- If something you are told is unclear (a date, a name, a place), ask instead of guessing.

## Where things live
- **Registration:** Tally form https://tally.so/r/7Xq0xA ("Registration & Payment 2026-27") (one form per family, up to 4 wrestlers; the waiver is signed on the form; registration, uniforms and dues are paid by card at the end of the form). Every Register button on the site points here. Submissions are viewed in the Tally account, not on this site.
- **Tournament payments:** Tally form https://tally.so/r/YjP8xB ("Tournament Entries 2026-27"). Each tournament has its own price (board decision, Nov 2026). Families tick tournaments for up to 4 wrestlers and pay once. Families pay first, then sign up for each tournament on Heja. The thank-you screen tells them to take a screenshot as their record. The site has one "Pay tournament entries" button above the meets list that points here; tournaments open for payment show a red PAY button, the rest "Fee TBA". When a tournament is added, add it to the form too. Finished tournaments come off the form and the website list (see below).
- **Pay Dues:** Tally form https://tally.so/r/yXMWKp ("Pay Dues 2026-27"). For paying dues after registration day. Parents pick each wrestler and the months they are paying for (January $50 for advanced wrestlers; February and March, beginners and advanced, $100 for the first wrestler and $75 for each additional). The form adds up the total and takes card payment. The "Pay dues" button in the Pay section and the cost answer in Common questions point here. Sibling pricing only applies within one payment: if a family pays a month for one kid at registration and later pays the same month for a sibling alone, the form charges $100, not $75. Decision: leave it; the form tells families to pay siblings together, and the admins refund $25 if it happens. Name boxes ask parents to spell names as on registration (the Dues sheet matches by name).
- **Payment sheets (Google Sheets, club Google account):** Tally adds every payment to a sheet automatically.
  - Tournaments: https://docs.google.com/spreadsheets/d/1R6ds7kFWBCWtEkpluY1bugLDG_U0koYtZ6sclMEZ79U/edit (one tab per tournament)
  - Dues: https://docs.google.com/spreadsheets/d/15ZdCh1_cZIWhHslqbluRfN-WqeypcLbM_hNiITNAk4w/edit (January, February, March tabs)
  - Each tab lists the kids who paid, A-Z by last name, with parent, date paid and receipt number. The tabs read from "Sheet1" (grey tab), where Tally puts the raw rows. Don't edit or rename Sheet1. Hidden cell H1 on each tab is the tournament or month number on the form.
  - Tournament tabs also show each kid's USA Wrestling #, looked up by name from the registration sheet (https://docs.google.com/spreadsheets/d/1SrZF5iHKCkA1_b4dLDNJKtOyVwTmrrroLOCKp1i6xBk/edit, "Wrestlers" tab) through a hidden "Roster" tab. "Not found - check name" means the name on the payment form doesn't match registration.
  - Tournament tabs: a paid kid's row turns orange when a Heja list is pasted and they're not on it (paid but not marked going).
  - Tournament tabs also show birthday, grade, boy/girl and weight (from registration), and a "Heja check" box (columns N-T): paste the Heja sign-up names in the yellow column and it lists who signed up but hasn't paid (with parent and phone) and who paid but isn't on Heja. Hidden cell M1 on each tab is the tournament number. Hidden "Weights" tab imports the registration master sheet.
  - Tournament sheet "Totals" tab: wrestlers paid and $ per tournament.
  - Dues sheet "Still owes" tab: every wrestler age 5 through 6th grade from registration with a month not paid (NOT PAID, balance owed from registration, or fee assistance), with parent and phone. Coach families show no dues; beginners skip January. Hidden "Reg" tab imports the registration master sheet. Dues "Totals" tab: wrestlers and $ per month from the Pay Dues form.
  - Tournament sheet "To do" tab (first, blue): dues owed (read from the Dues sheet's Still owes tab through the hidden "DuesLink" tab), kids signed up on Heja but not paid for upcoming tournaments, and names that don't match registration. Tournament end dates are written into its formulas (March TBD ones (Tioga, Stanley, Grenora) use Mar 31); if a date changes, update the To do formulas.
  - Registration sheet (https://docs.google.com/spreadsheets/d/1SrZF5iHKCkA1_b4dLDNJKtOyVwTmrrroLOCKp1i6xBk/edit) orange tabs: "Uniforms" (sizes per kid + order counts), "Volunteers" (families per job, and who pays the $300 fee), "Medical" (allergies/medical notes highlighted, parent and emergency contacts; print for tournaments).
  - Dual teams have their own sheet, "SWC Dual Teams" (https://docs.google.com/spreadsheets/d/19NTvBrCUPDFQLQKkS08Dlw7b1YxPGI7CBSpUvnjm4Ak/edit). First tab "Singlets for Cassie": singlet counts by size for every team and a who-gets-what list. Then Rattlers Duals, Brodie Gorder Duals, State Duals (Boys + Girls) and NWC Duals (mixed): 20 weight-class rows + Alternate 1-3; columns Dual weight, Wrestler (dropdown from hidden "Lists", built from hidden "Roster" = registration Wrestlers tab via IMPORTRANGE), Kid's weight (typed), Singlet size (from the editable "Singlet sizes" tab). The coach does all entry. Sizes follow Takedown Sportswear's charts (takedownshop.com): boys use the men's singlet chart, girls the women's chart (labels "Boys YXS"... / "Girls YS"..., the same names parents pick on the registration form, where each wrestler's singlet list only shows the sizes for the boy/girl answer), NWC picks per kid by boy/girl from the roster; Cassie's tab lists only sizes actually needed. Weight classes still to fill in.
  - If a tournament is added to the form, Tally adds new columns to Sheet1 and the tournament tabs need updating.
- **Coach check-in form:** https://tally.so/r/QoK1qk
- **Team messages:** the Heja app (team code GR986946) and the Facebook page facebook.com/stanleywrestlingclub
- **Coaches:** John Batteiger (head coach), Jake Carpenter, Matt Ruland, Dusty Fladeland, Chandler Meiers, Rocky Fladeland, Jay Sorenson. Headshots in `photos/coaches/` were cut from the team photo (`photos/site/photo-28.jpg`); swap in sharper photos with the same file names any time.
- **Club email:** stanleywrestlingclub@gmail.com
- **Practice location:** 104 S Main St, Stanley, ND 58784. Practice is drop-off only.

## Season dates
- **Preseason:** starts Mon Nov 9, 2026. Mon/Tue/Thu 4:00-5:15 PM. 2nd-6th grade with 2+ years of experience. Runs Nov 9 - Dec 31. No fee. USA Wrestling membership required.
- **Advanced boys and girls:** Tue Jan 5 - Mar 31, 2027. 2nd-6th grade with 2+ years of experience.
- **Beginners:** Tue Feb 9 - Mar 31, 2027. Age 5 to 6th grade. First- and second-year wrestlers. Tue/Thu.

## Fees (from the registration form)
- Uniform set: $50 per wrestler, one time (not needed for 6th graders who wrestled with the high school)
- January dues: $50 per advanced wrestler
- February and March dues: $100 a month for the first wrestler, $75 for each additional
- 7th-12th graders: no fees
- Family fee if not volunteering: $300
- Tournaments: each tournament has its own price (see the tournament form notes)

If a price changes in the form, change it in the Pay section and the "What does it cost after preseason?" answer too.

## Practice times
| Month | Group | Days and times |
|---|---|---|
| Nov-Dec 2026 | Preseason | Mon, Tue, Thu 4:00-5:15 PM (dates listed by hand; no practice Nov 26, Dec 3 and Dec 10 (dual nights), Dec 24, 29, 31) |
| Jan 2027 | Advanced girls | Mon, Tue, Thu 4:00-5:15 PM |
| Jan 2027 | Advanced boys | Mon, Tue, Thu 5:15-6:30 PM |
| Feb-Mar 2027 | Beginners | Tue, Thu 4:00-4:45 PM (from Feb 9) |
| Feb-Mar 2027 | Advanced girls | Mon 4:00-5:15 PM; Tue, Thu 4:45-6:00 PM |
| Feb-Mar 2027 | Advanced boys | Mon 5:15-6:30 PM; Tue, Thu 6:00-7:15 PM |

Every Mon/Tue/Thu in January (from Jan 5), February and March is marked as a practice day, except Thu Jan 7 (varsity dual night, no practice). No practice on varsity dual nights.

## Meets and tournaments
- Dec 3 and Dec 10: Varsity duals at Stanley High School (high school events; listed so kids come support the team)
- Thu Jan 7: Varsity dual and senior night at Stanley High School
- Dec 30-31: Rumble on Red, Fargo. Only the Individual (Thu Dec 31) is on the payment form: $40, pay online by Thu Dec 3. Weigh-ins Wed Dec 30, 2-6 PM. Online payment closes at midnight going into Dec 4; on Dec 4 the admins register everyone who paid (Tournament sheet, "Rumble on Red" tab) at the tournament's $40 early price; anyone later registers themselves through the tournament (fargorumble.com). Duals (Dec 30) are paid by the club, not parents.
- Sat Feb 6: Williston Tournament, Williston, ND
- Fri Feb 26: NDUSA Team North Dakota Qualifier, Bismarck (top 2 qualify for Heartland National Duals)
- Fri Feb 26: Center, ND
- Sat Feb 27: Bismarck Gorilla Wrestling "The Gorilla", Bismarck
- Fri Mar 5: Dakota Rattlers Dual Tournament, Minot (no entry fee, not on the payment form)
- Fri Mar 5: Velva Individual Tournament, Velva, ND
- Sat Mar 6: Dakota Rattlers Individual Tournament, Minot
- Fri Mar 12: DLB Tournament, Berthold, ND
- Sat Mar 13: Kenmare Tournament, Kenmare, ND
- Mar 13-14: Brodie Gorder Memorial Iron Eagle Tournament, Sidney, MT (Sat team duals no fee; Sun individual $25)
- Tioga Tournament, Tioga, ND: March, date TBD. Not on the calendar until it has a date.
- Grenora Tournament, Grenora, ND: March, date TBD (on the site list, the "Date TBD" box under the calendar and the payment form upcoming list; data-end set to Mar 31 until a date is known).
- Stanley Wrestling Tournament, Stanley, ND: March, date TBD. Price set when the flyer comes in. Not on the calendar until it has a date.
- Mar 26-27: NDUSA Youth Folkstyle State Duals and Individual Championships, Bismarck
- Apr 2-4: Heartland USA National Duals, Council Bluffs, IA (only for wrestlers who place top 2 at the NDUSA Team ND Qualifier). Weigh-ins Fri Apr 2; duals Sat-Sun Apr 3-4. Mid-America Center: Elementary, Middle School, Girls 1st-8th. Iowa West Field House: High School boys and girls.
- Apr 9-11: Black Hills Nationals, James Kjerstad Event Center, 915 E. Centre Street, Rapid City, SD. Fri Apr 9 weigh-ins 12U and under; Sat Apr 10 free clinic and competition 12U and under; Sun Apr 11 weigh-ins and competition 14U and up (times TBA). AAU card required; families register and pay on their own.

## Changing dates (calendar, countdown, next practice)
All three read from the script near the bottom of `index.html`:
- `EVENTS`: season starts, duals, tournaments and deadlines. The season calendar shows them, and the countdown at the top of the page counts down to the next one. Colors: `s` season starts (green), `d` varsity dual (red), `r` tournament (black), `k` deadline (purple). Months are numbered from 0 (Jan = 0, Dec = 11). Use `e` for the last day of a multi-day event.
- `PRACTICE`: which days are practice days (blue on the calendar). Nov and Dec are listed by hand; Jan-Mar are every Mon/Tue/Thu.
- `SCHED`: the practice times listed under each month.
- `CAL_MONTHS`: which months have a button above the calendar (now Nov-Mar).
- The "Next practice" card follows `PRACTICE`; its times come from the `ptimes` function.

The meets list in the Schedule section is plain HTML. When a tournament changes, update it there and in `EVENTS`.

## Still to do
- Practice schedule after March, and any days off (holidays, tournament weekends).
- Not built yet: volunteer sign-up page and admin roster page. These need fee amounts and a club payment account first.

## Coming soon mode (before launch)
Right now the live site (index.html) shows a "Coming soon" page.
The full website lives at a hidden preview address: https://stanleywrestlingclub.org/preview-d4597c3d/
(not linked anywhere, and search engines are told not to list it). Make all site tweaks in preview-d4597c3d/index.html.
To launch: copy preview-d4597c3d/index.html over index.html, change "../photos/" back to "photos/",
remove the noindex line, delete the preview folder, commit and push.
The Tally forms (Registration, Pay Dues, Tournament) are open, so old flyer QR codes go straight to them.

## Tournament payment form: per-tournament prices
- Each tournament is one checkbox per wrestler (4 wrestlers) and adds its own price through a CALCULATE rule on the total.
- Each checkbox shows a picture. Full flyers are too small to read on a phone, so the form uses a simple card per tournament (logo + name + date + place, no price because prices can change): `flyers/<tournament>-card.jpg` (Rumble: `rumble-on-the-red-card2.jpg`; use a new file name when a card changes so phones don't show the old cached one), built at 1200x800. The full flyer (`flyers/<tournament>.jpg`, rendered sharp from the PDF) is linked from the website schedule as "See the flyer".
- Finished tournaments drop off (user decision Nov 10): on the website each tournament row has `data-end="YYYY-MM-DD"` (its last day; March TBD ones (Tioga, Stanley, Grenora) use Mar 31) and a small script hides it the day after. On the payment form, each tournament closes at its pay-by date; a weekly scheduled task (Sunday 8:47 PM Central, until Apr 12, 2027) also removes any finished tournament from the checkboxes and the upcoming list. The Tournament sheet tabs stay (girls scroll).
- Website schedule: a tournament open for payment gets a red PAY button (`<a class="pill paylink" href="https://tally.so/r/YjP8xB">PAY</a>`); the rest show "Fee TBA". When a tournament closes, swap its button for a "Closed" pill.
- The form shows an "Upcoming tournaments" text list (Tally block cfbcec3d-5fef-439d-bf4c-c3391a70bf0e) of the tournaments that aren't open for payment yet. When one opens, take it off that list.
- Tournaments without a price yet are hidden: Wrestler 1's options are hidden directly, Wrestlers 2-4 by one HIDE rule ("How many wrestlers IS NOT EMPTY"). To add a tournament: set its label and price, unhide its Wrestler 1 option, remove its three options from that HIDE rule, change its four "+ 25" rules to the real price, update its review/receipt text lines, and set its Amount formula on the Tournament sheet Totals tab.
- Rumble on the Red: $40, closes at the end of Thu Dec 3. A one-time scheduled message fires into the build session at 12:00 AM Central on Dec 4 to hide Rumble on the form (or close the whole form if no other tournament is open yet) and mark it closed on the website. Totals tab counts Rumble at $40.

## Donations and sponsors
- The club's donation/sponsor letter is at `forms/swc-donation-form.pdf` (https://stanleywrestlingclub.org/forms/swc-donation-form.pdf). Donate and sponsor are one website card (matching the letter, which leads with sponsor levels and treats any amount as a tax-deductible gift). The "Become a sponsor" card lists the levels from it (Gold $1,000, Silver $500, Bronze $250, Athlete $100), links the PDF, and says checks go to Stanley Wrestling Club, PO Box 268, Stanley, ND 58784 (mail only, not handed to a coach).
- The "Be our first sponsor" banner was removed (the club already has sponsors). When the user sends the sponsor names/logos, add a "Thank you to our sponsors" list there.
- No online giving on the site for now (user, Nov 2026: card fees would take part of each gift). Donations are by check with the form only.

## Schedule section
- Clicking Schedule lands on the "Next practice" card, then a practice schedule (one card per part of the season: Preseason, January, February & March) listing each group, days and times, with the "Next practice" card (filled in by script) on top, then the month calendar (each date shows what is on it: practice groups with start times (Preseason "Practice 4:00" blue; Jan-Mar "Girls" magenta, "Boys" blue, "Beginners" teal, from pchips() in the script; end times show on computers only), varsity duals in red, tournaments in black, start dates in green; short names come from each EVENTS entry's `s` field; today has a yellow outline), then the tournament list. If practice times change, update both these cards and the calendar data (SCHED / ptimes in the script).

## Club board
- Lionie Fladeland, Danielle Fladeland, Jake Carpenter (no titles given). Shown on the website under the coaches ("Club board" box) and on page 2 of the parent handbook.

## Parent handbook
- Source: `handbook/handbook.html` (8 letter pages, club colors). Build the PDF with Playwright: open the file and `page.pdf({format:'Letter',printBackground:true,preferCSSPageSize:true})`. Facts come from the website (schedule, fees, contacts, tournament process). Draft sent to the user Nov 10 for review (PDF at handbook/SWC-Parent-Handbook.pdf); linked from the website (Parents section banner and Forms & links, the Register step, the footer) and from the registration thank-you screen (step 5). Youth headgear is optional; most tournaments use practice weigh-ins (exceptions: Rumble, ND Qualifier, State, Black Hills); brackets on FloWrestling.
