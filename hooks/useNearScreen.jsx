import { useEffect, useState } from "react"

export default function useNearScreen (elementRef) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: '150px'
    })

    observer.observe(elementRef.current)
  })

  return show
}