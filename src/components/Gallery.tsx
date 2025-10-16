const imageModules = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,gif,webp,avif}', {
  eager: true,
  query: '?url'
}) as Record<string, { default: string }>;

const imageUrls = Object.values(imageModules);

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
