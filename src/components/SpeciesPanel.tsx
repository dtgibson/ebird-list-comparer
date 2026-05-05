interface SpeciesPanelProps {
  title: string
  species: string[]
}

export function SpeciesPanel({ title, species }: SpeciesPanelProps) {
  return (
    <div className="border border-border rounded-[10px] overflow-hidden flex flex-col">
      <div className="px-[18px] py-3.5 border-b border-border bg-muted flex items-center justify-between flex-shrink-0">
        <span className="text-[13px] font-semibold text-foreground truncate mr-2">{title}</span>
        <span className="text-[11px] font-semibold text-primary-foreground bg-primary px-2 py-0.5 rounded-full flex-shrink-0">
          {species.length}
        </span>
      </div>
      <ul
        className="overflow-y-auto flex-1 min-h-0"
        role="list"
        aria-label={`${title} — ${species.length} species`}
      >
        {species.length === 0 ? (
          <li className="px-[18px] py-8 text-[13px] text-muted-foreground text-center">
            No species
          </li>
        ) : (
          species.map(name => (
            <li
              key={name}
              className="px-[18px] py-2 text-[13.5px] text-foreground border-b border-border last:border-b-0 hover:bg-muted transition-colors"
            >
              {name}
            </li>
          ))
        )}
      </ul>
    </div>
  )
}
