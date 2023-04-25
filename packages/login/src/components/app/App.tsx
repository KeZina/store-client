import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from 'login/components/Login';

export const App = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='*' element={<Navigate to='login' />} />
    </Routes>
  );
};