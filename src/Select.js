import { useCallback } from 'react'

export const Select = ({ options = [], value, setValue }) => {
  const onChange = useCallback(
    (e) => {
      setValue(e.target.value)
    },
    [setValue]
  )
  return (
    <select value={value} onChange={onChange}>
      {options.map((e, i) => (
        <option key={e} value={e}>
          {e}
        </option>
      ))}
    </select>
  )
}
