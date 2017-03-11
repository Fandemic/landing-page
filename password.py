import base64
import uuid
import hashlib

def hash_password(password, salt):
    hashed_password = hashlib.sha512(password + salt).hexdigest()
    return hashed_password

def verify_password(password, hashed_password, salt):
    re_hashed, salt = hash_password(password, salt)
    return re_hashed == hashed_passwords
