<template>
    <div class="container">
        <div class="header">
            <h1>WEATHER APP</h1>
            <div class="search-bar">
                
                <input type="text" v-model="city" placeholder="Enter city name" class="search-input"/>
                
                <button @click="searchByCity" class="search-button">Search</button>
            </div>
        </div>
    </div>

    <main>

        <div v-if="weatherData">
            <h2>
                {{ weatherData.name }}, {{ weatherData.sys.country }}
            </h2>
            <div>

                <img :src="iconUrl" alt="Weather Icon" />
                
                <p>{{ temperature }} °C</p>
            </div>
            <span>{{ weatherData.weather[0].description }}</span>
        </div>
    </main>
</template>

<script>
import axios from "axios";

const apikey = "e9833f029dadc30449d307c0636f219c"; 

export default {
    name: "App",
    data() {
        return {
            city: "",  
            weatherData: null,
        };
    },
    computed: {
    
        temperature() {
            return this.weatherData
                ? Math.floor(this.weatherData.main.temp) 
                : null;
        },
        iconUrl() {
            return this.weatherData
                ? `http://openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`
                : null;
        },
    },
    methods: {
        async searchByCity() {
            if (this.city.trim() === "") {
                return alert("Please enter a city name.");
            }
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apikey}&units=metric`;

            try {
                const response = await axios.get(url);
                this.weatherData = response.data; 
            } catch (error) {
                console.error("Error fetching weather data:", error);
                this.weatherData = null; 
            }
        },
    },
};
</script>
