from flask import Flask, render_template

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

if __name__ == '__main__':
    app.run(debug=True)
