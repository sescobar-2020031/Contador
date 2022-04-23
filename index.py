from flask import Flask, render_template;

app = Flask(__name__)
number = int(0)

@app.route('/', methods=['GET', 'POST'])
def main():
    return render_template('index.html', number=number)

if __name__ == '__main__':
    app.run(debug=True)
