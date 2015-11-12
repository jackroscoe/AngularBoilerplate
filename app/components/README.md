Components
==========

Each component is treated as a mini Angular app and  will be the static views ,directives and services for that
specific section of the site (think an admin users section, gallery creation section, etc).

Each page should have it’s own subfolder with it’s own controller, services, and HTML files.

Each component here will resemble a mini-MVC application by having a view, controller and potentially services
file(s). If the component has multiple related views, it may be a good idea to further separate these files into
‘views, ‘controllers’, ‘services’ subfolders.

NOTE
----------

Service files are an optional part of each component.