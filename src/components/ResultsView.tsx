import type { FileData, ComparisonResult } from '../types'
import { SpeciesPanel } from './SpeciesPanel'

interface ResultsViewProps {
  fileA: FileData
  fileB: FileData
  result: ComparisonResult
}

export function ResultsView({ fileA, fileB, result }: ResultsViewProps) {
  return (
    <div className="flex flex-col h-full min-h-0">
      <p className="text-[15px] text-muted-foreground mb-6 shrink-0">
        Comparing{' '}
        <strong className="font-semibold text-foreground">{fileA.filename}</strong>
        {' '}and{' '}
        <strong className="font-semibold text-foreground">{fileB.filename}</strong>
      </p>

      <div
        className="grid grid-cols-5 bg-muted border border-border rounded-[10px] overflow-hidden mb-7 shrink-0"
        role="region"
        aria-label="Comparison summary"
      >
        <Stat value={result.totalA} label={`${fileA.filename} total`} />
        <Stat value={result.totalB} label={`${fileB.filename} total`} />
        <Stat value={result.both.length} label="In both" highlight />
        <Stat value={result.aOnly.length} label={`${fileA.filename} only`} />
        <Stat value={result.bOnly.length} label={`${fileB.filename} only`} />
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-3 gap-4">
        <SpeciesPanel title="In Both" species={result.both} />
        <SpeciesPanel title={`${fileA.filename} only`} species={result.aOnly} />
        <SpeciesPanel title={`${fileB.filename} only`} species={result.bOnly} />
      </div>
    </div>
  )
}

interface StatProps {
  value: number
  label: string
  highlight?: boolean
}

function Stat({ value, label, highlight = false }: StatProps) {
  return (
    <div className="px-5 py-[18px] flex flex-col gap-1 border-r border-border last:border-r-0 bg-background">
      <span className={`text-[24px] font-semibold tracking-tight leading-none ${highlight ? 'text-primary' : 'text-foreground'}`}>
        {value}
      </span>
      <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide truncate">
        {label}
      </span>
    </div>
  )
}
