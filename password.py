import base64
import uuid
import hashlib

def hash_password(password, salt=None):
    if salt is None:
        salt = uuid.uuid4().hex

    hashed_password = hashlib.sha512(password + salt).hexdigest()

    return (hashed_password, salt)

def verify_password(password, hashed_password, salt):
    re_hashed, salt = hash_password(password, salt)

    return re_hashed == hashed_password
