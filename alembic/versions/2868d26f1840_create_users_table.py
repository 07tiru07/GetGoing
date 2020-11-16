"""create users table

Revision ID: 2868d26f1840
Revises:
Create Date: 2020-11-16 14:07:06.296181

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2868d26f1840'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
            'Users',
            sa.Column('email', sa.String(length=150), nullable=False),
            sa.Column('password', sa.String(length=100), nullable=True),
            sa.Column('name', sa.String(length=100), nullable=True),
            sa.Column('country', sa.String(length=100), nullable=True),
            sa.Column('city', sa.String(length=100), nullable=True),
            sa.Column('age', sa.Integer, nullable=True),
            sa.PrimaryKeyConstraint('email', mssql_clustered=True)
        )


def downgrade():
    pass
