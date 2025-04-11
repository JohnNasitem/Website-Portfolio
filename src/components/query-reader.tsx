'use client'

import { useSearchParams } from "next/navigation"
import { useEffect } from "react"

const QueryReader = ({ onQuery }: { onQuery: (q: string | null) => void }) => {
    const searchParams = useSearchParams()
    const q = searchParams.get('filter')
  
    useEffect(() => {
      onQuery(q)
    }, [q])
  
    return null
}

export default QueryReader