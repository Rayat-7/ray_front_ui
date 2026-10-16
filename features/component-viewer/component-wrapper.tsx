interface ComponentWrapperProps {
  title: string
  description: string
  category: string
  children: React.ReactNode
  actions?: React.ReactNode
}

export function ComponentWrapper({ title, description, category, children, actions }: ComponentWrapperProps) {
  return (
    <div className="px-6 py-8 sm:px-8 sm:py-12">
      <div className="mb-8">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
          {category}
        </p>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {title}
            </h1>
            <p className="mt-2 max-w-lg text-sm text-muted-foreground">
              {description}
            </p>
          </div>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      </div>
      {children}
    </div>
  )
}
