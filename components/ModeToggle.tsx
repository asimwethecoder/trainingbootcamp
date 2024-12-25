"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ThemeOption {
  value: string
  label: string
  icon?: React.ReactNode
}

const ModeToggle = () => {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [isMounted, setIsMounted] = React.useState(false)

  // Prevent hydration mismatch by mounting after initial render
  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  // Memoize the theme options to prevent unnecessary re-renders
  const themeOptions = React.useMemo((): ThemeOption[] => [
    {
      value: 'light',
      label: 'Light',
      icon: <Sun className="h-4 w-4 mr-2" />
    },
    {
      value: 'dark',
      label: 'Dark',
      icon: <Moon className="h-4 w-4 mr-2" />
    },
    {
      value: 'system',
      label: 'System',
      icon: (
        <svg
          className=" h-4 w-4 mr-2"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect height="11" rx="2" ry="2" width="18" x="3" y="4" />
          <rect height="3" rx="1" ry="1" width="14" x="5" y="15" />
        </svg>
      ),
    }
  ], [])

  // Handle theme change with keyboard support
  const handleThemeChange = React.useCallback((newTheme: string) => {
    setTheme(newTheme)
  }, [setTheme])

  // Handle keyboard navigation
  const handleKeyDown = React.useCallback((event: React.KeyboardEvent, themeValue: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleThemeChange(themeValue)
    }
  }, [handleThemeChange])

  if (!isMounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9"
        disabled
        aria-label="Loading theme switcher"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative h-9 w-9 focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors"
          aria-label="Toggle theme"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-[180px] animate-in fade-in-0 zoom-in-95"
      >
        {themeOptions.map(({ value, label, icon }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => handleThemeChange(value)}
            onKeyDown={(e) => handleKeyDown(e, value)}
            className={`
              flex items-center justify-between cursor-pointer
              ${theme === value ? 'bg-accent' : ''}
              transition-colors hover:bg-accent/50
            `}
            role="menuitem"
            aria-current={theme === value}
            tabIndex={0}
          >
            <div className="flex items-center">
              {icon}
              {label}
            </div>
            {theme === value && (
              <svg
                className="h-4 w-4 text-foreground/50"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// Prevent unnecessary re-renders when used in other components
export default React.memo(ModeToggle)
