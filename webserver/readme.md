# Django Web Server

## Requirements

1. Python3

## How to Run the Project

1. Clone the repository on your local system using `git clone git@github.com:TeamKagojerNouka/BCOLBD2021.git`
2. Go to the `webserver/` folder.
3. Create an virtual environment `virtualenv venv`
4. Activate the virtual environment `source venv/bin/activate`
5. Install the reqiured dependencies `pip install -r requirements.txt`
6. Provide an `.env` file in the `webserver\` folder with value for environment variable `DJANGO_SECRET_KEY`
7. Migrate database `python manage.py migrate`
8. Run the server `python manage.py runserver`
