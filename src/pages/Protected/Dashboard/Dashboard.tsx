
import { useOutletContext } from "react-router"
import DashboardData from "./DashboardData/DashboardData"

const Dashboard = ({ }) => {

    const { name } = useOutletContext<{ name: string }>();

    return (
        <section className="py-4 px-6">
            <h2 className="text-[40px] font-bold">Welcome, {name}</h2>
            <DashboardData />
        </section>
    )
}

export default Dashboard