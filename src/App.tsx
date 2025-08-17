
import React from 'react'
import InputField from './components/InputField/InputField'
import DataTable, { Column } from './components/DataTable/DataTable'

type User = { id: number; name: string; email: string; age: number }

const sampleData: User[] = [
  { id: 1, name: 'Aisha Khan', email: 'aisha@example.com', age: 24 },
  { id: 2, name: 'Ravi Patel', email: 'ravi@example.com', age: 29 },
  { id: 3, name: 'Meera Iyer', email: 'meera@example.com', age: 21 },
]

const columns: Column<User>[] = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'age', label: 'Age', numeric: true },
]

export default function App() {
  const [val, setVal] = React.useState('')
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Frontend Assignment</h1>
        <button
          className="px-3 py-1.5 rounded-lg border text-sm"
          onClick={() => document.documentElement.classList.toggle('dark')}
        >
          Toggle Theme
        </button>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">InputField Demo</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InputField
            label="Your name"
            placeholder="Enter name"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            helperText="This is a helper text"
            variant="outlined"
            size="md"
            clearable
          />
          <InputField
            label="Password"
            placeholder="Enter password"
            type="password"
            variant="filled"
            size="lg"
            passwordToggle
          />
          <InputField
            label="Loading"
            placeholder="Fetching..."
            loading
            variant="ghost"
            size="sm"
          />
          <InputField
            label="Invalid"
            placeholder="Email"
            invalid
            errorMessage="Please provide a valid email"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">DataTable Demo</h2>
        <DataTable
          data={sampleData}
          columns={columns}
          selectable
          selectionMode="multiple"
          onRowSelect={(rows) => console.log('Selected rows', rows)}
        />
      </section>
    </div>
  )
}
