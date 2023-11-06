import AppInfo from './components/app-info/app-info';
import SearchPanel from './components/search-panel/search-panel';
import AppFilter from './components/app-filter/app-filter';
import EmployersList from './components/employers-list/employers-list';
import EmployeesAddForm from './components/employers-add-form/employers-add-form';

import './App.css'


function App() {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployersList />
      <EmployeesAddForm />
    </div >
  );
}

export default App;