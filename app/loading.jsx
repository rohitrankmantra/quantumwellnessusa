export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#faf8f6]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-[#8b6f47]/20" />
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#8b6f47]" />
        </div>
        <p className="font-serif text-lg tracking-wide text-[#8b6f47]">
          Loading...
        </p>
      </div>
    </div>
  )
}
