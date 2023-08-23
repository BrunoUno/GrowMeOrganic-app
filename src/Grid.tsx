import { useEffect, useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

interface GridDataTs {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Grid() {
  const [gridData, setGridData] = useState<GridDataTs[]>([]);
  const rows: GridRowsProp = gridData;

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "title", headerName: "TITLE", width: 550 },
    { field: "body", headerName: "BODY", width: 780 },
    { field: "userId", headerName: "USER ID", width: 80 },
  ];
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setGridData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div style={{ height: 319, width: "100%", marginTop: "50px" }}>
        <DataGrid autoPageSize rows={rows} columns={columns} />
      </div>
    </>
  );
}
