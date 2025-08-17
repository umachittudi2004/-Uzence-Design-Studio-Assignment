import React, { useMemo, useState } from "react";

export interface Column<T> {
  key: keyof T;
  label: string;
  numeric?: boolean;
  sortable?: boolean;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  selectionMode?: "single" | "multiple";
  onRowSelect?: (selectedRows: T[]) => void;
  emptyMessage?: string;
}

function DataTable<T extends { id: number | string }>({
  data,
  columns,
  loading = false,
  selectable = false,
  selectionMode = "multiple",
  onRowSelect,
  emptyMessage = "No data available",
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc" | null>(null);
  const [selected, setSelected] = useState<Set<T>>(new Set());

  
  const sorted = useMemo(() => {
    if (!sortKey || !sortDir) return data;
    const copy = [...data];
    copy.sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      if (av == null && bv == null) return 0;
      if (av == null) return -1;
      if (bv == null) return 1;
      if (typeof av === "number" && typeof bv === "number") {
        return sortDir === "asc" ? av - bv : bv - av;
      }
      const as = String(av).toLowerCase();
      const bs = String(bv).toLowerCase();
      return sortDir === "asc" ? as.localeCompare(bs) : bs.localeCompare(as);
    });
    return copy;
  }, [data, sortKey, sortDir]);

  
  const toggleSort = (key: keyof T, sortable?: boolean) => {
    if (sortable === false) return;
    if (sortKey !== key) {
      setSortKey(key);
      setSortDir("asc");
    } else {
      if (sortDir === "asc") setSortDir("desc");
      else if (sortDir === "desc") {
        setSortKey(null);
        setSortDir(null);
      } else {
        setSortDir("asc");
      }
    }
  };

  const toggleRow = (row: T) => {
    const next = new Set<T>(selectionMode === "single" ? [] : selected);
    if (selectionMode === "single") {
      next.add(row);
    } else {
      if (next.has(row)) next.delete(row);
      else next.add(row);
    }
    setSelected(next);
    onRowSelect?.(Array.from(next));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-6">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-transparent" />
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
          Loading data...
        </span>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500 dark:text-gray-400">
        <p className="text-sm">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <table role="table" className="min-w-full text-sm">
        <thead className="bg-gray-50 dark:bg-gray-700/50">
          <tr role="row">
            {selectable && <th className="px-3 py-2"></th>}
            {columns.map((col) => (
              <th
                key={String(col.key)}
                scope="col"
                role="columnheader"
                aria-sort={
                  sortKey === col.key
                    ? sortDir === "asc"
                      ? "ascending"
                      : "descending"
                    : "none"
                }
                className="px-4 py-3 text-left font-semibold"
              >
                <button
                  type="button"
                  className={`inline-flex items-center gap-1 ${
                    col.sortable === false ? "cursor-default" : "hover:underline"
                  }`}
                  onClick={() => toggleSort(col.key, col.sortable)}
                  disabled={col.sortable === false}
                >
                  {col.label}
                  {sortKey === col.key && (
                    <span aria-hidden="true">
                      {sortDir === "asc" ? "▲" : sortDir === "desc" ? "▼" : ""}
                    </span>
                  )}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row) => {
            const isSelected = selected.has(row);
            return (
              <tr
                key={String(row.id)}
                role="row"
                className={`border-t border-gray-100 dark:border-gray-700 ${
                  isSelected ? "bg-gray-50 dark:bg-gray-700/30" : ""
                }`}
              >
                {selectable && (
                  <td className="px-3 py-2" role="cell">
                    <input
                      type={selectionMode === "single" ? "radio" : "checkbox"}
                      checked={isSelected}
                      onChange={() => toggleRow(row)}
                      aria-label="Select row"
                    />
                  </td>
                )}
                {columns.map((col) => (
                  <td
                    key={String(col.key)}
                    role="cell"
                    className={`px-4 py-2 whitespace-nowrap ${
                      col.numeric ? "text-right" : "text-left"
                    }`}
                  >
                    {col.render
                      ? col.render(row[col.key], row)
                      : String(row[col.key] ?? "")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
