import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from 'shared/components/NavBar';
import { StoreItemList } from 'store/components/StoreItemList';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />} >
        <Route path='store' element={<StoreItemList />} />
      </Route>
      <Route path='*' element={<Navigate to='store' />} />
    </Routes>
  );
};