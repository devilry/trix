TRIX
----

Trix is a devilry application that gives students a voluntary "workbench"
they can use to keep track of their progress and coverage in a particular
course or topic. 

Trix is a voluntary system that requires minimal effort by the teacher/TAs.
Teachers/TAs are responsible for submitting the weekly exercises into
devilry, which students can then flag as "finished" or "finished with help"
et cetera. Trix can then give the students a statistical summary on
committment over time, knowledge gaps, et cetera.

Teachers can also retrieve aggregated/anonymized statistics on student
committment in different subjects, in order to obtain information on
which topics students are struggling with, or which topics may need
improved coverage.


Originally written for devilry 1.1 in 2010-2011 by Sigmund Hansen.

Ported to devilry 1.2.1.10 in 2013 by Jonathan Ringstad.

INSTALLATION
------------

To add trix to a working devilry installation, add 'trix' to your
INSTALLED_APPS array in your settings (e.g. default_settings.py.)
You will then need to add the following line to your url configuration
(e.g. devilry_developer/dev_urls.py):

url(r'^trix/', include('trix.urls')),
