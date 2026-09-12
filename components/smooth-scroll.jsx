"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"
import { usePathname, useSearchParams } from "next/navigation"

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null)
  const rafRef = useRef(null)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.destroy()
      lenisRef.current = null
    }
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 1.4,
      wheelMultiplier: 1,
      infinite: false,
      autoResize: true,
      syncTouch: false,
    })

    lenisRef.current = lenis
    window.lenis = lenis

    function raf(time) {
      if (lenisRef.current) {
        lenisRef.current.raf(time)
      }
      rafRef.current = requestAnimationFrame(raf)
    }

    rafRef.current = requestAnimationFrame(raf)

    function anchorClickHandler(e) {
      const link = e.target.closest("a[href^='#']")
      if (!link) return
      const hash = link.getAttribute("href")
      if (!hash || hash === "#") return
      const el = document.querySelector(hash)
      if (!el) return
      e.preventDefault()
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: -80, duration: 1.2 })
      }
    }

    document.addEventListener("click", anchorClickHandler)

    return () => {
      document.removeEventListener("click", anchorClickHandler)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
      if (lenisRef.current) {
        lenisRef.current.destroy()
        lenisRef.current = null
      }
      if (window.lenis) {
        window.lenis = null
      }
    }
  }, [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true, force: true })
      } else {
        window.scrollTo(0, 0)
      }
    }, 0)

    return () => clearTimeout(timeoutId)
  }, [pathname, searchParams])

  return children
}
