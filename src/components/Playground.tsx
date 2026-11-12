import React, { useState, useId } from 'react';
import { Calculator, AlertTriangle, Activity, HelpCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/content';
import { SectionHeading } from './SectionHeading';

export const Playground: React.FC = () => {
  const defaults = PORTFOLIO_DATA.playground.defaultValues;
  const [sellingPrice, setSellingPrice] = useState<number>(defaults.sellingPrice);
  const [variableCost, setVariableCost] = useState<number>(defaults.variableCost);
  const [fixedCost, setFixedCost] = useState<number>(defaults.fixedCost);
  const [unitsSold, setUnitsSold] = useState<number>(defaults.unitsSold);

  const priceId = useId();
  const vcId = useId();
  const fcId = useId();
  const unitsId = useId();

  // Core Cost Accounting Calculations
  const isViable = sellingPrice > variableCost;
  const contributionMargin = isViable ? sellingPrice - variableCost : 0;
  const contributionMarginRatio = isViable && sellingPrice > 0 
    ? (contributionMargin / sellingPrice) * 100 
    : 0;
  const breakEvenUnits = isViable && contributionMargin > 0 
    ? Math.round(fixedCost / contributionMargin) 
    : 0;
  const breakEvenSales = breakEvenUnits * sellingPrice;

  // Operating profit or loss at chosen units
  const totalRevenue = unitsSold * sellingPrice;
  const totalCost = fixedCost + (unitsSold * variableCost);
  const profitOrLoss = totalRevenue - totalCost;
  const isProfitable = profitOrLoss >= 0;

  // Chart coordinate calculations
  const maxUnits = Math.max(breakEvenUnits * 1.5, unitsSold * 1.4, 1200);
  const maxRevenue = maxUnits * sellingPrice;
  const maxCost = fixedCost + (maxUnits * variableCost);
  const maxY = Math.max(maxRevenue, maxCost, 100000) * 1.15;

  const chartW = 560;
  const chartH = 300;
  const paddingL = 60;
  const paddingR = 30;
  const paddingT = 30;
  const paddingB = 40;

  const innerW = chartW - paddingL - paddingR;
  const innerH = chartH - paddingT - paddingB;

  const getX = (units: number) => paddingL + (units / maxUnits) * innerW;
  const getY = (val: number) => paddingT + innerH - (val / maxY) * innerH;

  // Points for lines
  const revStart = { x: getX(0), y: getY(0) };
  const revEnd = { x: getX(maxUnits), y: getY(maxUnits * sellingPrice) };

  const costStart = { x: getX(0), y: getY(fixedCost) };
  const costEnd = { x: getX(maxUnits), y: getY(fixedCost + maxUnits * variableCost) };

  const bepX = getX(breakEvenUnits);
  const bepY = getY(breakEvenSales);

  const currentX = getX(unitsSold);
  const currentRevY = getY(totalRevenue);
  const currentCostY = getY(totalCost);

  // Format currency in Indian Rupees
  const formatCurrency = (val: number) => {
    return '₹' + Math.abs(Math.round(val)).toLocaleString('en-IN');
  };

  return (
    <section id="playground" className="py-20 sm:py-28 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Interactive CVP Model"
          title={PORTFOLIO_DATA.playground.heading}
          subtitle={PORTFOLIO_DATA.playground.subline}
        />

        {/* Main Calculator Card */}
        <div className="mt-10 rounded-3xl bg-white dark:bg-darkbg-card border border-cream-200 dark:border-darkbg-border shadow-soft-xl p-6 sm:p-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT: INPUT CONTROLS */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-cream-200 dark:border-darkbg-border">
                <div className="flex items-center space-x-2">
                  <Calculator className="w-5 h-5 text-accent-teal" />
                  <h3 className="font-heading font-bold text-lg text-ink-navy dark:text-white">
                    Cost & Volume Inputs
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSellingPrice(defaults.sellingPrice);
                    setVariableCost(defaults.variableCost);
                    setFixedCost(defaults.fixedCost);
                    setUnitsSold(defaults.unitsSold);
                  }}
                  className="text-xs font-semibold text-accent-teal hover:underline"
                >
                  Reset Defaults
                </button>
              </div>

              {/* 1. Selling Price per unit */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor={priceId} className="font-medium text-ink-navy dark:text-slate-200">
                    Selling Price / Unit (P)
                  </label>
                  <div className="flex items-center space-x-1">
                    <span className="text-xs text-ink-muted dark:text-slate-400">₹</span>
                    <input
                      id={priceId}
                      type="number"
                      min={1}
                      max={5000}
                      step={10}
                      value={sellingPrice}
                      onChange={(e) => setSellingPrice(Math.max(1, Number(e.target.value)))}
                      className="w-20 px-2 py-1 rounded-lg border border-cream-300 dark:border-slate-700 bg-cream-50 dark:bg-slate-800 text-right font-bold text-ink-navy dark:text-white text-xs focus:ring-1 focus:ring-accent-teal"
                    />
                  </div>
                </div>
                <input
                  type="range"
                  min={50}
                  max={2000}
                  step={10}
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(Number(e.target.value))}
                  className="w-full accent-accent-teal cursor-pointer"
                />
              </div>

              {/* 2. Variable Cost per unit */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor={vcId} className="font-medium text-ink-navy dark:text-slate-200">
                    Variable Cost / Unit (V)
                  </label>
                  <div className="flex items-center space-x-1">
                    <span className="text-xs text-ink-muted dark:text-slate-400">₹</span>
                    <input
                      id={vcId}
                      type="number"
                      min={0}
                      max={3000}
                      step={10}
                      value={variableCost}
                      onChange={(e) => setVariableCost(Math.max(0, Number(e.target.value)))}
                      className="w-20 px-2 py-1 rounded-lg border border-cream-300 dark:border-slate-700 bg-cream-50 dark:bg-slate-800 text-right font-bold text-ink-navy dark:text-white text-xs focus:ring-1 focus:ring-accent-teal"
                    />
                  </div>
                </div>
                <input
                  type="range"
                  min={10}
                  max={1500}
                  step={10}
                  value={variableCost}
                  onChange={(e) => setVariableCost(Number(e.target.value))}
                  className="w-full accent-highlight-coral cursor-pointer"
                />
              </div>

              {/* 3. Total Fixed Costs */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor={fcId} className="font-medium text-ink-navy dark:text-slate-200">
                    Total Fixed Costs (FC)
                  </label>
                  <div className="flex items-center space-x-1">
                    <span className="text-xs text-ink-muted dark:text-slate-400">₹</span>
                    <input
                      id={fcId}
                      type="number"
                      min={5000}
                      max={500000}
                      step={5000}
                      value={fixedCost}
                      onChange={(e) => setFixedCost(Math.max(1000, Number(e.target.value)))}
                      className="w-24 px-2 py-1 rounded-lg border border-cream-300 dark:border-slate-700 bg-cream-50 dark:bg-slate-800 text-right font-bold text-ink-navy dark:text-white text-xs focus:ring-1 focus:ring-accent-teal"
                    />
                  </div>
                </div>
                <input
                  type="range"
                  min={10000}
                  max={300000}
                  step={5000}
                  value={fixedCost}
                  onChange={(e) => setFixedCost(Number(e.target.value))}
                  className="w-full accent-ink-navy dark:accent-slate-400 cursor-pointer"
                />
              </div>

              {/* 4. Units Sold / Planned Volume */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor={unitsId} className="font-medium text-ink-navy dark:text-slate-200">
                    Units Sold (Q)
                  </label>
                  <input
                    id={unitsId}
                    type="number"
                    min={0}
                    max={5000}
                    step={25}
                    value={unitsSold}
                    onChange={(e) => setUnitsSold(Math.max(0, Number(e.target.value)))}
                    className="w-20 px-2 py-1 rounded-lg border border-cream-300 dark:border-slate-700 bg-cream-50 dark:bg-slate-800 text-right font-bold text-ink-navy dark:text-white text-xs focus:ring-1 focus:ring-accent-teal"
                  />
                </div>
                <input
                  type="range"
                  min={0}
                  max={2500}
                  step={25}
                  value={unitsSold}
                  onChange={(e) => setUnitsSold(Number(e.target.value))}
                  className="w-full accent-highlight-amber cursor-pointer"
                />
              </div>

              {/* Formula & Rule explanation */}
              <div className="p-4 rounded-2xl bg-cream-100 dark:bg-slate-850 border border-cream-200 dark:border-slate-800 text-xs space-y-1.5 text-ink-muted dark:text-slate-400">
                <div className="flex items-center space-x-1.5 font-semibold text-ink-navy dark:text-slate-200">
                  <HelpCircle className="w-3.5 h-3.5 text-accent-teal" />
                  <span>Costing Formula Reference</span>
                </div>
                <p>
                  <strong>Break-Even Units</strong> = Fixed Costs ÷ (Selling Price - Variable Cost)
                </p>
                <p>
                  <strong>Contribution Margin</strong> = ₹{contributionMargin} / unit ({contributionMarginRatio.toFixed(1)}%)
                </p>
              </div>
            </div>

            {/* RIGHT: LIVE OUTPUT METRICS & VISUAL CHART */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* If price <= variable cost: Display friendly safety banner */}
              {!isViable ? (
                <div className="p-6 rounded-2xl bg-red-50 dark:bg-red-950/40 border-2 border-red-200 dark:border-red-900/60 text-red-900 dark:text-red-200 space-y-2">
                  <div className="flex items-center space-x-2 font-heading font-bold text-base text-red-700 dark:text-red-400">
                    <AlertTriangle className="w-5 h-5 shrink-0" />
                    <span>Selling Price Must Exceed Variable Cost</span>
                  </div>
                  <p className="text-sm leading-relaxed">
                    At ₹{sellingPrice} selling price and ₹{variableCost} variable cost, each unit incurs a negative contribution margin of ₹{variableCost - sellingPrice}. The business loses money on every sale and can never cover fixed overheads. Please increase selling price or lower variable unit cost to calculate break-even.
                  </p>
                </div>
              ) : (
                <>
                  {/* KPI OUTPUT TILES */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {/* 1. Contribution Margin */}
                    <div className="p-3.5 rounded-2xl bg-cream-50 dark:bg-slate-800/80 border border-cream-200 dark:border-slate-700">
                      <span className="text-[11px] font-medium text-ink-muted dark:text-slate-400 block">
                        Contribution Margin
                      </span>
                      <span className="font-heading font-bold text-lg text-accent-teal dark:text-teal-400">
                        ₹{contributionMargin} <span className="text-xs font-normal">/ unit</span>
                      </span>
                      <span className="text-[10px] text-ink-muted dark:text-slate-400 block">
                        PV Ratio: {contributionMarginRatio.toFixed(1)}%
                      </span>
                    </div>

                    {/* 2. Break-Even Units */}
                    <div className="p-3.5 rounded-2xl bg-cream-50 dark:bg-slate-800/80 border border-cream-200 dark:border-slate-700">
                      <span className="text-[11px] font-medium text-ink-muted dark:text-slate-400 block">
                        Break-Even Point
                      </span>
                      <span className="font-heading font-bold text-lg text-ink-navy dark:text-white">
                        {breakEvenUnits.toLocaleString('en-IN')} <span className="text-xs font-normal">units</span>
                      </span>
                      <span className="text-[10px] text-ink-muted dark:text-slate-400 block">
                        Sales: {formatCurrency(breakEvenSales)}
                      </span>
                    </div>

                    {/* 3. Profit or Loss at Selected Units */}
                    <div className={`col-span-2 sm:col-span-1 p-3.5 rounded-2xl border ${
                      isProfitable
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
                        : 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800 text-rose-950 dark:text-rose-200'
                    }`}>
                      <span className="text-[11px] font-medium block opacity-80">
                        {isProfitable ? 'Net Operating Profit' : 'Net Operating Loss'} ({unitsSold} units)
                      </span>
                      <span className={`font-heading font-extrabold text-lg flex items-center ${
                        isProfitable ? 'text-highlight-green' : 'text-highlight-coral'
                      }`}>
                        {isProfitable ? '+' : '-'}{formatCurrency(profitOrLoss)}
                      </span>
                      <span className="text-[10px] opacity-80 block">
                        {unitsSold >= breakEvenUnits 
                          ? `${(unitsSold - breakEvenUnits).toLocaleString('en-IN')} units above BEP`
                          : `${(breakEvenUnits - unitsSold).toLocaleString('en-IN')} units below BEP`}
                      </span>
                    </div>
                  </div>

                  {/* RESPONSIVE SVG BREAK-EVEN CROSSING CHART */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-cream-50/70 dark:bg-slate-900 border border-cream-200 dark:border-darkbg-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-ink-muted dark:text-slate-400 flex items-center">
                        <Activity className="w-3.5 h-3.5 mr-1 text-accent-teal" />
                        CVP Break-Even Graph
                      </span>
                      <div className="flex items-center space-x-3 text-[11px]">
                        <span className="flex items-center">
                          <span className="w-2.5 h-2.5 rounded-full bg-accent-teal mr-1.5" />
                          Revenue
                        </span>
                        <span className="flex items-center">
                          <span className="w-2.5 h-2.5 rounded-full bg-highlight-coral mr-1.5" />
                          Total Cost
                        </span>
                        <span className="flex items-center">
                          <span className="w-2.5 h-2.5 rounded-full bg-highlight-amber mr-1.5" />
                          BEP
                        </span>
                      </div>
                    </div>

                    <div className="w-full aspect-[16/10] sm:aspect-[16/9] relative">
                      <svg
                        viewBox={`0 0 ${chartW} ${chartH}`}
                        className="w-full h-full overflow-visible select-none"
                      >
                        <defs>
                          <linearGradient id="profitFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#16A34A" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#16A34A" stopOpacity="0.05" />
                          </linearGradient>
                          <linearGradient id="lossFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#F26B4E" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#F26B4E" stopOpacity="0.05" />
                          </linearGradient>
                        </defs>

                        {/* Chart Grid Lines */}
                        <line x1={paddingL} y1={paddingT} x2={paddingL} y2={chartH - paddingB} stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
                        <line x1={paddingL} y1={chartH - paddingB} x2={chartW - paddingR} y2={chartH - paddingB} stroke="#CBD5E1" strokeWidth="1" />

                        {/* Shaded Loss Zone (Between 0 and BEP) */}
                        {breakEvenUnits > 0 && bepX > paddingL && (
                          <polygon
                            points={`${paddingL},${costStart.y} ${bepX},${bepY} ${paddingL},${revStart.y}`}
                            fill="url(#lossFill)"
                          />
                        )}

                        {/* Shaded Profit Zone (Beyond BEP to maxUnits) */}
                        {breakEvenUnits > 0 && bepX < chartW - paddingR && (
                          <polygon
                            points={`${bepX},${bepY} ${revEnd.x},${revEnd.y} ${costEnd.x},${costEnd.y}`}
                            fill="url(#profitFill)"
                          />
                        )}

                        {/* Fixed Cost Baseline (Horizontal Reference) */}
                        <line
                          x1={paddingL}
                          y1={costStart.y}
                          x2={chartW - paddingR}
                          y2={costStart.y}
                          stroke="#94A3B8"
                          strokeWidth="1"
                          strokeDasharray="4 4"
                        />
                        <text
                          x={paddingL + 6}
                          y={costStart.y - 4}
                          fontSize="10"
                          fill="#64748B"
                          fontWeight="600"
                        >
                          Fixed Overhead: {formatCurrency(fixedCost)}
                        </text>

                        {/* Total Cost Line (Coral) */}
                        <line
                          x1={costStart.x}
                          y1={costStart.y}
                          x2={costEnd.x}
                          y2={costEnd.y}
                          stroke="#F26B4E"
                          strokeWidth="2.5"
                        />

                        {/* Total Revenue Line (Teal) */}
                        <line
                          x1={revStart.x}
                          y1={revStart.y}
                          x2={revEnd.x}
                          y2={revEnd.y}
                          stroke="#0F766E"
                          strokeWidth="2.5"
                        />

                        {/* Current Operating Volume Marker (Vertical Dashed Line) */}
                        {unitsSold > 0 && currentX >= paddingL && currentX <= chartW - paddingR && (
                          <g>
                            <line
                              x1={currentX}
                              y1={paddingT}
                              x2={currentX}
                              y2={chartH - paddingB}
                              stroke="#64748B"
                              strokeWidth="1.5"
                              strokeDasharray="2 2"
                            />
                            {/* Point on Revenue */}
                            <circle cx={currentX} cy={currentRevY} r="4" fill="#0F766E" stroke="#FFFFFF" strokeWidth="1.5" />
                            {/* Point on Cost */}
                            <circle cx={currentX} cy={currentCostY} r="4" fill="#F26B4E" stroke="#FFFFFF" strokeWidth="1.5" />
                            <text
                              x={currentX}
                              y={chartH - paddingB + 16}
                              fontSize="10"
                              textAnchor="middle"
                              fill="#14213D"
                              fontWeight="bold"
                            >
                              Current: {unitsSold}
                            </text>
                          </g>
                        )}

                        {/* Break-Even Intersection Point Marker */}
                        {breakEvenUnits > 0 && bepX >= paddingL && bepX <= chartW - paddingR && (
                          <g>
                            <circle cx={bepX} cy={bepY} r="7" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2" className="animate-pulse" />
                            <circle cx={bepX} cy={bepY} r="3" fill="#FFFFFF" />
                            {/* BEP Label Callout */}
                            <g transform={`translate(${Math.min(bepX + 10, chartW - 130)}, ${Math.max(bepY - 24, paddingT + 10)})`}>
                              <rect width="115" height="22" rx="6" fill="#14213D" opacity="0.9" />
                              <text x="57" y="15" fontSize="10" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">
                                BEP: {breakEvenUnits.toLocaleString('en-IN')} units
                              </text>
                            </g>
                          </g>
                        )}

                        {/* X-Axis labels */}
                        <text x={paddingL} y={chartH - paddingB + 14} fontSize="9" fill="#94A3B8" textAnchor="middle">0</text>
                        <text x={chartW - paddingR} y={chartH - paddingB + 14} fontSize="9" fill="#94A3B8" textAnchor="middle">
                          {Math.round(maxUnits).toLocaleString('en-IN')} units
                        </text>

                        {/* Y-Axis labels */}
                        <text x={paddingL - 6} y={chartH - paddingB} fontSize="9" fill="#94A3B8" textAnchor="end">₹0</text>
                        <text x={paddingL - 6} y={paddingT + 10} fontSize="9" fill="#94A3B8" textAnchor="end">
                          {formatCurrency(maxY)}
                        </text>
                      </svg>
                    </div>
                  </div>
                </>
              )}

              {/* Sample Data Disclaimer Note */}
              <p className="text-xs text-center text-ink-muted dark:text-slate-400 italic">
                {PORTFOLIO_DATA.playground.disclaimer}
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
