class Config:
    SQLALCHEMY_TRACK_MODIFICATIONS = False

class DevelopmentConfig(Config):
    ENV = 'development'
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:avilo@localhost/kdprojekt'

class ProductionConfig(Config):
    ENV = 'production'
    SQLALCHEMY_DATABASE_URI = ''
