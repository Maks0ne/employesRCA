import AppInfo from './components/app-info/app-info';
import SearchPanel from './components/search-panel/search-panel';
import AppFilter from './components/app-filter/app-filter';
import EmployersList from './components/employers-list/employers-list';
import EmployeesAddForm from './components/employers-add-form/employers-add-form';

import './App.css'


function App() {

  const data = [
    {name:'John.C', salary: 1500, increase: false},
    {name:'Alex.M', salary: 1800, increase: true},
    {name:'Edward.C', salary: 900, increase: false}
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployersList data={data} />
      <EmployeesAddForm />
    </div >
  );
}

export default App;