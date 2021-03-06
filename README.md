# The DeathSTARter

[Heroku link][heroku]

[heroku]: https://thedeathstarter.herokuapp.com/
## Minimum Viable Product

The DeathSTARter is a web application inspired by Kickstarter for the citizens of the Star Wars universe. The DeathSTARter allows users to:

- [X] Create an account
- [X] Log in / Log out
- [X] Create, read, edit, and delete projects
- [X] Place project in category and browse projects by category (discover)
- [X] View, comment on, and back a project
- [X] Add photos to projects
- [X] Keep track of funding and funders

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Projects Model and JSON API (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application's root React component. Before building out the
front end, I will begin by setting up a full JSON API for Projects.

[Details][phase-one]

### Phase 2: Flux Architecture and Project CRUD (2.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a Project store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the Projects `Index`, `IndexItem` and `Form`. At the end of Phase 2,
Projects can be created, read, edited and destroyed in the browser. Projects should
save to the database when the form loses focus or is left idle after editing.
Lastly, while constructing the views I will start using basic bootstrap for
styling.

[Details][phase-two]

### Phase 3: Categories, Comments, Backings (2 days)

Phase 3 adds user interaction and organization to Projects. Projects belong to a Category, which has
its own `Index` view. Create JSON API for Categories.

Users can comment on projects.  

Users can back many projects and projects can have many backers.  Projects should display backers and total funding.

Users will be able to search for projects by project title.  Once this is implemented, I will extend to a fuzzy search of project summary/description.

[Details][phase-three]

### Phase 4: User Profiles, Images (2 days)

Users should have a profile page, profile pictures, created projects, and backed projects.  Using (third party API), creators should be able to add images to their projects and updates.

[Details][phase-four]


### Phase 5: Theme, Styling Cleanup, and Seeding (1 day)

In this phase we go from Kickstarter to TheDeathSTARter.  I'll style and seed appropriately!

### Bonus Features (TBD)
- [X] Prettify transitions
- [ ] Likes
- [X] Multiple Images
- [ ] Videos
- [ ] Pagination / infinite scroll for Projects Index
- [ ] Multiple sessions
- [ ] Creators can add updates to Projects
- [ ] Users can comment on updates, reply to other comments

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
