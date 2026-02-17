import os
from PIL import Image
import sys

def optimize_images(directory):
    # Extensions to target
    valid_extensions = {'.jpg', '.jpeg', '.png', '.webp'}
    
    count = 0
    saved_space = 0

    print(f"Scanning {directory} for images...")

    for root, dirs, files in os.walk(directory):
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext not in valid_extensions:
                continue
            
            file_path = os.path.join(root, file)
            
            try:
                # Get original size
                original_size = os.path.getsize(file_path)
                
                # Open image
                with Image.open(file_path) as img:
                    # Determine save parameters based on format
                    if ext in ['.jpg', '.jpeg']:
                        # JPEG: High quality but optimized
                        # quality=85 is usually visually indistinguishable from 100 but much smaller
                        img.save(file_path, "JPEG", optimize=True, quality=85)
                    elif ext == '.png':
                        # PNG: Lossless optimization
                        # PngImagePlugin has optimize flag
                        img.save(file_path, "PNG", optimize=True)
                    elif ext == '.webp':
                        # WebP: Optimize
                        img.save(file_path, "WEBP", quality=85)
                
                # Get new size
                new_size = os.path.getsize(file_path)
                diff = original_size - new_size
                
                if diff > 0:
                    saved_space += diff
                    print(f"Optimized: {file} | Saved: {diff/1024:.2f} KB")
                    count += 1
                else:
                    print(f"Skipped (No limit): {file}")
                    
            except Exception as e:
                print(f"Error optimizing {file}: {e}")

    print(f"\nFinished!")
    print(f"Total images optimized: {count}")
    print(f"Total space saved: {saved_space/1024/1024:.2f} MB")

if __name__ == "__main__":
    # Default to 'public' directory if no arg provided
    target_dir = sys.argv[1] if len(sys.argv) > 1 else "public"
    
    if os.path.exists(target_dir):
        optimize_images(target_dir)
    else:
        print(f"Directory '{target_dir}' not found.")
