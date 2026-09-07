import { useEffect, useState } from "react";

/**
 * Types out `lines` one character at a time, moving to the next line
 * once the current one is complete. Returns the lines revealed so far
 * and whether the whole sequence has finished (for the cursor).
 * If the user prefers reduced motion, everything appears instantly.
 */
export function useTypewriter(lines: string[], speed = 28, startDelay = 300) {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const [revealed, setRevealed] = useState<string[]>(prefersReduced ? lines : lines.map(() => ""));
  const [done, setDone] = useState(prefersReduced);

  useEffect(() => {
    if (prefersReduced) return;

    let cancelled = false;
    const next = lines.map(() => "");
    setRevealed([...next]);
    setDone(false);

    async function run() {
      await new Promise((r) => setTimeout(r, startDelay));
      for (let li = 0; li < lines.length; li++) {
        const line = lines[li];
        for (let ci = 1; ci <= line.length; ci++) {
          if (cancelled) return;
          next[li] = line.slice(0, ci);
          setRevealed([...next]);
          await new Promise((r) => setTimeout(r, speed));
        }
        await new Promise((r) => setTimeout(r, speed * 6));
      }
      if (!cancelled) setDone(true);
    }

    run();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lines.join("|")]);

  return { revealed, done };
}
