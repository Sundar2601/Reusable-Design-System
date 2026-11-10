import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '../Badge'
import { Button } from '../Button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../Command'
import { Popover, PopoverContent, PopoverTrigger } from '../Popover'

export interface ModelOption {
  id: string
  name: string
  provider: string
  /** Optional badge such as "New" or "Fast". */
  badge?: string
}

export interface ModelSelectorProps {
  models: ModelOption[]
  value?: string
  defaultValue?: string
  onValueChange?: (id: string) => void
  placeholder?: string
  className?: string
}

/** Model Selector. Popover with a searchable list of models grouped by provider. */
function ModelSelector({ models, value, defaultValue, onValueChange, placeholder = 'Select model', className }: ModelSelectorProps) {
  const [inner, setInner] = React.useState(defaultValue)
  const [open, setOpen] = React.useState(false)
  const current = value ?? inner
  const selected = models.find((m) => m.id === current)
  const providers = Array.from(new Set(models.map((m) => m.provider)))
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button data-slot="ai-model-selector" variant="outline" className={cn('w-64 justify-between', className)} rightIcon={<ChevronsUpDown className="opacity-50" />}>
          {selected ? selected.name : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-0" align="start">
        <Command>
          <CommandInput placeholder="Search models..." />
          <CommandList>
            <CommandEmpty>No model found.</CommandEmpty>
            {providers.map((p) => (
              <CommandGroup key={p} heading={p}>
                {models
                  .filter((m) => m.provider === p)
                  .map((m) => (
                    <CommandItem
                      key={m.id}
                      value={`${m.name} ${m.provider}`}
                      onSelect={() => {
                        setInner(m.id)
                        onValueChange?.(m.id)
                        setOpen(false)
                      }}
                    >
                      <span className="flex-1">{m.name}</span>
                      {m.badge && <Badge variant="secondary">{m.badge}</Badge>}
                      {m.id === current && <Check />}
                    </CommandItem>
                  ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export { ModelSelector }
