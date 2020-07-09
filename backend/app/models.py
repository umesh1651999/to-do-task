from app import db
from sqlalchemy import ForeignKey


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String(100))
    Email = db.Column(db.String(50), unique=True)
    Password = db.Column(db.String(50))
    ConfirmPassword = db.Column(db.String(50))
    Contact = db.Column(db.String(10))

    __tableName__ = "User"

    def __repr__(self):
        return '<User {}'.format(self.Name)


class Tasks(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50))
    data = db.Column(db.String())
    priority = db.Column(db.String(5))
    userId = db.Column(db.Integer, ForeignKey(Users.id))

    __tablename__ = 'Tasks'

    def __repr__(self):
        return 'Task {}'.format(self.title)

    @property
    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'data': self.data,
            'priority': self.priority,
        }

