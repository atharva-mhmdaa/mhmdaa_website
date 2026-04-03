'use client';

import { useState, useCallback } from 'react';

const FILTERS = [
  { key: 'all', label: 'All Topics', color: '#1B2A5B' },
  { key: 'clinical-guidelines', label: 'Clinical Guidelines', color: '#0ea5e9' },
  { key: 'oig-analysis', label: 'OIG Analysis', color: '#7c3aed' },
  { key: 'ai-billing', label: 'AI & Billing', color: '#f59e0b' },
  { key: 'revenue-cycle', label: 'Revenue Cycle', color: '#C8102E' },
];

interface BlogsToolbarProps {
  totalCount: number;
  onSearch: (query: string) => void;
  onSort: (value: string) => void;
  onFilter: (filter: string) => void;
}

export default function BlogsToolbar({ totalCount, onSearch, onSort, onFilter }: BlogsToolbarProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchVal, setSearchVal] = useState('');

  const handleFilter = useCallback((key: string) => {
    setActiveFilter(key);
    onFilter(key);
  }, [onFilter]);

  const handleClear = useCallback(() => {
    setActiveFilter('all');
    setSearchVal('');
    onFilter('all');
    onSearch('');
  }, [onFilter, onSearch]);

  const showClear = activeFilter !== 'all' || searchVal !== '';

  return (
    <div className="qnav-wrap" role="search" aria-label="Filter and sort publications">
      <div className="qnav-inner">
        <div className="qnav-row1">
          <div className="qnav-search-wrap">
            <svg width="16" height="16" fill="none" stroke="#1B2A5B" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input
              className="qnav-search"
              type="search"
              placeholder="Search publications..."
              aria-label="Search publications"
              value={searchVal}
              onChange={(e) => { setSearchVal(e.target.value); onSearch(e.target.value); }}
            />
          </div>
          <div className="qnav-sort-wrap">
            <span className="qnav-sort-label">Sort by</span>
            <select
              className="qnav-sort"
              aria-label="Sort publications"
              onChange={(e) => onSort(e.target.value)}
            >
              <option value="default">Featured</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="az">Title A–Z</option>
            </select>
          </div>
          <span className="qnav-count">
            {totalCount} {totalCount === 1 ? 'publication' : 'publications'}
          </span>
        </div>
        <div className="qnav-row2">
          <span className="qnav-filter-label">Filter:</span>
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`qnav-chip${activeFilter === f.key ? ' active' : ''}`}
              onClick={() => handleFilter(f.key)}
            >
              <span className="qnav-chip-dot" style={{ background: f.color }} />
              {f.label}
            </button>
          ))}
          <button
            className={`qnav-clear${showClear ? ' visible' : ''}`}
            onClick={handleClear}
            aria-label="Clear filters"
          >
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
