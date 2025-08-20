import React, { useEffect, useRef } from 'react';

const FloatingCat: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const size = 64; // rendered size of the floating element (px)
    let x = Math.max(0, Math.min(window.innerWidth - size, Math.random() * window.innerWidth));
    let y = Math.max(0, Math.min(window.innerHeight - size, Math.random() * window.innerHeight));
    // Slower default speed
    let velocityX = (0.06 + Math.random() * 0.06) * (Math.random() < 0.5 ? -1 : 1); // px per ms
    let velocityY = (0.06 + Math.random() * 0.06) * (Math.random() < 0.5 ? -1 : 1);
    let lastTime = performance.now();
    let isPaused = false;
    let isDragging = false;
    let dragOffsetX = 0;
    let dragOffsetY = 0;

    const setPosition = () => {
      element.style.transform = `translate(${x}px, ${y}px)`;
    };

    const onResize = () => {
      // Clamp inside viewport on resize
      x = Math.max(0, Math.min(window.innerWidth - size, x));
      y = Math.max(0, Math.min(window.innerHeight - size, y));
      setPosition();
    };

    // Pointer interactions: drag to move
    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      isPaused = true;
      element.setPointerCapture(e.pointerId);
      element.style.cursor = 'grabbing';
      dragOffsetX = e.clientX - x;
      dragOffsetY = e.clientY - y;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      x = e.clientX - dragOffsetX;
      y = e.clientY - dragOffsetY;
      // Clamp
      x = Math.max(0, Math.min(window.innerWidth - size, x));
      y = Math.max(0, Math.min(window.innerHeight - size, y));
      setPosition();
    };

    const setRandomSlowVelocity = () => {
      velocityX = (0.06 + Math.random() * 0.06) * (Math.random() < 0.5 ? -1 : 1);
      velocityY = (0.06 + Math.random() * 0.06) * (Math.random() < 0.5 ? -1 : 1);
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isDragging) return;
      isDragging = false;
      isPaused = false;
      element.releasePointerCapture(e.pointerId);
      element.style.cursor = 'grab';
      setRandomSlowVelocity();
    };

    element.style.cursor = 'grab';
    element.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);

    let rafId = 0;
    const loop = (now: number) => {
      const deltaMs = now - lastTime;
      lastTime = now;

      if (!isPaused && !isDragging) {
        x += velocityX * deltaMs;
        y += velocityY * deltaMs;

        // Bounce off edges
        if (x <= 0) {
          x = 0;
          velocityX *= -1;
        } else if (x + size >= window.innerWidth) {
          x = window.innerWidth - size;
          velocityX *= -1;
        }
        if (y <= 0) {
          y = 0;
          velocityY *= -1;
        } else if (y + size >= window.innerHeight) {
          y = window.innerHeight - size;
          velocityY *= -1;
        }
      }

      setPosition();
      rafId = requestAnimationFrame(loop);
    };

    setPosition();
    window.addEventListener('resize', onResize);
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', onResize);
      element.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Draw a simple pixel-art cat into the canvas and scale it up with pixelated rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Base pixel grid size
    const pixelWidth = 16;
    const pixelHeight = 16;
    canvas.width = pixelWidth;
    canvas.height = pixelHeight;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Define a tiny 16x16 sprite using hex color strings or null for transparency
    // Very simple cute cat face (ears, eyes, nose) in pixel art
    const T = null; // transparent
    const O = '#000000'; // outline
    const C = '#F5C38B'; // cat fur
    const D = '#7A4D2B'; // darker fur
    const W = '#FFFFFF'; // white (eyes shine)

    const sprite: (string | null)[][] = [
      [T,T,T,O,O,T,T,T,T,T,O,O,T,T,T,T],
      [T,T,O,C,C,O,T,T,T,T,O,C,C,O,T,T],
      [T,O,C,C,C,C,O,T,T,O,C,C,C,C,O,T],
      [O,C,C,C,C,C,C,O,O,C,C,C,C,C,C,O],
      [O,C,C,C,C,C,C,C,C,C,C,C,C,C,C,O],
      [O,C,C,C,C,C,C,C,C,C,C,C,C,C,C,O],
      [O,C,C,O,C,C,C,C,C,C,C,C,O,C,C,O],
      [O,C,C,C,C,D,D,C,C,D,D,C,C,C,C,O],
      [O,C,C,C,C,C,C,C,C,C,C,C,C,C,C,O],
      [O,C,C,C,O,O,C,C,C,C,O,O,C,C,C,O],
      [O,C,C,C,T,O,O,O,O,O,O,T,C,C,C,O],
      [O,C,C,C,T,T,T,O,O,T,T,T,C,C,C,O],
      [O,C,C,C,T,T,T,O,O,T,T,T,C,C,C,O],
      [O,C,C,C,C,C,C,C,C,C,C,C,C,C,C,O],
      [T,O,C,C,C,C,C,C,C,C,C,C,C,C,O,T],
      [T,T,O,O,O,O,O,O,O,O,O,O,O,O,T,T],
    ];

    context.clearRect(0, 0, pixelWidth, pixelHeight);
    for (let row = 0; row < pixelHeight; row += 1) {
      for (let col = 0; col < pixelWidth; col += 1) {
        const color = sprite[row][col];
        if (color) {
          context.fillStyle = color;
          context.fillRect(col, row, 1, 1);
        }
      }
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed z-40"
      style={{ left: 0, top: 0, width: 64, height: 64 }}
      aria-hidden
    >
      <div className="w-full h-full flex items-center justify-center select-none">
        <canvas
          ref={canvasRef}
          style={{
            width: 56,
            height: 56,
            imageRendering: 'pixelated',
            filter: 'drop-shadow(0 0 6px var(--accent-cyan))',
          }}
        />
      </div>
    </div>
  );
};

export default FloatingCat;


