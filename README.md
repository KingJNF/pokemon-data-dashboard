# Web Development Project 6 - *Pokémon Data Dashboard*

Submitted by: **Jaime Nunez**

**This web app:**
is an interactive Pokémon data dashboard built with React, React Router, and the PokéAPI. The dashboard view features two data visualizations; a pie chart showing the distribution of Pokémon types and a bar chart ranking the top Pokémon by base experience alongside a searchable, filterable list. Clicking any Pokémon navigates to a unique detail page displaying extra stats like HP, Attack, Defense, and abilities. A persistent sidebar appears across both views.**

Time spent: **[3]** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking on an item in the list view displays more details about it**
  - Clicking on an item in the dashboard list navigates to a detail view for that item
  - Detail view includes extra information about the item not included in the dashboard view
  - The same sidebar is displayed in detail view as in dashboard view
- [x] **Each detail view of an item has a direct, unique URL link to that item’s detail view page**
- [x] **The app includes at least two unique charts developed using the fetched data that tell an interesting story**
  - At least two charts should be incorporated into the dashboard view of the site
  - Each chart should describe a different aspect of the dataset

The following **optional** features are implemented:

- [x] The site’s customized dashboard contains more content that explains what is interesting about the data 
  - *A descriptive panel above the charts explains the dataset and suggests which filters to try*
- [x] The site allows users to toggle between different data visualizations
  - *Toggle buttons let users switch between the type-distribution pie chart, the base-experience bar chart, or view both at once*

The following **additional** features are implemented:

* [x] The detail view displays extra stats (HP, Attack, Defense, Height, Weight, and Abilities) not shown on the dashboard
* [x] A "← Back to Dashboard" link on each detail view for easy navigation
* [x] Carried over from Part 1: search bar, type filter, and a base-experience range slider with min/max inputs

## Video Walkthrough

Here's a walkthrough of implemented user stories:

### ▶️ [Click here to watch the Video Walkthrough](https://www.loom.com/share/7654bcc434504e97b5652efca5aa0178)

Recorded with Loom

## Notes

One key challenge was a mix-up where the contents of `main.jsx` and `App.jsx` were swapped, which caused React to never mount and resulted in a blank white page with no console errors. Diagnosing it required checking that the `#root` div was empty in the Elements tab, then restoring each file's correct contents. Another consideration was structuring the app for React Router was lifting the API fetch up to `App.jsx` so both the dashboard and detail views could share the same data, and using the `useParams()` hook to load the correct Pokémon on each detail page.

## License

    Copyright 2026 Jaime Nunez

    Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and limitations under the License.
