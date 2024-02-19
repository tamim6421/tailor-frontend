"use client"

import axios from "axios";
import { useState, useEffect } from "react";
import {BASE_URL} from "../../../components/utils/api"


const Category = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true);
            const response = await axios.get(`${BASE_URL}/sleeve_view`);
            setData(response?.data?.data);

              // Store data in local storage
        localStorage.setItem('data', JSON.stringify(response?.data?.data));

          } catch (error) {
            console.error('Error fetching data:', error.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);

      console.log(data)


    return (
        <div className="min-h-[100vh] pt-20">
            this is categry page {data?.length}
        </div>
    );
};

export default Category;