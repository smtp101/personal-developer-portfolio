import React, { useState, useMemo } from 'react';
import { Download, Sliders, RefreshCw, TrendingUp, DollarSign, CheckCircle2, Layers } from 'lucide-react';
import { SIMULATION_DATA, MISSimData } from '../data/portfolioData';
import { formatTabularNumber } from '../utils/filterAndSearch';

export const InteractiveMISSimulator: React.FC = () => {
  const [selectedQuarter, setSelectedQuarter] = useState<string>('Q3');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [costReductionScenario, setCostReductionScenario] = useState<boolean>(false);

  // Filtered dataset based on selection
  const filteredData = useMemo(() => {
    return SIMULATION_DATA.filter((item) => {
      const matchQuarter = selectedQuarter === 'ALL' || item.quarter === selectedQuarter;
      const matchRegion = selectedRegion === 'All' || item.region === selectedRegion;
      return matchQuarter && matchRegion;
    });
  }, [selectedQuarter, selectedRegion]);

  // Aggregate metrics
  const totals = useMemo(() => {
    let rev = 0;
    let bud = 0;
    let cost = 0;
    let reconSum = 0;
    let slaSum = 0;
    let tx = 0;

    filteredData.forEach((row) => {
      rev += row.revenue;
      bud += row.budget;
      const effectiveCost = costReductionScenario ? row.operationalCost * 0.95 : row.operationalCost;
      cost += effectiveCost;
      reconSum += row.reconciliationRate;
      slaSum += row.slaAdherence;
      tx += row.transactions;
    });

    const count = filteredData.length || 1;
    const variance = rev - bud;
    const variancePercent = bud > 0 ? (variance / bud) * 100 : 0;
    const operatingMargin = rev > 0 ? ((rev - cost) / rev) * 100 : 0;
    const avgRecon = reconSum / count;
    const avgSla = slaSum / count;

    return {
      totalRevenue: rev,
      totalBudget: bud,
      totalCost: cost,
      variance,
      variancePercent,
      operatingMargin,
      avgRecon,
      avgSla,
      totalTransactions: tx,
    };
  }, [filteredData, costReductionScenario]);

  // CSV Export Handler
  const handleExportCSV = () => {
    const headers = ['Quarter', 'Region', 'Revenue ($)', 'Budget ($)', 'Operational Cost ($)', 'Recon Rate (%)', 'SLA (%)', 'Transactions'];
    const rows = filteredData.map((d) => {
      const effCost = costReductionScenario ? d.operationalCost * 0.95 : d.operationalCost;
      return [
        d.quarter,
        `"${d.region}"`,
        d.revenue,
        d.budget,
        effCost.toFixed(0),
        d.reconciliationRate,
        d.slaAdherence,
        d.transactions,
      ].join(',');
    });

    const csvContent = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `MIS_Executive_Summary_${selectedQuarter}_${selectedRegion}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="simulator" className="py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            <span>Live Demonstration</span>
            <span aria-hidden="true">·</span>
            <span>Interactive Tool</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
            Interactive MIS Cockpit & Financial Model
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Experience the caliber of executive reporting models I build. Adjust quarters, filter regions, or toggle cost-optimization scenarios
            to inspect live consolidated financial variances, operational SLAs, and export sanitized summaries.
          </p>
        </div>

        {/* Cockpit Card Container */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
          {/* Top Control Bar */}
          <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 flex flex-wrap items-center justify-between gap-4">
            {/* Filter Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Quarter Selector */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Quarter:</span>
                <div className="inline-flex rounded-lg border border-slate-200 dark:border-slate-800 p-0.5 bg-white dark:bg-slate-900">
                  {['Q1', 'Q2', 'Q3', 'Q4', 'ALL'].map((q) => (
                    <button
                      key={q}
                      onClick={() => setSelectedQuarter(q)}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                        selectedQuarter === q
                          ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-sm'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Region Selector */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Region:</span>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="px-2.5 py-1 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-400"
                >
                  <option value="All">All Regions (Consolidated)</option>
                  <option value="North America">North America</option>
                  <option value="EMEA">EMEA</option>
                  <option value="APAC">APAC</option>
                </select>
              </div>

              {/* Scenario Toggle */}
              <button
                onClick={() => setCostReductionScenario(!costReductionScenario)}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-lg border transition-colors ${
                  costReductionScenario
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Scenario: -5% OpEx Optimization</span>
              </button>
            </div>

            {/* Actions: Export CSV & Reset */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleExportCSV}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-white transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CSV</span>
              </button>
            </div>
          </div>

          {/* Metric Dashboard Summary Strip */}
          <div className="p-6 grid grid-cols-2 lg:grid-cols-4 gap-6 border-b border-slate-200 dark:border-slate-800">
            <div className="space-y-1">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Consolidated Revenue
              </span>
              <div className="text-2xl font-bold font-mono tabular-nums text-slate-900 dark:text-slate-100">
                {formatTabularNumber(totals.totalRevenue, 'currency')}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Target: {formatTabularNumber(totals.totalBudget, 'currency')}
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Budget Variance
              </span>
              <div
                className={`text-2xl font-bold font-mono tabular-nums ${
                  totals.variance >= 0
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-rose-600 dark:text-rose-400'
                }`}
              >
                {totals.variance >= 0 ? '+' : ''}
                {formatTabularNumber(totals.variance, 'currency')}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                {totals.variancePercent >= 0 ? '+' : ''}
                {totals.variancePercent.toFixed(2)}% vs Target
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Operating Margin (EBITDA)
              </span>
              <div className="text-2xl font-bold font-mono tabular-nums text-slate-900 dark:text-slate-100">
                {totals.operatingMargin.toFixed(1)}%
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Total OpEx: {formatTabularNumber(totals.totalCost, 'currency')}
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Recon Rate & Tx Volume
              </span>
              <div className="text-2xl font-bold font-mono tabular-nums text-emerald-600 dark:text-emerald-400">
                {totals.avgRecon.toFixed(2)}%
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                {formatTabularNumber(totals.totalTransactions, 'integer')} items audited
              </div>
            </div>
          </div>

          {/* Interactive Data Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40 text-slate-600 dark:text-slate-400 font-semibold uppercase tracking-wider">
                  <th className="py-3 px-4">Quarter</th>
                  <th className="py-3 px-4">Region</th>
                  <th className="py-3 px-4 text-right">Actual Revenue</th>
                  <th className="py-3 px-4 text-right">Budget</th>
                  <th className="py-3 px-4 text-right">Variance ($)</th>
                  <th className="py-3 px-4 text-right">OpEx</th>
                  <th className="py-3 px-4 text-right">Reconciliation</th>
                  <th className="py-3 px-4 text-right">SLA</th>
                  <th className="py-3 px-4 text-right">Volume</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-mono tabular-nums">
                {filteredData.map((row, idx) => {
                  const effectiveCost = costReductionScenario
                    ? row.operationalCost * 0.95
                    : row.operationalCost;
                  const variance = row.revenue - row.budget;
                  const isPositive = variance >= 0;

                  return (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/80 dark:hover:bg-slate-850/50 transition-colors"
                    >
                      <td className="py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">
                        {row.quarter}
                      </td>
                      <td className="py-3 px-4 font-sans font-medium text-slate-800 dark:text-slate-200">
                        {row.region}
                      </td>
                      <td className="py-3 px-4 text-right text-slate-900 dark:text-slate-100 font-medium">
                        {formatTabularNumber(row.revenue, 'currency')}
                      </td>
                      <td className="py-3 px-4 text-right text-slate-500 dark:text-slate-400">
                        {formatTabularNumber(row.budget, 'currency')}
                      </td>
                      <td
                        className={`py-3 px-4 text-right font-medium ${
                          isPositive
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : 'text-rose-600 dark:text-rose-400'
                        }`}
                      >
                        {isPositive ? '+' : ''}
                        {formatTabularNumber(variance, 'currency')}
                      </td>
                      <td className="py-3 px-4 text-right text-slate-600 dark:text-slate-400">
                        {formatTabularNumber(effectiveCost, 'currency')}
                      </td>
                      <td className="py-3 px-4 text-right text-emerald-600 dark:text-emerald-400 font-semibold">
                        {row.reconciliationRate.toFixed(2)}%
                      </td>
                      <td className="py-3 px-4 text-right text-slate-700 dark:text-slate-300">
                        {row.slaAdherence.toFixed(1)}%
                      </td>
                      <td className="py-3 px-4 text-right text-slate-500 dark:text-slate-400">
                        {formatTabularNumber(row.transactions, 'integer')}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Bottom Footnote & Model Invariants */}
          <div className="p-4 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span>Formulas Enforced: </span>
              <code className="text-slate-700 dark:text-slate-300 bg-slate-200/50 dark:bg-slate-800 px-1 py-0.5 rounded font-mono">
                Variance = Revenue - Budget
              </code>
              <span className="mx-2">·</span>
              <code className="text-slate-700 dark:text-slate-300 bg-slate-200/50 dark:bg-slate-800 px-1 py-0.5 rounded font-mono">
                EBITDA Margin = (Revenue - OpEx) / Revenue
              </code>
            </div>
            <div className="text-slate-500 dark:text-slate-400">
              {filteredData.length} active row entries calculated in real-time
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
