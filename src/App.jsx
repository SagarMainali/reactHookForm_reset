import { useForm } from "react-hook-form"
import { useEffect, useRef } from "react"

function App() {

  const { register, handleSubmit, reset, watch, getValues } = useForm({
    defaultValues: {},
    shouldUnregister: true
  })

  const documentType = watch('documentType')

  const prevDocType = useRef(documentType)

  useEffect(() => {

    console.log('outside if statement')

    if (documentType && documentType !== prevDocType.current) {

      console.log('inside if statement')

      const values = getValues()

      reset(
        {
          ...values,
          documentNumber: '*_*'
        }
      )

      prevDocType.current = documentType

    }
  }, [documentType])

  console.log({ ...getValues() })

  return (
    <form onSubmit={handleSubmit(data => console.log(data))} style={{ display: "flex", flexDirection: 'column', rowGap: "10px", width: "300px" }}>
      <select {...register('documentType')}>
        <option value="d1">d1</option>
        <option value="d2">d2</option>
        <option value="d3">d3</option>
      </select>
      {documentType === 'd1' &&
        <input type="text" {...register('d1_no')} placeholder="d1_no" />
      }
      {documentType === 'd2' &&
        <input type="text" {...register('d2_no')} placeholder="d2_no" />
      }
      {documentType === 'd3' &&
        <input type="text" {...register('d3_no')} placeholder="d3_no" />
      }

      <input type="text" {...register('documentNumber')} placeholder="doc num" />

      <button type="submit">send</button>
    </form>
  )
}

export default App