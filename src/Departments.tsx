import { DeptData } from "./Dept";
import Department from "./Department";

interface DepartmentTS {
  department: string;
  sub_departments: string[];
}

export default function Departments() {
  return (
    <>
      {DeptData.map((department: DepartmentTS, index: number) => {
        let DeptProps = department;
        return <Department {...DeptProps} key={index} />;
      })}
    </>
  );
}
