from flask import Flask, request

app = Flask(__name__)

hackathons = {
  "Global Hack Week APIs": {
    "start_date": "2023-04-03 12:00:00",
    "end_date": "2023-04-10 12:00:00",
    "location": "Everywhere, online",
  },
  "Bitcamp": {
    "start_date": "2023-04-07 12:00:00",
    "end_date": "2023-04-09 12:00:00",
    "location": "College Park, MD",
  }
}

@app.route("/")
def index():
  return "<h1>Hello, World!</h1>"

@app.route("/hackathons", methods=["GET", "POST"])
def getHackathons():
  if request.method == "POST":
    hackathons["New Hackathon"] = request.json
  return hackathons

app.run(host='0.0.0.0', port=5000)

# app.run(host='0.0.0.0', port=81)

# if __name__ == '__main__':
#   app.run(debug=True)
