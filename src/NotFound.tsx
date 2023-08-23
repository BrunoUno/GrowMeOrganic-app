import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl">
      <div>
        <h1>Page Not Found</h1>
      </div>
      <div>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/");
          }}
        >
          Go Back
        </Button>
      </div>
    </Container>
  );
}
