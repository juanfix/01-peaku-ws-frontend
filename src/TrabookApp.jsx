import { TrabookProvider } from './context/TrabookProvider';
import { AppRouter } from './router/AppRouter';

export const TrabookApp = () => {
  return (
    <TrabookProvider>
      <AppRouter />
    </TrabookProvider>
  );
};
