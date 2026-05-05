import { useState } from 'react'
import { parseEbirdCSV } from './lib/parseEbird'
import { compareSpecies } from './lib/compare'
import type { FileData, ComparisonResult } from './types'
import { DropZone } from './components/DropZone'
import { ResultsView } from './components/ResultsView'

function App() {
  const [fileA, setFileA] = useState<FileData | null>(null)
  const [fileB, setFileB] = useState<FileData | null>(null)
  const [errorA, setErrorA] = useState<string | null>(null)
  const [errorB, setErrorB] = useState<string | null>(null)
  const [result, setResult] = useState<ComparisonResult | null>(null)

  const processFile = (slot: 'a' | 'b', filename: string, file: File) => {
    const setFile = slot === 'a' ? setFileA : setFileB
    const setError = slot === 'a' ? setErrorA : setErrorB

    if (!filename.toLowerCase().endsWith('.csv')) {
      setFile(null)
      setError('Please upload a CSV file. eBird backups are downloaded as .csv.')
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const data = parseEbirdCSV(filename, e.target?.result as string)
        setFile(data)
        setError(null)
      } catch (err) {
        setFile(null)
        if (err instanceof Error && err.message === 'INVALID_EBIRD') {
          setError("This doesn't look like an eBird backup. Make sure you're using the 'Download My Data' export from eBird.")
        } else {
          setError('Something went wrong reading this file. Try re-downloading it from eBird.')
        }
      }
    }
    reader.onerror = () => {
      setFile(null)
      setError('Something went wrong reading this file. Try re-downloading it from eBird.')
    }
    reader.readAsText(file)
  }

  const handleCompare = () => {
    if (!fileA || !fileB) return
    setResult(compareSpecies(fileA.species, fileB.species))
  }

  const handleReset = () => {
    setFileA(null)
    setFileB(null)
    setErrorA(null)
    setErrorB(null)
    setResult(null)
  }

  return (
    <div className="h-screen flex flex-col bg-background">
      <header className="border-b border-border h-14 flex items-center justify-between px-8 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-[22px] h-[22px] bg-primary rounded-[5px] flex items-center justify-center">
            <BirdIcon />
          </div>
          <span className="text-[15px] font-semibold tracking-tight">eBird List Comparer</span>
        </div>
        {result && (
          <button
            onClick={handleReset}
            className="text-[13px] text-primary border border-border rounded-md px-3 py-1.5 font-medium hover:bg-[#e8f5ee] hover:border-primary transition-colors"
          >
            ← Compare new files
          </button>
        )}
      </header>

      <div className="flex-1 overflow-hidden">
        <div className="h-full max-w-[880px] mx-auto px-8 flex flex-col">
          {result ? (
            <div className="flex-1 flex flex-col min-h-0 pt-14 pb-6">
              <ResultsView fileA={fileA!} fileB={fileB!} result={result} />
            </div>
          ) : (
            <div className="py-14">
              <h1 className="text-[26px] font-semibold tracking-tight mb-1.5">
                Compare two eBird life lists
              </h1>
              <p className="text-[15px] text-muted-foreground mb-10">
                Drop your eBird backup CSV files below to see which birds you share and which are unique to each list.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <DropZone
                  label="File A"
                  file={fileA}
                  error={errorA}
                  onFile={(name, file) => processFile('a', name, file)}
                />
                <DropZone
                  label="File B"
                  file={fileB}
                  error={errorB}
                  onFile={(name, file) => processFile('b', name, file)}
                />
              </div>

              <button
                onClick={handleCompare}
                disabled={!fileA || !fileB}
                className="w-full py-3.5 bg-primary text-primary-foreground text-[14px] font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Compare Lists
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function BirdIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
  )
}

export default App
