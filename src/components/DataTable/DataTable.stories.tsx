import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import DataTable, { Column } from "./DataTable";
import "../../index.css";

type User = { id: number; name: string; email: string; age: number };

const data: User[] = [
  { id: 1, name: "Aisha Khan", email: "aisha@example.com", age: 24 },
  { id: 2, name: "Ravi Patel", email: "ravi@example.com", age: 29 },
  { id: 3, name: "Meera Iyer", email: "meera@example.com", age: 21 },
  { id: 4, name: "John Doe", email: "john@example.com", age: 32 },
];

const columns: Column<User>[] = [
  { key: "name", label: "Name", sortable: true },
  { key: "email", label: "Email", sortable: true },
  { key: "age", label: "Age", numeric: true, sortable: true },
];

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable as any,
  parameters: { controls: { expanded: true } },
};
export default meta;
type Story = StoryObj<any>;

// Default table
export const Default: Story = {
  render: () => <DataTable data={data} columns={columns} />,
};

// Sorting demo
export const WithSorting: Story = {
  render: () => (
    <DataTable
      data={data}
      columns={columns.map((c) => ({ ...c, sortable: true }))}
    />
  ),
};

// Loading state
export const Loading: Story = {
  render: () => <DataTable data={[]} columns={columns} loading />,
};

// Empty state
export const Empty: Story = {
  render: () => <DataTable data={[]} columns={columns} emptyMessage="No users found!" />,
};

// Selectable (multiple)
export const SelectableMultiple: Story = {
  render: () => (
    <DataTable
      data={data}
      columns={columns}
      selectable
      selectionMode="multiple"
      onRowSelect={(rows) => alert("Selected rows: " + rows.map(r => r.name).join(", "))}
    />
  ),
};

// Selectable (single)
export const SelectableSingle: Story = {
  render: () => (
    <DataTable
      data={data}
      columns={columns}
      selectable
      selectionMode="single"
      onRowSelect={(rows) => alert("Selected: " + (rows[0]?.name ?? "none"))}
    />
  ),
};
