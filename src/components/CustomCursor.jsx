import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseDown = () => {
      setClicked(true);
    };

    const handleMouseUp = () => {
      setClicked(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);

    const updateHoverListeners = () => {
      const hoverables = document.querySelectorAll('a, button, select, input, textarea, [role="button"], .hoverable');
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', handleLinkHoverStart);
        el.addEventListener('mouseleave', handleLinkHoverEnd);
      });
    };

    updateHoverListeners();

    const observer = new MutationObserver(updateHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let animationFrameId;
    
    const updateTrail = () => {
      setTrailPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
        };
      });
      animationFrameId = requestAnimationFrame(updateTrail);
    };

    animationFrameId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  if (isTouchDevice || hidden) return null;

  return (
    <>
      <div 
        className="custom-cursor"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.75 : linkHovered ? 1.5 : 1})`,
          backgroundColor: linkHovered ? '#ffffff' : '#6FB3B8',
          transition: 'transform 0.15s, background-color 0.15s'
        }}
      />
      <div 
        className="custom-cursor-ring"
        style={{ 
          left: `${trailPosition.x}px`, 
          top: `${trailPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.85 : linkHovered ? 1.4 : 1})`,
          borderColor: linkHovered ? '#6FB3B8' : 'rgba(111, 179, 184, 0.4)',
          backgroundColor: linkHovered ? 'rgba(111, 179, 184, 0.15)' : 'transparent',
          transition: 'transform 0.1s, border-color 0.2s, background-color 0.2s'
        }}
      />
    </>
  );
}
