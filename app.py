from flask import Flask, render_template, request

from db import create_user, is_user_exist

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('LandingPage.html')

@app.route('/signin')
def signin():
    return render_template('Signin.html')

@app.route('/signup')
def signup():
    return render_template('SignUp.html')

@app.route('/card')
def card():
    return render_template('Card.html')

@app.route('/cardquiz')
def card_quiz():
    return render_template('CardQuiz.html')

@app.route('/maze')
def maze():
    return render_template('Maze.html')

@app.route('/mazequiz')
def maze_quiz():
    return render_template('Mazequiz.html')

@app.route("/login_post", methods=["POST"])
def login_post():
    try:
        data = request.get_json(force=True)
        email = data["email"]
        password = data["password"]
        token = is_user_exist(email, password)

        if token:
            return {"status": "success", "token": token}
        else:
            return {"status": "failed"}
    except Exception as e:
        print(e)
        return {"status": "failed"}

@app.route("/signup_post", methods=["POST"])
def signup_post():
    try:
        data = request.get_json(force=True)
        email = data["email"]
        password = data["password"]
        user = create_user(email, password)

        if user:
            return {"status": "success"}
        else:
            return {"status": "failed"}
    except Exception as e:
        print(e)
        return {"status": "failed"}
