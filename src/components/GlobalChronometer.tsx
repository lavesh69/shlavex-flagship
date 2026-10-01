'use client';

import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';

interface MarketData {
  time: string;
  isOpen: boolean;
  status: 'OPEN' | 'CLOSED';
}

function checkMarketStatus(
  now: Date,
  timeZone: string,
  openH: number,
  openM: number,
  closeH: number,
  closeM: number
): MarketData {
  const timeStr = now.toLocaleTimeString('en-US', {
    timeZone,
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  });

  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });
  const parts = formatter.formatToParts(now);
  const weekday = parts.find((p) => p.type === 'weekday')?.value;
  const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10);
  const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);

  const isWeekend = weekday === 'Sat' || weekday === 'Sun';
  const currentMinutes = hour * 60 + minute;
  const openMinutes = openH * 60 + openM;
  const closeMinutes = closeH * 60 + closeM;

  const isOpen = !isWeekend && currentMinutes >= openMinutes && currentMinutes < closeMinutes;

  return {
    time: timeStr,
    isOpen,
    status: isOpen ? 'OPEN' : 'CLOSED',
  };
}

export const GlobalChronometer: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [clocks, setClocks] = useState<{
    utc: string;
    nyc: MarketData;
    ldn: MarketData;
    tyo: MarketData;
  }>({
    utc: '--:--:-- UTC',
    nyc: { time: '--:--', isOpen: false, status: 'CLOSED' },
    ldn: { time: '--:--', isOpen: false, status: 'CLOSED' },
    tyo: { time: '--:--', isOpen: false, status: 'CLOSED' },
  });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();

      const utcStr = now.toLocaleTimeString('en-US', {
        timeZone: 'UTC',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });

      // NYC: NYSE/NASDAQ 09:30 - 16:00 EST
      const nyc = checkMarketStatus(now, 'America/New_York', 9, 30, 16, 0);

      // LDN: LSE 08:00 - 16:30 GMT
      const ldn = checkMarketStatus(now, 'Europe/London', 8, 0, 16, 30);

      // TYO: TSE 09:00 - 15:00 JST
      const tyo = checkMarketStatus(now, 'Asia/Tokyo', 9, 0, 15, 0);

      setClocks({
        utc: `${utcStr} UTC`,
        nyc,
        ldn,
        tyo,
      });
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`w-full border-y border-white/10 bg-[#070707]/90 backdrop-blur-md py-2.5 px-4 sm:px-8 text-[10px] font-mono tracking-widest flex flex-wrap items-center justify-between gap-3 select-none ${className}`}
    >
      {/* Precision Hub Clocks with Stationary Tabular Numerals & Live Market LEDs */}
      <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
        {/* UTC Master Atomic Anchor */}
        <div className="flex items-center gap-2 text-white bg-white/[0.04] px-2.5 py-1 border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse" />
          <span className="tabular-nums font-semibold tracking-wider min-w-[94px] text-left">
            {clocks.utc}
          </span>
        </div>

        <span className="text-white/20 hidden sm:inline">|</span>

        {/* Global Financial Nodes with Market Status LEDs */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          {/* NYC */}
          <div className="flex items-center gap-1.5 text-xs text-white/90">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                clocks.nyc.isOpen
                  ? 'bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-pulse'
                  : 'bg-amber-500/50'
              }`}
              title={`NYC Market: ${clocks.nyc.status}`}
            />
            <span className="text-shlavex-dim text-[10px]">NYC:</span>
            <span className="tabular-nums font-mono text-[10px] text-[#E8E2D5] min-w-[36px]">
              {clocks.nyc.time}
            </span>
            <span
              className={`text-[8px] tracking-normal px-1 py-0.5 rounded font-mono ${
                clocks.nyc.isOpen
                  ? 'text-emerald-400 bg-emerald-400/10'
                  : 'text-shlavex-dim bg-white/[0.03]'
              }`}
            >
              {clocks.nyc.status}
            </span>
          </div>

          {/* LDN */}
          <div className="flex items-center gap-1.5 text-xs text-white/90">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                clocks.ldn.isOpen
                  ? 'bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-pulse'
                  : 'bg-amber-500/50'
              }`}
              title={`London Market: ${clocks.ldn.status}`}
            />
            <span className="text-shlavex-dim text-[10px]">LDN:</span>
            <span className="tabular-nums font-mono text-[10px] text-[#E8E2D5] min-w-[36px]">
              {clocks.ldn.time}
            </span>
            <span
              className={`text-[8px] tracking-normal px-1 py-0.5 rounded font-mono ${
                clocks.ldn.isOpen
                  ? 'text-emerald-400 bg-emerald-400/10'
                  : 'text-shlavex-dim bg-white/[0.03]'
              }`}
            >
              {clocks.ldn.status}
            </span>
          </div>

          {/* TYO */}
          <div className="flex items-center gap-1.5 text-xs text-white/90">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                clocks.tyo.isOpen
                  ? 'bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-pulse'
                  : 'bg-amber-500/50'
              }`}
              title={`Tokyo Market: ${clocks.tyo.status}`}
            />
            <span className="text-shlavex-dim text-[10px]">TYO:</span>
            <span className="tabular-nums font-mono text-[10px] text-[#E8E2D5] min-w-[36px]">
              {clocks.tyo.time}
            </span>
            <span
              className={`text-[8px] tracking-normal px-1 py-0.5 rounded font-mono ${
                clocks.tyo.isOpen
                  ? 'text-emerald-400 bg-emerald-400/10'
                  : 'text-shlavex-dim bg-white/[0.03]'
              }`}
            >
              {clocks.tyo.status}
            </span>
          </div>
        </div>
      </div>

      {/* Institutional Telemetry */}
      <div className="flex items-center gap-3 text-shlavex-dim text-[9px] uppercase">
        <div className="flex items-center gap-1.5 text-shlavex-silver">
          <Activity size={10} className="text-emerald-400/80 animate-pulse" />
          <span className="tracking-widest">NODAL INTEGRITY: NOMINAL</span>
        </div>
        <span className="hidden md:inline text-white/20">•</span>
        <span className="hidden md:inline tracking-wider">LATENCY: &lt;1.2MS</span>
        <span className="hidden lg:inline text-white/20">•</span>
        <span className="hidden lg:inline tracking-wider">CLEARING: 24/7 GLOBAL</span>
      </div>
    </div>
  );
};
