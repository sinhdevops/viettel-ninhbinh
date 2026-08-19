function ScrollProgress() {
  return (
    <div
      data-slot="scroll-progress"
      className="bg-primary/10 pointer-events-none absolute inset-x-0 bottom-0 h-0.5"
      aria-hidden
    >
      <div
        data-slot="scroll-progress-indicator"
        className="scroll-progress-indicator bg-primary h-full origin-left"
      />
    </div>
  );
}

export { ScrollProgress };
