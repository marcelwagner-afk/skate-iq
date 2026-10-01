/**
 * Chart components – per dataviz method: thin marks (2px lines), recessive
 * grid, one axis, legend for ≥2 series, hover crosshair + tooltip, corridor
 * band for benchmark context, text always in ink tokens (never series color).
 */
import { useMemo, useRef, useState } from 'react';

export interface Pt { x: number; y: number; label?: string; emphasis?: boolean }
export interface Series { name: string; color: string; pts: Pt[]; dash?: boolean }
export interface CorridorBand { lo: number; mid: number; hi: number; label: string }

const PAD = { l: 44, r: 12, t: 10, b: 22 };

export function LineChart({ series, corridor, height = 240, fmtY, fmtX }: {
  series: Series[]; corridor?: CorridorBand | null; height?: number;
  fmtY: (v: number) => string; fmtX: (v: number) => string;
}) {
  const W = 720, H = height;
  const ref = useRef<SVGSVGElement>(null);
  const [hover, setHover] = useState<{ sx: number; sy: number; pt: Pt; s: Series } | null>(null);

  const { xs, ys } = useMemo(() => {
    const allX = series.flatMap(s => s.pts.map(p => p.x));
    const allY = series.flatMap(s => s.pts.map(p => p.y));
    if (corridor) { allY.push(corridor.lo, corridor.hi); }
    const x0 = Math.min(...allX), x1 = Math.max(...allX);
    const y0 = Math.min(...allY), y1 = Math.max(...allY);
    const padY = (y1 - y0) * 0.08 || 1;
    const sx = (x: number): number => PAD.l + ((x - x0) / Math.max(1, x1 - x0)) * (W - PAD.l - PAD.r);
    const sy = (y: number): number => PAD.t + (1 - (y - (y0 - padY)) / ((y1 + padY) - (y0 - padY))) * (H - PAD.t - PAD.b);
    return { xs: sx, ys: sy };
  }, [series, corridor, H]);

  if (!series.length || series.every(s => !s.pts.length)) return null;
  const allPts = series.flatMap(s => s.pts.map(pt => ({ s, pt })));
  const yTicks = 4;
  const yVals = useMemo(() => {
    const allY = series.flatMap(s => s.pts.map(p => p.y));
    if (corridor) allY.push(corridor.lo, corridor.hi);
    const y0 = Math.min(...allY), y1 = Math.max(...allY);
    return Array.from({ length: yTicks + 1 }, (_, i) => y0 + (i * (y1 - y0)) / yTicks);
  }, [series, corridor]);

  const onMove = (e: React.MouseEvent): void => {
    const svg = ref.current; if (!svg) return;
    const r = svg.getBoundingClientRect();
    const mx = ((e.clientX - r.left) / r.width) * W;
    const my = ((e.clientY - r.top) / r.height) * H;
    let best: { d: number; s: Series; pt: Pt } | null = null;
    for (const { s, pt } of allPts) {
      const d = Math.hypot(xs(pt.x) - mx, ys(pt.y) - my);
      if (!best || d < best.d) best = { d, s, pt };
    }
    if (best && best.d < 40) setHover({ sx: xs(best.pt.x), sy: ys(best.pt.y), pt: best.pt, s: best.s });
    else setHover(null);
  };

  return (
    <div>
      {series.length >= 2 && (
        <div className="flex flex-wrap gap-3 mb-1 text-xs ink-2">
          {series.map(s => (
            <span key={s.name} className="inline-flex items-center gap-1.5">
              <span style={{ width: 14, height: 0, borderTop: `2px ${s.dash ? 'dashed' : 'solid'} ${s.color}` }} />
              {s.name}
            </span>
          ))}
        </div>
      )}
      <svg ref={ref} viewBox={`0 0 ${W} ${H}`} className="w-full select-none" role="img"
        onMouseMove={onMove} onMouseLeave={() => setHover(null)}>
        {/* grid + y labels (recessive) */}
        {yVals.map((v, i) => (
          <g key={i}>
            <line x1={PAD.l} x2={W - PAD.r} y1={ys(v)} y2={ys(v)} stroke="var(--grid)" strokeWidth={1} />
            <text x={PAD.l - 6} y={ys(v) + 3.5} textAnchor="end" fontSize={10} fill="var(--ink-3)">{fmtY(v)}</text>
          </g>
        ))}
        {/* corridor band */}
        {corridor && (
          <g>
            <rect x={PAD.l} width={W - PAD.l - PAD.r} y={ys(corridor.hi)} height={Math.max(2, ys(corridor.lo) - ys(corridor.hi))}
              fill="var(--seq-200)" opacity={0.35} />
            <line x1={PAD.l} x2={W - PAD.r} y1={ys(corridor.mid)} y2={ys(corridor.mid)}
              stroke="var(--seq-600)" strokeWidth={1} strokeDasharray="4 4" opacity={0.7} />
            <text x={W - PAD.r} y={ys(corridor.hi) - 4} textAnchor="end" fontSize={10} fill="var(--ink-3)">{corridor.label}</text>
          </g>
        )}
        {/* series */}
        {series.map(s => (
          <g key={s.name}>
            <polyline fill="none" stroke={s.color} strokeWidth={2} strokeDasharray={s.dash ? '5 4' : undefined}
              points={s.pts.map(p => `${xs(p.x)},${ys(p.y)}`).join(' ')} />
            {s.pts.map((p, i) => (
              <circle key={i} cx={xs(p.x)} cy={ys(p.y)} r={p.emphasis ? 5 : 3.2}
                fill={p.emphasis ? s.color : 'var(--surface-1)'} stroke={s.color} strokeWidth={2} />
            ))}
          </g>
        ))}
        {/* x labels: first/last */}
        {series[0].pts.length > 1 && (
          <>
            <text x={PAD.l} y={H - 6} fontSize={10} fill="var(--ink-3)">{fmtX(Math.min(...series.flatMap(s => s.pts.map(p => p.x))))}</text>
            <text x={W - PAD.r} y={H - 6} textAnchor="end" fontSize={10} fill="var(--ink-3)">{fmtX(Math.max(...series.flatMap(s => s.pts.map(p => p.x))))}</text>
          </>
        )}
        {/* hover crosshair + tooltip */}
        {hover && (
          <g pointerEvents="none">
            <line x1={hover.sx} x2={hover.sx} y1={PAD.t} y2={H - PAD.b} stroke="var(--ink-3)" strokeWidth={1} strokeDasharray="3 3" />
            <circle cx={hover.sx} cy={hover.sy} r={5} fill={hover.s.color} stroke="var(--surface-1)" strokeWidth={2} />
            {(() => {
              const txt1 = hover.pt.label ?? '';
              const txt2 = `${fmtX(hover.pt.x)} · ${fmtY(hover.pt.y)}`;
              const w = Math.max(txt1.length, txt2.length) * 5.6 + 16;
              const tx = Math.min(Math.max(hover.sx - w / 2, PAD.l), W - PAD.r - w);
              const ty = hover.sy - 44 < PAD.t ? hover.sy + 12 : hover.sy - 44;
              return (
                <g>
                  <rect x={tx} y={ty} width={w} height={34} rx={6} fill="var(--surface-1)" stroke="var(--border)" />
                  <text x={tx + 8} y={ty + 14} fontSize={10.5} fontWeight={600} fill="var(--ink-1)">{txt1}</text>
                  <text x={tx + 8} y={ty + 27} fontSize={10.5} fill="var(--ink-2)">{txt2}</text>
                </g>
              );
            })()}
          </g>
        )}
      </svg>
    </div>
  );
}

/** Horizontal comparison bars (one metric, n entities) – 4px rounded data ends, labels in ink. */
export function HBars({ rows, fmt, max }: {
  rows: { name: string; value: number; color: string; note?: string }[];
  fmt: (v: number) => string; max?: number;
}) {
  const m = max ?? Math.max(...rows.map(r => Math.abs(r.value)), 1e-9);
  return (
    <div className="space-y-2">
      {rows.map((r, i) => (
        <div key={i} className="grid grid-cols-[minmax(90px,160px)_1fr_auto] items-center gap-2 text-sm">
          <span className="truncate ink-2">{r.name}</span>
          <div className="h-3 rounded bg-[var(--surface-2)] overflow-hidden">
            <div className="h-full rounded" style={{ width: `${Math.max(2, (Math.abs(r.value) / m) * 100)}%`, background: r.color }} />
          </div>
          <span className="tnum font-semibold whitespace-nowrap">{fmt(r.value)}{r.note && <span className="ink-3 font-normal text-xs"> {r.note}</span>}</span>
        </div>
      ))}
    </div>
  );
}

/** SPI contribution bars with weights – the "Why is my SPI 84?" visual. */
export function SpiBars({ rows }: { rows: { label: string; score: number; weight: number; explain: string }[] }) {
  return (
    <div className="space-y-3">
      {rows.map((r, i) => (
        <div key={i}>
          <div className="flex justify-between text-sm">
            <span className="font-medium">{r.label} <span className="ink-3 text-xs">× {r.weight.toFixed(2)}</span></span>
            <span className="tnum font-semibold">{r.score.toFixed(0)}</span>
          </div>
          <div className="h-2 mt-1 rounded bg-[var(--surface-2)]">
            <div className="h-full rounded" style={{ width: `${r.score}%`, background: 'var(--seq-400)' }} />
          </div>
          <div className="text-xs ink-3 mt-0.5">{r.explain}</div>
        </div>
      ))}
    </div>
  );
}
