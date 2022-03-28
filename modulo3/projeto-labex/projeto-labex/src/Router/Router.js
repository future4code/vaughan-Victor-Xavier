import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AdminHomePage } from "../pages/AdminHomePage"
import { ApplicationFormPage } from "../pages/ApplicationFormPage"
import { CreateTripPage } from "../pages/CreateTripPage"
import { HomePage } from "../pages/HomePage"
import { ListTripsPage } from "../pages/ListTripsPage"
import { LoginPage } from "../pages/LoginPage"
import { useNavigate } from "react-router-dom"
import { TripDetailsPage } from "../pages/TripDetailsPage"



export const Router = () => {


    return (

        <BrowserRouter>
            <Routes>

                <Route exact path="/" element={<HomePage />} />

                <Route exact path="/admin/trips/list" element={<AdminHomePage />} />

                <Route exact path="Application" element={<ApplicationFormPage />} />

                <Route exact path="/admin/trips/create" element={<CreateTripPage />} />

                <Route exact path="List-Trip" element={<ListTripsPage />} />

                <Route exact path="/admin/trips" element={<TripDetailsPage />} />

                <Route exact path="Login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>

    )
}