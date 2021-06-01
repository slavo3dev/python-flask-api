import logging

import flask
from flask import Response
import requests


app = flask.Flask("user_profiles_api")
logger = flask.logging.create_logger(app)
logger.setLevel(logging.INFO)


@app.route("/health-check", methods=["GET"])
def health_check():
    """
    Endpoint to health check API
    """
    app.logger.info("Health Check!")
    return Response("All Good!", status=200)



@app.route("/api/github", methods=["GET"])
def github_search():
    r = requests.get("https://api.github.com/users/mailchimp")
    data = r.json()
    public_repos = "Public Repos: " + str(data["public_repos"])
    followers= "Followers: " + str(data["followers"])

    print("Data: ", public_repos)
    app.logger.info("Github API")
    return Response(public_repos + " | " + followers, status=200)



