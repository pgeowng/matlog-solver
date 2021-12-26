import { useEffect, useState } from 'react'
import { Select } from './Select'
import { _selectArg } from './common'

const boolMap = ['Л', 'И']
const boolValue = [false, true]
export const InputPFunc = ({
  setFunc = () => {},
  label = 'P',
  defaultValues = [boolMap[0], boolMap[0], boolMap[0], boolMap[0]],
}) => {
  const [v0, setV0] = useState(defaultValues[0])
  const [v1, setV1] = useState(defaultValues[1])
  const [v2, setV2] = useState(defaultValues[2])
  const [v3, setV3] = useState(defaultValues[3])

  useEffect(() => {
    console.log('p1 effect')
    setFunc(() => (x1, x2) => {
      console.log(x1, x2)
      const val = _selectArg(x1 * 2 + x2, [0, 1, 2, 3], [v0, v1, v2, v3])
      return _selectArg(val, boolMap, boolValue)
    })
  }, [v0, v1, v2, v3, setFunc])
  return (
    <div className="App-PFunc">
      {label} =
      <Select options={boolMap} value={v0} setValue={setV0} />
      <Select options={boolMap} value={v1} setValue={setV1} />
      <Select options={boolMap} value={v2} setValue={setV2} />
      <Select options={boolMap} value={v3} setValue={setV3} />
    </div>
  )
}
