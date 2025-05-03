import { useEffect, useRef } from 'react'
import './CustomCursor.css'

const CustomCursor = () => {
    const cursorRef = useRef(null)
    const requestRef = useRef()
    const previousTimeRef = useRef()

    const animateCursor = (time) => {
        if (previousTimeRef.current !== undefined) {
            // Throttle updates if needed
        }
        previousTimeRef.current = time
        requestRef.current = requestAnimationFrame(animateCursor)
    }

    useEffect(() => {
        const cursor = cursorRef.current

        const handleMouseMove = (e) => {
            if (cursor) {
                // Use requestAnimationFrame for smoother movement
                requestAnimationFrame(() => {
                    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
                })
            }
        }

        const handleMouseOver = (e) => {
            const color = window.getComputedStyle(e.target).color || 'rgba(0,0,0,0.6)'
            if (cursor) {
                cursor.style.background = color
                cursor.classList.add('hover')
            }
        }

        const handleMouseOut = () => {
            if (cursor) {
                cursor.style.background = 'rgba(0,0,0,0.6)'
                cursor.classList.remove('hover')
            }
        }

        const handleMouseDown = () => {
            if (cursor) cursor.classList.add('click')
        }

        const handleMouseUp = () => {
            if (cursor) cursor.classList.remove('click')
        }

        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseover", handleMouseOver)
        document.addEventListener("mouseout", handleMouseOut)
        document.addEventListener("mousedown", handleMouseDown)
        document.addEventListener("mouseup", handleMouseUp)

        // Start animation loop
        requestRef.current = requestAnimationFrame(animateCursor)

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseover", handleMouseOver)
            document.removeEventListener("mouseout", handleMouseOut)
            document.removeEventListener("mousedown", handleMouseDown)
            document.removeEventListener("mouseup", handleMouseUp)
            cancelAnimationFrame(requestRef.current)
        }
    }, [])

    return <div className='cursor' ref={cursorRef} />
}

export default CustomCursor