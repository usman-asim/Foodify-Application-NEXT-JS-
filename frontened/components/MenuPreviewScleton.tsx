export function MenuPreviewSkeleton() {
  return (
    <section className="container mx-auto py-16 animate-pulse">
      <div className="text-center mb-12">
        <div className="h-8 w-64 bg-muted mx-auto rounded mb-2" />
        <div className="h-4 w-96 bg-muted mx-auto rounded" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_,i) => (
          <div key={i} className="rounded-lg shadow-lg bg-muted/20">
            <div className="h-64 bg-muted rounded-t-lg" />
            <div className="p-6 space-y-3">
              <div className="h-5 w-3/4 bg-muted rounded" />
              <div className="h-4 w-1/2 bg-muted rounded" />
              <div className="h-4 w-full bg-muted rounded" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
