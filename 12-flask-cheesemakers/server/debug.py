#!/usr/bin/env python3
from app import app
from models import *

# alternative to flask shell
if __name__ == "__main__":
    with app.app_context():
        import ipdb
        from app import app
        from models import *

        ipdb.set_trace()
