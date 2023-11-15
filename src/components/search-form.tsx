'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ElementRef, FormEvent, useRef } from 'react'

function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const inputSearchRef = useRef<ElementRef<'input'>>(null)
  const query = searchParams.get('q')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const search = inputSearchRef.current?.value

    if (!search) return null

    router.push(`/search?q=${search}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
    >
      <Search className="w-5 h-5 text-zinc-500" />

      <input
        type="text"
        name="q"
        placeholder="Buscar produtos..."
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
        ref={inputSearchRef}
        defaultValue={query ?? ''}
      />
    </form>
  )
}

export default SearchForm
