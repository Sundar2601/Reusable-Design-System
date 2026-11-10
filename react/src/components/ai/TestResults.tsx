import * as React from 'react'
import { CheckCircle2, CircleSlash, XCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '../Badge'

export type TestStatus = 'passed' | 'failed' | 'skipped'
export interface TestCase {
  name: string
  status: TestStatus
  /** Duration in ms. */
  duration?: number
  /** Error message shown under failed tests. */
  error?: string
}
export interface TestSuite {
  name: string
  tests: TestCase[]
}

export interface TestResultsProps extends Omit<React.ComponentProps<'div'>, 'children'> {
  suites: TestSuite[]
}

const icon: Record<TestStatus, React.ReactNode> = {
  passed: <CheckCircle2 className="size-4 text-green-600" />,
  failed: <XCircle className="size-4 text-text-destructive" />,
  skipped: <CircleSlash className="size-4 text-muted-foreground" />,
}

/** Test Results. Suite and test list with a pass / fail / skip summary. */
function TestResults({ suites, className, ...props }: TestResultsProps) {
  const all = suites.flatMap((s) => s.tests)
  const count = (s: TestStatus) => all.filter((t) => t.status === s).length
  return (
    <div data-slot="ai-test-results" className={cn('w-full overflow-hidden rounded-lg bg-card inset-ring-1 inset-ring-border', className)} {...props}>
      <div className="flex items-center gap-2 border-b border-border px-3 py-2 text-sm">
        <span className="flex-1 font-medium">Test results</span>
        <Badge variant="secondary">{count('passed')} passed</Badge>
        {count('failed') > 0 && <Badge variant="destructive">{count('failed')} failed</Badge>}
        {count('skipped') > 0 && <Badge variant="outline">{count('skipped')} skipped</Badge>}
      </div>
      {suites.map((suite) => (
        <div key={suite.name} className="border-b border-border last:border-0">
          <div className="bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">{suite.name}</div>
          <ul>
            {suite.tests.map((t) => (
              <li key={t.name} data-status={t.status} className="flex flex-col gap-1 px-3 py-1.5 text-sm">
                <div className="flex items-center gap-2">
                  {icon[t.status]}
                  <span className="flex-1">{t.name}</span>
                  {t.duration != null && <span className="text-xs text-muted-foreground tabular-nums">{t.duration}ms</span>}
                </div>
                {t.error && <p className="pl-6 font-mono text-xs text-text-destructive">{t.error}</p>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export { TestResults }
