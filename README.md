Cancer Clinical Drug Trial Search Tool
======================================

Lightweight scaffolding and build tools to quickly and easily develop a web application.

  - transpiles scss into css
  - transpiles es6 and jsx into es5
  - concatenates all required/imported modules together into one minified file
  - runs a simple express server that is deployable on heroku

Community
==========

    - So this tool addresses the problem that people with cancer do not always know the clinical drug trials available to participate in. Here a user can search by a few key features about them and their cancer to find studies the user may be eleigible for.

Tech Stack
==========

    - This is app uses Backbone.js to handle the models and controller, and Backbone.js to render the views. The data is retrieved using the [https://clinicaltrialsapi.cancer.gov/v1/](National Cancer Institute Beta API)

Creativity
==========
    -Since this is a beta API it is obvious that there aren't too many tools like this out there already. Patients rely on this kind of information from their oncologists and really have no idea how to begin finding this data.

Team
=====
    -Caitlin Flattery
    -Sam Pellegrene
    -Emily Wivell
    -James O'Connor
    -Matt Zwick
    -Jenessa White
    -Justin Richards (provided boilerplate)

Deploying
==========
    - [https://nci-drug-trial-search.herokuapp.com/](Here)
    -The user will start on the landing page and then click on the search button in the tool bar. They will see a list of all the trials available and a form to input their information to narrow it down to relevant drug trials.
