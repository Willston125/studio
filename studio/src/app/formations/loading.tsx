export default function Loading() {
    return (
        <div className="min-h-screen bg-[#FAFAFA] dark:bg-slate-950 animate-pulse">
            {/* Hero Skeleton */}
            <div className="h-[70vh] bg-gray-200 dark:bg-slate-800" />

            {/* Content Skeleton */}
            <div className="max-w-6xl mx-auto px-6 py-20 space-y-8">
                {/* Title */}
                <div className="h-12 bg-gray-200 dark:bg-slate-800 rounded w-1/3" />

                {/* Formation Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-96 bg-gray-200 dark:bg-slate-800 rounded-xl" />
                    ))}
                </div>
            </div>
        </div>
    );
}
