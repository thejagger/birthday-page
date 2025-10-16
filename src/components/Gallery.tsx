// Collect all images from src/assets/gallery using Vite's import.meta.glob
// Supported extensions can be adjusted as needed
const imageModules = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,gif,webp,avif}', {
  eager: true,
  query: '?url'
}) as Record<string, string>;

const imageUrls = Object.values(imageModules);

// Stable hash for deterministic "random" styling per image
function hashString(str: string): number {
  let h = 5381;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) + h) ^ str.charCodeAt(i); // h * 33 ^ char
  }
  return h >>> 0; // unsigned
}

// Pick from a predefined set of Tailwind span class combinations.
// Using explicit strings ensures Tailwind JIT keeps these classes in the build.
function getSpanClasses(url: string): string {
  const options = [
    'col-span-1',
    'col-span-2',
    'col-span-1 sm:col-span-2',
    'col-span-1 md:col-span-2',
    'col-span-2 sm:col-span-2 md:col-span-2',
  ];
  const idx = hashString(url) % options.length;
  return options[idx];
}

export function Gallery() {
  return (
    <section className="py-20 px-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {imageUrls.map((imageUrl, index) => {
          const url = imageUrl.default;
          return (
            <div
              key={url}
              className={`aspect-square w-full overflow-hidden rounded-md bg-muted`}
            >
              <img
                src={url}
                alt={`Gallery image ${index + 1}`}
                className="h-full w-full rounded-md object-cover"
                loading="lazy"
              />
            </div>
          );
        })}
        {imageUrls.length === 0 && (
          <div className="col-span-full text-center text-muted-foreground">
            No images found in src/assets/gallery.
          </div>
        )}
      </div>
    </section>
  )
}
