'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { ModalProvider } from './modal-provide'
import { ThemeProvider } from './theme-provider'


export default function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                <ModalProvider />
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    )
}