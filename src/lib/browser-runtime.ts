/**
 * Browser-only helpers that avoid the `window` / `Window` identifiers.
 * Some TS/ESLint setups resolve `lib` inconsistently; `globalThis` + narrow casts stay valid.
 */

type AnyGlobal = Record<string, unknown>;

function asGlobal(): AnyGlobal {
  return globalThis as unknown as AnyGlobal;
}

export function readScrollY(): number {
  const y = asGlobal().scrollY;
  return typeof y === "number" ? y : 0;
}

export function readInnerHeight(): number {
  const h = asGlobal().innerHeight;
  return typeof h === "number" ? h : 0;
}

type ScrollListener = () => void;

function bindEventTarget(g: AnyGlobal) {
  const add = g.addEventListener;
  const remove = g.removeEventListener;
  if (typeof add !== "function" || typeof remove !== "function") return null;
  return {
    add: add as (type: string, listener: ScrollListener, options?: { passive?: boolean }) => void,
    remove: remove as (type: string, listener: ScrollListener) => void,
    g,
  };
}

export function subscribeScrollPassive(onScroll: ScrollListener): () => void {
  const br = bindEventTarget(asGlobal());
  if (!br) return () => {};
  br.add.call(br.g, "scroll", onScroll, { passive: true });
  return () => br.remove.call(br.g, "scroll", onScroll);
}

export function subscribeResize(onResize: ScrollListener): () => void {
  const br = bindEventTarget(asGlobal());
  if (!br) return () => {};
  br.add.call(br.g, "resize", onResize);
  return () => br.remove.call(br.g, "resize", onResize);
}

export function subscribeMouseMove(
  onMove: (clientX: number, clientY: number) => void
): () => void {
  const g = asGlobal();
  const add = g.addEventListener;
  const remove = g.removeEventListener;
  if (typeof add !== "function" || typeof remove !== "function") return () => {};

  const addFn = add as (type: string, listener: (ev: unknown) => void) => void;
  const removeFn = remove as (type: string, listener: (ev: unknown) => void) => void;

  const listener = (ev: unknown) => {
    const m = ev as { clientX?: unknown; clientY?: unknown };
    const x = typeof m.clientX === "number" ? m.clientX : 0;
    const y = typeof m.clientY === "number" ? m.clientY : 0;
    onMove(x, y);
  };

  addFn.call(g, "mousemove", listener);
  return () => removeFn.call(g, "mousemove", listener);
}

export function scrollViewportToTopSmooth(): void {
  const g = asGlobal();
  const scrollTo = g.scrollTo;
  if (typeof scrollTo !== "function") return;
  (scrollTo as (opts: { top: number; behavior: string }) => void).call(g, {
    top: 0,
    behavior: "smooth",
  });
}

export function assignLocationHref(href: string): void {
  const g = asGlobal();
  const loc = g.location;
  if (loc && typeof loc === "object" && "href" in loc) {
    (loc as { href: string }).href = href;
  }
}

export function prefersReducedMotionMedia(): boolean {
  const g = asGlobal();
  const mm = g.matchMedia;
  if (typeof mm !== "function") return false;
  const mq = (mm as (q: string) => { matches?: boolean }).call(g, "(prefers-reduced-motion: reduce)");
  return Boolean(mq?.matches);
}
