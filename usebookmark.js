import { useState, useEffect } from 'react'

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('ss_bookmarks') || '[]')
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('ss_bookmarks', JSON.stringify(bookmarks))
  }, [bookmarks])

  const toggle = (id) => {
    setBookmarks(prev =>
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    )
  }

  const has = (id) => bookmarks.includes(id)

  return { bookmarks, toggle, has }
}
