import { useEffect, useState } from 'react'
import { Select } from './Select'
import { _selectArg } from './common'

const isNot = (str) => str.indexOf('NOT') !== -1
const argMap = ['x1', 'x2', 'x3']
const pNotMap = ['P', 'NOT P']
const gNotMap = ['', 'NOT']
const opMap = ['&', 'OR', '~', '->']

const opFunc = [
  (x, y) => x && y,
  (x, y) => x || y,
  (x, y) => x === y,
  (x, y) => !x || y,
]

const notFunc = [(x) => x, (x) => !x]

export const InputFunc = ({
  setFunc = () => {},
  setP1 = () => {},
  setP2 = () => {},
  label = 'Ф',
  defaultValues = [
    gNotMap[0],
    pNotMap[0],
    pNotMap[0],
    opMap[0],
    argMap[0],
    argMap[0],
    argMap[0],
    argMap[0],
  ],
}) => {
  const [gNot, setGNot] = useState(defaultValues[0])
  const [p1Not, setP1Not] = useState(defaultValues[1])
  const [p2Not, setP2Not] = useState(defaultValues[2])
  const [oper, setOper] = useState(defaultValues[3])
  const [p11, setP11] = useState(defaultValues[4])
  const [p12, setP12] = useState(defaultValues[5])
  const [p21, setP21] = useState(defaultValues[6])
  const [p22, setP22] = useState(defaultValues[7])

  useEffect(() => {
    console.log('inputfunc effect')
    isNot(gNot)

    setFunc(() => (pp, x1, x2, x3) => {
      const xMap = [x1, x2, x3]

      const _not = _selectArg(gNot, gNotMap, notFunc)
      const _op = _selectArg(oper, opMap, opFunc)
      const _p1Not = _selectArg(p1Not, pNotMap, notFunc)
      const _p2Not = _selectArg(p2Not, pNotMap, notFunc)
      const _p11 = _selectArg(p11, argMap, xMap)
      const _p12 = _selectArg(p12, argMap, xMap)
      const _p21 = _selectArg(p21, argMap, xMap)
      const _p22 = _selectArg(p22, argMap, xMap)

      return [
        pp(_p11, _p12),
        pp(_p21, _p22),
        _not(_op(_p1Not(pp(_p11, _p12)), _p2Not(pp(_p21, _p22)))),
      ]
    })

    setP1(`P(${p11},${p12})`)
    setP2(`P(${p21},${p22})`)
  }, [gNot, oper, p1Not, p2Not, p11, p12, p21, p22, setFunc, setP1, setP2])

  return (
    <div className="App-InputFunc">
      {label} = <Select options={gNotMap} value={gNot} setValue={setGNot} />
      <br />
      (<Select options={pNotMap} value={p1Not} setValue={setP1Not} />
      <Select options={argMap} value={p11} setValue={setP11} />,
      <Select options={argMap} value={p12} setValue={setP12} />
      )
      <br />
      <Select options={opMap} value={oper} setValue={setOper} />
      <br />
      <Select options={pNotMap} value={p2Not} setValue={setP2Not} />(
      <Select options={argMap} value={p21} setValue={setP21} />,
      <Select options={argMap} value={p22} setValue={setP22} />)
    </div>
  )
}
