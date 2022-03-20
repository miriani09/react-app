import './App.scss';
import Test from "./components/Test";
// import WeekDays from "./components/Button";
// import Counter from './components/Counter';

function App() {
    // const days = [
    //     { id: 1, day: 'Monday' },
    //     { id: 2, day: 'Tuesday' },
    //     { id: 3, day: 'Wednesday' },
    //     { id: 4, day: 'Thursday' },
    //     { id: 5, day: 'Friday' },
    //     { id: 6, day: 'Saturday' },
    //     { id: 7, day: 'Sunday' },
    // ]

  return (
    <div>
      <Test sum={2+2}/>
        {/*<WeekDays days={days}/>*/}
        {/*<Counter/>*/}
    </div>
  );
}

export default App;


