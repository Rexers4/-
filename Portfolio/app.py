from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = 'your_secret_key'

# Главная страница
@app.route('/')
def index():
    return render_template('index.html')

# Страница "О себе"
@app.route('/about')
def about():
    return render_template('about.html')

# Страница "Навыки"
@app.route('/skills')
def skills():
    return render_template('skills.html')

# Страница "Проекты"
@app.route('/projects')
def projects():
    return render_template('projects.html')

# Страница "Контакты" с формой обратной связи
@app.route('/contacts', methods=['GET', 'POST'])
def contacts():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        # Здесь можно добавить отправку данных на email или сохранение в БД
        flash('Сообщение успешно отправлено!', 'success')
        return redirect(url_for('contacts'))
    return render_template('contacts.html')

if __name__ == '__main__':
    app.run(debug=True)