#!/usr/bin/env python3
"""Convert HEIF/HEIC images into web-usable JPEGs.

iPhones save photos as HEIF/HEIC, which browsers can't display. This script
decodes them (orientation already applied by pillow-heif), downscales them to a
sane size for the web, and writes a sibling ``.jpg`` next to each source.

Usage
-----
    python scripts/convert_heif.py                # converts everything in img/mobot/
    python scripts/convert_heif.py img/mobot      # a directory (non-recursive)
    python scripts/convert_heif.py a.heif b.heic  # specific files
    python scripts/convert_heif.py DIR --max-edge 2000 --quality 85

Requirements
------------
    pip install pillow pillow-heif
"""
import argparse
import glob
import os
import sys

try:
    import pillow_heif
    pillow_heif.register_heif_opener()
    from PIL import Image
except ImportError:
    sys.exit("Missing dependencies. Run:  pip install pillow pillow-heif")

HEIF_EXTS = (".heif", ".heic")
DEFAULT_DIR = os.path.join("img", "mobot")


def iter_sources(paths):
    """Yield every HEIF/HEIC file implied by the given paths."""
    for p in paths:
        if os.path.isdir(p):
            for entry in sorted(os.listdir(p)):
                if entry.lower().endswith(HEIF_EXTS):
                    yield os.path.join(p, entry)
        elif p.lower().endswith(HEIF_EXTS):
            yield p
        else:
            print(f"  skipping (not HEIF/HEIC): {p}")


def convert(src, max_edge, quality):
    """Convert one HEIF/HEIC file to a sibling .jpg; return the output path."""
    out = os.path.splitext(src)[0] + ".jpg"
    # pillow-heif applies the camera orientation on decode, so the pixels are
    # already upright; we must NOT exif_transpose again or we'd rotate twice.
    with Image.open(src) as image:
        image = image.convert("RGB")
        w, h = image.size
        scale = min(1.0, max_edge / max(w, h))
        if scale < 1.0:
            image = image.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
        image.save(out, "JPEG", quality=quality, optimize=True, progressive=True)
    print(f"  {os.path.basename(src)} ({w}x{h}) -> "
          f"{os.path.basename(out)} ({image.size[0]}x{image.size[1]}, "
          f"{os.path.getsize(out) // 1024} KB)")
    return out


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__,
                                     formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("paths", nargs="*", default=[DEFAULT_DIR],
                        help=f"HEIF/HEIC files or directories (default: {DEFAULT_DIR})")
    parser.add_argument("--max-edge", type=int, default=2400,
                        help="downscale so the longest edge is at most this many px (default: 2400)")
    parser.add_argument("--quality", type=int, default=88,
                        help="JPEG quality, 1-95 (default: 88)")
    args = parser.parse_args(argv)

    sources = sorted(set(iter_sources(args.paths)))
    if not sources:
        print("No HEIF/HEIC files found.")
        return 1

    print(f"Converting {len(sources)} file(s):")
    for src in sources:
        convert(src, args.max_edge, args.quality)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
