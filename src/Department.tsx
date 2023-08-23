import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";

interface DepartmentTS {
  department: string;
  sub_departments: string[];
}

export default function Department(DeptProps: DepartmentTS) {
  const [collapse, setCollapse] = React.useState(false);
  const [checked, setChecked] = React.useState(() => {
    return DeptProps.sub_departments.map((value) => {
      return {
        subDepartmentName: value,
        subDeptChecked: false,
      };
    });
  });
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkedNew = checked.map((value) => {
      value.subDeptChecked = event.target.checked;
      return value;
    });
    setChecked(checkedNew);
  };

  const handleChange2 = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let id: number = 0;
    const checkedNew = checked.map((value) => {
      if (id === index) {
        value.subDeptChecked = event.target.checked;
      }

      id++;
      return value;
    });
    setChecked(checkedNew);
  };

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      {collapse &&
        checked.map((value, index) => {
          return (
            <FormControlLabel
              key={index}
              label={value.subDepartmentName}
              control={
                <Checkbox
                  checked={value.subDeptChecked}
                  onChange={(event) => handleChange2(event, index)}
                  style={{ marginLeft: "80px" }}
                />
              }
            />
          );
        })}
    </Box>
  );

  return (
    <div>
      <Button
        variant="text"
        style={{ height: "30px" }}
        onClick={() => setCollapse(!collapse)}
      >
        {collapse ? "-" : "+"}
      </Button>
      <FormControlLabel
        label={DeptProps.department}
        control={
          <Checkbox
            checked={checked.every((check) => check.subDeptChecked === true)}
            onChange={handleChange1}
          />
        }
      />
      {children}
    </div>
  );
}
