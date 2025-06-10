import React, { useEffect } from 'react'
import { getIncomeHistory, getRoiHistory } from '../../api/admin-api'

const ROiIncome = () => {
    useEffect(()=>{
        getRoiHistory();
        getIncomeHistory()
    },[])
  return (
    <div>
      vhbjnkml,;.'/
      ;lkjbvc'
    </div>
  )
}

export default ROiIncome
