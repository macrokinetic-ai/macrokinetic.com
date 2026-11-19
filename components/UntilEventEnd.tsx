"use client";

import { useEffect, useId, useState, type ReactNode } from "react";

/**
 * Shows `children` until `end`, then `ended` (or nothing).
 *
 * Pages are statically built, so the switch happens in the browser. A tiny
 * inline script flips the `hidden` attributes while the HTML is still being
 * parsed, so an expired banner is never painted (no flash, no layout shift).
 * React then takes over and keeps the same state.
 */
export default function UntilEventEnd({
  end,
  children,
  ended,
}: {
  end: string;
  children: ReactNode;
  ended?: ReactNode;
}) {
  const endMs = Date.parse(end);
  const id = useId().replace(/:/g, "");
  const [isEnded, setIsEnded] = useState(false);

  useEffect(() => {
    const left = endMs - Date.now();
    if (left <= 0) return setIsEnded(true);
    // Also switch over if the page is left open past the end time.
    const t = setTimeout(() => setIsEnded(true), Math.min(left, 2 ** 31 - 1));
    return () => clearTimeout(t);
  }, [endMs]);

  const script = `(function(){if(Date.now()<${endMs})return;var a=document.getElementById("${id}-live");if(a)a.hidden=true;var b=document.getElementById("${id}-ended");if(b)b.hidden=false;})();`;

  return (
    <>
      <div id={`${id}-live`} hidden={isEnded} suppressHydrationWarning>
        {children}
      </div>
      {ended && (
        <div id={`${id}-ended`} hidden={!isEnded} suppressHydrationWarning>
          {ended}
        </div>
      )}
      <script dangerouslySetInnerHTML={{ __html: script }} suppressHydrationWarning />
    </>
  );
}
