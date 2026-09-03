import { useEffect, useRef } from "react";

// پس‌زمینه‌ی کهکشانی: ستاره‌های چشمک‌زن + پارالاکس بسیار ملایم با حرکت موس
export default function StarField() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let stars = [];
    let width, height, dpr;
    let raf;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round((width * height) / 9000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.15 + 0.25,
        baseAlpha: Math.random() * 0.5 + 0.3,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.4 + 0.15,
        depth: Math.random() * 0.6 + 0.2, // برای پارالاکس
        hue: Math.random() > 0.85 ? "#c9b6ff" : "#f4f2ff",
      }));
    }

    function onMouseMove(e) {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    }

    let t = 0;
    function draw() {
      t += 0.016;
      // لرپ نرم برای پارالاکس (بدون پرش)
      mouse.current.x += (target.current.x - mouse.current.x) * 0.03;
      mouse.current.y += (target.current.y - mouse.current.y) * 0.03;

      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        const twinkle = prefersReduced
          ? s.baseAlpha
          : s.baseAlpha + Math.sin(t * s.speed + s.phase) * 0.25;
        const px = s.x + mouse.current.x * s.depth * 10;
        const py = s.y + mouse.current.y * s.depth * 10;

        ctx.beginPath();
        ctx.fillStyle = s.hue;
        ctx.globalAlpha = Math.max(0, Math.min(1, twinkle));
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />;
}
