import './App.css'
import { useState } from 'react'
import { InputFunc } from './InputFunc'
import { TableResult } from './TableResult'
import { Select } from './Select'
import { InputPFunc } from './InputPFunc'

const xMap = (() => {
  let result = []
  for (let i = 0; i < 2; i++)
    for (let j = 0; j < 2; j++)
      for (let k = 0; k < 2; k++)
        result.push([Boolean(i), Boolean(j), Boolean(k)])
  return result
})()

const pp1 = (x, y) => x === y
const pp2 = (x, y) => !x === y

export const App = () => {
  const [P1, setP1] = useState(() => (x1, x2) => x1)
  const [P2, setP2] = useState(() => (x1, x2) => x1)
  const [F1, setF1] = useState(() => (pp, x1, x2, x3) => [x1, x2, x3])
  const [F2, setF2] = useState(() => (pp, x1, x2, x3) => [x1, x2, x3])
  const [labelP11, setLabelP11] = useState('')
  const [labelP12, setLabelP12] = useState('')
  const [labelP21, setLabelP21] = useState('')
  const [labelP22, setLabelP22] = useState('')
  console.log(F1)
  return (
    <div className="App">
      <InputPFunc
        setFunc={setP1}
        label="P2"
        defaultValues={['И', 'Л', 'Л', 'И']}
      />
      <InputPFunc
        setFunc={setP2}
        label="P2"
        defaultValues={['Л', 'И', 'Л', 'И']}
      />
      <InputFunc
        setFunc={setF1}
        setP1={setLabelP11}
        setP2={setLabelP12}
        label="Ф1"
        defaultValues={['', 'P', 'NOT P', 'OR', 'x1', 'x2', 'x1', 'x3']}
      />
      <InputFunc
        setFunc={setF2}
        setP1={setLabelP21}
        setP2={setLabelP22}
        label="Ф2"
        defaultValues={['', 'P', 'P', '&', 'x2', 'x3', 'x1', 'x3']}
      />
      <TableResult
        P11={labelP11}
        P12={labelP12}
        P21={labelP21}
        P22={labelP22}
        result={xMap.map((arg) => [
          ...arg,
          ...F1(P1, ...arg),
          ...F2(P1, ...arg),
        ])}
      />
      <TableResult
        P11={labelP11}
        P12={labelP12}
        P21={labelP21}
        P22={labelP22}
        result={xMap.map((arg) => [
          ...arg,
          ...F1(P2, ...arg),
          ...F2(P2, ...arg),
        ])}
      />
    </div>
  )
}
