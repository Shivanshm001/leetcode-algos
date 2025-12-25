from pathlib import Path
from typing import Literal
OUTFILE = Path() / ".." / "completed.txt"

def write_to_outfile(s: str, mode: Literal["write", "append"] = "append"):
    m = "w" if mode == "write" else "+a"
    with OUTFILE.open(m) as f:
        f.write(f"{s}\n\n")

def main():
    write_to_outfile("", "write")
    src_dir = Path() / ".."
    dirs = sorted(d for d in src_dir.iterdir() if d.is_dir())
    
    for _dir in dirs:
        print(_dir)
        files = [
            f.name 
            for f in _dir.iterdir() 
            if f.is_file()
            and f.stat().st_size > 0]
        if "easy" in _dir.name:
            write_to_outfile(f"EASY : ({len(files)})\n{"\n".join(files)}")
        elif "med" in _dir.name:
            write_to_outfile(f"MEDIUM : ({len(files)})\n{"\n".join(files)}")
        elif "hard" in _dir.name:
            write_to_outfile(f"HARD : ({len(files)})\n{"\n".join(files)}")
            


if __name__ == "__main__":
    main()