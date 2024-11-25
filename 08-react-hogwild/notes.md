## User stories
1. [] See all hog cards w/name and image on load
    - "ui grid container" on parent of cards
    - "ui eight wide column" on children
2. [] Click a hog and see more details
    - HogDetail will be conditionally rendered as a child of HogTile
3. [] Click a checkbox that will enable a 'greased' filter
4. [] Select a dropdown that will sort hogs by name or weight

## Component Tree
- App [hogs, filter, sort]
    - Nav (rename Header?)
    - Filter (events: update filter and sort on App)
    - HogList (props: filtered and/or sorted list of hogs)
        - HogTile* [toggledetail]
            - HogDetail

**Reasoning:**

I feel like this app doesn't actually have anything that resembles true navigation (it's OK to disagree with me on this, this is an opinion.), so I renamed Nav to Header.

I'd like to keep my components as simple and declarative as possible. Other than the Header, the other major component is App, which will contain all info related to the pigs. The specific pig info includes the list of hogs (HogList). The HogList will contain many pigs, so that will have HotTile children, and the specific details on a Hog (HogDetails).

The Filter is an interesting component. I could have kept the Nav component as the Nav component and put it in there, but that didn't feel right to me. I personally don't see sorting and filtering as navigation. I'd rather they be a child of App in their own component responsible for setting the state that determines what is displayed.

For showing the hog details upon click, I had several options, including:
- click the hog, and then show the details inside the HotTile in addition to the image and name
- click the hog, and make a popup (modal) with the details appear
- click the hog, and then hide the HogList and show only the hog details in App

I chose the first one simply because I liked it. The other choices are equally valid - this is purely preference. There may be other options I didn't think of.

App is going to house all of the app's state. This is because the hogs and their details need to be shared with components which are siblings (HogList and HogDetails). Also, the Filter component needs to set which filter and sorting options are active, and since those options determine which hogs are shown, that state will also need to live in App, so that the results can be shared with HogList.

## Data Shape
```js
{
    name: "Babe",
    specialty: "Being incredibly cute",
    greased: false,
    weight: 2.0,
    "highest medal achieved": "bronze",
    image:
      "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/babe.jpg",
  }
  ```