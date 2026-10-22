type ProfileIntroProps = {
  id: string
  name: string
  role: string
  portrait: string
  paragraphs: string[]
}

export function ProfileIntro({
  id,
  name,
  role,
  portrait,
  paragraphs,
}: ProfileIntroProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-6 py-20 text-center md:py-28"
    >
      <img
        src={portrait}
        alt={name}
        width={128}
        height={128}
        loading="lazy"
        className="size-28 rounded-full object-cover"
      />
      <div className="flex flex-col gap-1">
        <h2 id={`${id}-title`} className="text-2xl font-medium tracking-tight">
          {name}
        </h2>
        <p className="text-sm tracking-wide text-muted-foreground">{role}</p>
      </div>
      <div className="mt-4 flex max-w-xl flex-col gap-5 text-base leading-relaxed text-muted-foreground">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  )
}
