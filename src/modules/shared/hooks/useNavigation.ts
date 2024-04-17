import { useNavigate } from 'react-router';

export const useNavigation = () => {
  const navigate = useNavigate();

  const goTo = (link: string) => {
    navigate(link);
  };

  return goTo;
};
