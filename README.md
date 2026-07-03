# Web Development Project 5 - *Basic Pokedex*

Submitted by: **Jaime Nunez**

This web app: **displays a searchable, filterable dashboard of Pokémon data fetched from the PokéAPI. Users can search Pokémon by name, filter them by type, and narrow results by a base experience range. The dashboard also presents summary statistics that give an at-a-glance overview of the Pokémon dataset.**

Time spent: **3** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard should display at least 10 unique items, one per row
  - The dashboard includes at least two features in each row
- [X] **`useEffect` React hook and `async`/`await` are used**
- [X] **The app dashboard includes at least three summary statistics about the data** 
  - The app dashboard includes at least three summary statistics about the data, such as:
    - *Total Pokémon (total count of all fetched Pokémon)*
    - *Average Base Experience (the mean base experience across all Pokémon)*
    - *Most Common Type (the mode — the most frequently occurring Pokémon type)*
- [X] **A search bar allows the user to search for an item in the fetched data**
  - The search bar **correctly** filters items in the list, only displaying items matching the search query
  - The list of results dynamically updates as the user types into the search bar
- [X] **An additional filter allows the user to restrict displayed items by specified categories**
  - The filter restricts items in the list using a **different attribute** than the search bar 
  - The filter **correctly** filters items in the list, only displaying items matching the filter attribute in the dashboard
  - The dashboard list dynamically updates as the user adjusts the filter

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously
  - *The name search, type dropdown, and base experience range filter all apply to the list at the same time*
- [x] Filters use different input types
  - *A text input (name search), a dropdown selection (type filter), a slider, and number inputs (base experience) are all used*
- [x] The user can enter specific bounds for filter values
  - *Users can set a specific minimum and maximum base experience using the number input boxes*

The following **additional** features are implemented:

* [x] Each Pokémon row displays its sprite image alongside its name, type, and base experience
* [x] A loading indicator is shown while the API data is being fetched
* [x] The base experience slider and the "Min" number input are synced to the same value

## Video Walkthrough

Here's a video walkthrough of implemented user stories:




## Notes

One challenge I had initially was choosing and finding an active API. I initially chose the Marvel API but it seems it was brought down at least a year ago and is no longer active. I had to search for another API that was free and available. I found the PokeAPI which has stats and information on all the Pokemon. With a current total of 1,025 Pokemon, I kept it simple to only the first 50 Pokemon so as to not overwhelm the system.

Another challenge was the PokéAPI's list endpoint only returns each Pokémon's name and URL, so a second fetch had to be made to each individual URL to retrieve full details like type, base experience, and sprite. This was solved using `Promise.all` to fetch all the details in parallel. Another consideration was keeping the range slider and the minimum number input synchronized, which was handled by binding both to the same piece of state.