import { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils/classNames.ts';

interface PositionRef {
  mouseX: number;
  mouseY: number;
  destinationX: number;
  destinationY: number;
  distanceX: number;
  distanceY: number;
  key: number;
}

const CustomCursor = () => {

  const cursorRef = useRef<HTMLDivElement | null>(null);
  const positionRef = useRef<PositionRef>({
    mouseX: -500,
    mouseY: -500,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1
  });
  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const cursor = cursorRef.current;
      if ( cursor ) {
        positionRef.current.mouseX = clientX - cursor.clientWidth / 2;
        positionRef.current.mouseY = clientY - cursor.clientHeight / 2;
      }
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll('a, button, .cursor-pointer');
    links.forEach((link) => {
      link.addEventListener('mouseenter', () => setIsHovering(true));
      link.addEventListener('mouseleave', () => setIsHovering(false));
    });
  });

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } = positionRef.current;
      const cursor = cursorRef.current;

      if ( !cursor ) return;

      if ( !destinationX || !destinationY ) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if ( Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) < 0.1 ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      cursor.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };

    followMouse();

    return () => {
      cancelAnimationFrame(positionRef.current.key);
    };
  }, []);

  return (
    <div className="hidden lg:block">
      <div className="z-20 fixed pointer-events-none w-12 h-12" ref={cursorRef}>
        <div className={cn(
          'relative border-2 border-zinc-200 rounded-full w-full h-full transition-all duration-300',
          isHovering ? 'scale-150 opacity-40' : '')}
        />
      </div>
    </div>
  );
};

export default CustomCursor;
