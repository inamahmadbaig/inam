import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorFollower() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { stiffness: 100, damping: 30 })
  const springY = useSpring(cursorY, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-[999] w-48 h-48 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-3xl"
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
    />
  )
}
