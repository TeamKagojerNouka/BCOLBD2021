import subprocess
import os
from .settings import BASE_DIR


def run_script(*args):
    path_to_script = os.path.join(BASE_DIR, '../fabric/app.js')
    p = subprocess.Popen(
        ['node', path_to_script, *args],
        stdout=subprocess.PIPE
    )

    return p.stdout.read().decode("utf-8") 

# result = run_script('asset-1')
