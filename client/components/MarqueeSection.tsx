export default function MarqueeSection() {
  const marqueeText = "UI/UX DESIGN";
  const repeatedText = Array(20).fill(marqueeText).join(" ✦ ");

  return (
    <section className="w-full bg-background overflow-hidden py-4 border-y border-border/20">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center text-text-muted font-medium font-clash text-lg md:text-xl tracking-wider">
          {repeatedText} ✦ {repeatedText}
        </div>
      </div>
    </section>
  );
}
