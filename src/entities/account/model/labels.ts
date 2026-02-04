import type { AccountLabel } from './types'

export function parseLabels(raw: string): AccountLabel[] {
  return raw
    .split(';')
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
    .map((text) => ({ text }))
}

export function labelsToString(labels: AccountLabel[]): string {
  return labels.map((l) => l.text).join('; ')
}
