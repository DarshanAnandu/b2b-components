import './App.css';
import Analytics from './components/mainbody/analytics/Analytics.jsx';
import DetailedCalendar from './components/mainbody/calendar/DetailedCalendar/DetailedCalendar';
import Task from './components/mainbody/Tasks/Task';
const App = () => {
  return (
    <div>
      <DetailedCalendar/>
      {/* <Task /> */}
      {/* <Analytics/> */}
    </div>
  )
}

export default App