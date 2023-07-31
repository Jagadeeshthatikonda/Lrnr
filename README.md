# Assignment - Lrnr


# **Better things can follow during project**

Below are the things I generally followed in the previous projects.

- **Can use tailwind css**
  - Which can reduce time while coding.
  - Can pass arguments to styles.ts and render tailwind conditionally, helpful for themes,
  - After using tailwindCss we can easily debug the exact location.
- **Can add Avatar into a design system.**
  - Avatar
    - AvatarWithImage
    - AvatarWithIcon
    - AvatarWithText - First letter of FIrstName & FIrst letter of LastName
    - Making design system a separate module is good and can be used across all.
- **Can write custom hook for theme at modular level and access the theme file across all components**
  - light or dark.
- **Should not use hard coded text**
  - Can use i18n for hard coded text that will be displayed in screen
  - Using i18n can maintain text for different languages
- **Styled Components**
  - Which express the detailed information about the displayable element we are using
  - Better for long term growth projects.
- **SVG**
  - Must maintain all svg in separate Icons folder, inside shared folder.
  - Should accept props fill,stroke, width, height, so that can use the same svg for different sizes.
  - Must use **storybook** for the icons, without this if any new developer comes it will be difficult for him to match with figma.
  - Without storybook there may be chances of duplicate files for same svg across 100 svg files or more.
  # **Code Structure**
  Structure We generally follow for product development
  # **WORKSPACE**
  - Module/library1
  - Module2/library2
  - Module3/library3
  - GLobal Level Fragments ……
  - Common Module, which will used by some other modules.
  - shared Module, which will be used by all other modules.
  - **Critical Things To Keep In Mind :**
    - There will be chance of circular dependencies while we using the modules. So must add the files carefully for avoiding the errors.
      **FOR EACH MODULE :**
      Below are the folder structure
  ### Src
  **Components**
  - Common
    - component1
    - component2
    - component3
    - component4…..
    - Which will be used by all components.
  - component1
  - component2….
    **Constants**
    **Stores**
  - Models
    - Contains Models related files
    - Contains Testing model files.
  - store classes
  - fixtures, used to test before backend api is ready.
  - Factories
    - Transformers, which can be used to convert backend data to local model types
      **Utils**
      **types**
      **apis**
  - These where used by all controllers across modules
  - Queries
    - API Name1
      - query.graphql
      - generatedtypes
      - useAPIQuery
      - userAPIResponseHandler
      - fragments…..
  - Mutations
    - API Name2 - mutation - generated types - useAPIMutation - useAPIResponseHandlers - fragments……
      **Context**
      **hooks**
      **Controllers**
  - Controller1
  - Controller2
  - Controller3….
  - We have to make UI independent of Backend triggering API Calls, Every API call must be maintained in hook and called in controllers and on success render UI
    **Index.api.ts**
  - Cache related information
    - usefull for pagination while using cache, network polcies in graphql
      **colour.ts**
  - It contains all frequent colors used in the application with specific name. In our application all hex colors replaced with specific color
    **Git Practices :**
  - Comiting the code for every 40 minutes to 1 hr is better we followed in our workspace.
  - Currently this assignment done at intervals of time in a time, there will be lack of frequent git commits.
