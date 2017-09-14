ANGULAR MATERIAL NOTES
UI Component Library for AngularJS
Built in responsive
 - Built in flex box is nice
 - we had some troubles with tables being a fixed width (13columns etc) preventing some responsiveness
Minimal CSS footprint

ADS group project shortcomings
 - utilize more appropriate Material tag attributes
  - md-toolbar
  - md-list could replace our tables
    (md-table is not a thing quite yet)
 - Actually set up Aria labels
 - Redundant html tag attributes
    + Specifying default values or asserting too much flex control
 - copied compiled html with Material classes - redundant, or possibly counterintuitive
 - defining flex value when best to leave blank for dynamic flex
