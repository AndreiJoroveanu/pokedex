import { useNavigate } from "react-router";

export const useMoveBack = () => {
  const navigate = useNavigate();
  return () => void navigate(-1);
};
