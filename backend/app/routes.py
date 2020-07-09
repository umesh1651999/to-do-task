import datetime
from functools import wraps

from flask import request, jsonify
import jwt
from app import app, db
from app.models import Tasks, Users


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        print(token)
        if not token:
            return jsonify({'message': "login required"})
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
        except:
            return jsonify({'message': "login again"})
        return f(*args, **kwargs)
    return decorated


def encode(email):
    token = jwt.encode({'email': email, 'exp': datetime.datetime.utcnow()+datetime.timedelta(minutes=120)}, app.config['SECRET_KEY'])
    return token


@app.route('/addTask', methods=['POST'])
@token_required
def add_task():
    print(request.args.get('title'))
    print(request.args.get('data'))
    title = request.args.get('title')
    data = request.args.get('data')
    priority = request.args.get('priority')
    user_id = request.args.get('userId')
    task = Tasks(title=title, data=data, priority=priority, userId=user_id)
    db.session.add(task)
    db.session.commit()
    return "Data Added"


@app.route('/getAllTasks', methods=['POST'])
@token_required
def get_all_tasks():
    user_id = request.args.get('userId')

    tasks = Tasks.query.filter_by(userId=user_id).all()
    if tasks:
        print(tasks)
        return jsonify([task.serialize for task in tasks])
    else:
        return "No task at the moment..."


@app.route('/deleteTask', methods=['POST'])
@token_required
def delete_task():
    task_id = request.args.get('id')
    Tasks.query.filter_by(id=task_id).delete()
    db.session.commit()
    return "Task Deleted"


@app.route('/signup', methods=['POST'])
def create_user():
    name = request.args.get('name')
    email = request.args.get('email')
    password = request.args.get('password')
    confirm_password = request.args.get('confirmPassword')
    contact = request.args.get('contact')
    user = Users(Name=name, Email=email, Password=password, ConfirmPassword=confirm_password, Contact=contact)
    db.session.add(user)
    db.session.commit()
    return "SignIn success"


@app.route("/login", methods=['POST'])
def check_user():
    email = request.args.get('email')
    password = request.args.get('password')
    user = Users.query.filter_by(Email=email, Password=password).first()
    if user:
        print("found")
        token = encode(email)
        return jsonify({'token': token.decode('UTF-8'), 'name': user.Name, 'id': user.id})
    else:
        print("not found")
        return "Wrong user name and password"
