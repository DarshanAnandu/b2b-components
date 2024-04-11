import Calendar from "../calendar/Calendar"
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="out">
            <div className="sidebar-container">
                <h1>Calendar</h1>
                <Calendar />
            </div>
        </div>
    )
}

export default Sidebar