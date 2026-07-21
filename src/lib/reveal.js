export function setupRevealAnimations(root = document) {
  const elements = [...root.querySelectorAll('[data-reveal]')]

  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'))
    return () => {}
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.14 },
  )

  elements.forEach((element) => observer.observe(element))
  return () => observer.disconnect()
}
