//usememo

import React, { useMemo } from "react";

function SalaryCalculator({ salary }) {

  const yearlySalary = useMemo(() => {
    console.log("Calculating Yearly Salary");

    return salary * 12;
  }, [salary]);

  return (
    <div>
      <h2>Yearly Salary : ${yearlySalary}</h2>
    </div>
  );
}

export default SalaryCalculator;