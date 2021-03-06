"""empty message

Revision ID: 858d69ea7ea9
Revises: 4dec8b019cad
Create Date: 2020-06-23 20:31:13.188286

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '858d69ea7ea9'
down_revision = '4dec8b019cad'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('Name', sa.String(length=100), nullable=True),
    sa.Column('Email', sa.String(length=50), nullable=True),
    sa.Column('Password', sa.String(length=50), nullable=True),
    sa.Column('ConfirmPassword', sa.String(length=50), nullable=True),
    sa.Column('Contact', sa.String(length=10), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('Email')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    # ### end Alembic commands ###
