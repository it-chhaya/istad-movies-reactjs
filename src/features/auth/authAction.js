import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk('/auth/login', 
    async (data) => {
        try {
            let response = await fetch(`https://api.escuelajs.co/api/v1/auth/login`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (response.status === 401) {
                return Promise.reject(error)
            }

            let json = await response.json()
            
            return json

        } catch (error) {
            return Promise.reject(error)
        }
    }
)