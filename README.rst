####
TRIX
####

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


############
INSTALLATION
############


***********
Development
***********
See https://github.com/devilry/devilry-django/blob/master/trix_devenv/README.md

***********
Production
***********
To install Trix with devilry-deploy
(https://github.com/devilry/devilry-deploy), you will have to add the Trix
repos to your ``buildout.cfg``, add the Trix-apps to your
``INSTALLED_APPS``-setting, and provide a custom URL router that includes the
trix url. We do not have detailed instructions for this yet, but it is exactly
the same as what we do in ``trix_devenv/`` (see the Development section above).
