import React, { useContext } from 'react'
import PlanCategoria from '../../apis/PlanCategoria'
import UserContext from '../../hooks/Context';

const Plan = () => {
      const {plan} = useContext(UserContext);
  return (
    <div>

        {
            plan != null || plan != undefined ?
            <PlanCategoria /> :
            <></>

        }
    </div>
  )
}

export default Plan