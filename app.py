from flask import Flask,jsonify,request,render_template
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)

@cross_origin(supports_credentials=True)

@app.route("/")

def home():
    return "Hello World"

@app.route("/test", methods = ["POST", "GET"])
def test():
    if request.method == "GET":
        print ("PRINT HELLO WORLD")
        return jsonify("RETURNING HELLO WORLD")

app.run(port=5000)

