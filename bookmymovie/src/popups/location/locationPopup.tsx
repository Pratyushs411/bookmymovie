"use client"
import React from 'react'
import Select from 'react-select'
import styles from '../popups.module.css'
import axios from 'axios'
import { toast } from 'react-toastify'
const LocationPopup = (
    {
        setShowLocationPopup
    }: {
        setShowLocationPopup: React.Dispatch<React.SetStateAction<boolean>>
    }
) => {

    const [cities, setCities] = React.useState<any[]>([])


    const [selectedCity, setSelectedCity] = React.useState<any>(null)

    const getcities = async () => {
        const indianCities = [
            "Jabalpur",
            "Mumbai",
            "Delhi",
            "Bangalore",
            "Hyderabad",
            "Chennai",
            "Kolkata",
            "Pune",
            "Ahmedabad",
            "Jaipur",
            "Surat",
            "Lucknow",
            "Kanpur",
            "Nagpur",
            "Indore",
            "Thane",
            "Bhopal",
            "Visakhapatnam",
            "Pimpri-Chinchwad",
            "Patna",
            "Vadodara"
        ];

        const cities = indianCities.map((city) => {
            return {
                label: city,
                value: city
            }

        })

        setCities(cities)
    }

    React.useEffect(() => {
        getcities()
    }, [])

    const handleSave = () => {
        setShowLocationPopup(false)
       
    }

    return (
        <div className={styles.popup_bg}>
            <div className={styles.popup_cont}>
                <select
                    className={styles.select}
                    onChange={(e) => {
                        setSelectedCity(e.target.value)
                    }}
                >
                    <option value="" disabled selected>Select your city</option>
                    {
                        cities.map((city: any) => {
                            return <option key={city.value} value={city.value}>{city.label}</option>
                        })
                    }
                </select>

                <button className={styles.btn}
                    onClick={handleSave}
                >Save</button>
            </div>
        </div>
    )
}

export default LocationPopup