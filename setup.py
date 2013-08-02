from os.path import join, dirname
from setuptools import setup, find_packages

this_dir = dirname(__file__)

setup(
    name = 'trix',
    description = "trix",
    license = 'BSD',
    author = 'Sigmund Hansen',
    maintainer = 'Jonathan Ringstad',
    maintainer_email = 'jonathri@student.matnat.uio.no',
    packages = find_packages( exclude=['ez_setup'] ),
    install_requires = [ 
        'setuptools',
        'Django',
        'devilry',
        'devilry_theme',
        'devilry_usersearch',
        'devilry_extjsextras',
        'django_seleniumhelpers',
        'django_extjs4',
        'djangosenchatools',
        'djangorestframework',
        'django_simple_rest',
        'trix_simplified'],
    include_package_data = True,
    long_description = open( join( this_dir, 'README.rst' ) ).read().strip(),
    zip_safe = False,
    classifiers = [
        'Development Status :: 3 - Alpha',
        'Environment :: Web Environment',
        'Framework :: Django',
        'Intended Audience :: End Users/Desktop',
        'License :: OSI Approved',
        'Operating System :: OS Independent',
        'Programming Language :: Python'
    ]
)
