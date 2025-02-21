# Movie Ticket Booking Portal

## Overview
This is a web-based movie ticket booking portal built using **React.js** that allows users to browse movies, book tickets, and track their bookings. The project implements authentication, real-time filtering, persistent state management, and smooth user experience.

## Features
### 1. **Login Screen**
- Authenticates user using hardcoded credentials:
  ```json
  {
    "username": "naval.ravikant",
    "password": "05111974"
  }
  ```
- On success → Navigates to **Booking** screen
- On failure → Displays error **"Wrong Credentials"** & resets input fields

  ![login-screen](https://github.com/Aarushi-bhatia/movie-tickets-booking/blob/main/public/login-screen.png)

### 2. **Booking Screen**
- Displays a list of **movie cards** with details:
  - Movie Name
  - Release Year
  - ID
  - Image
- Implements **real-time search filtering** for movies
- Clicking a movie routes the user to the **Selection Screen** with movie data

  ![booking-screen](https://github.com/Aarushi-bhatia/movie-tickets-booking/blob/main/public/booking-screen.png)

### 3. **Selection Screen**
- User provides:
  - **Ticket Count** (default: 1)
  - **Time Slot** (default: 12:00 PM)
  - **Date** (default: today)
- Clicking **"Book Ticket"**:
  - Creates a new entry in **Activity Screen**
  - Displays **loading animation** & toast message **"Tickets Booked"** for 5 seconds
  - Routes to **Activity Screen** to show updated bookings
 
    ![selection-screen](https://github.com/Aarushi-bhatia/movie-tickets-booking/blob/main/public/selection-screen.png)

### 4. **Activity Screen**
- Displays **all booked tickets** with details:
  - Movie Name
  - Ticket Count
  - Time Slot
  - Date
  - **Total Price = $25 × Ticket Count**
 
    ![activity-screen](https://github.com/Aarushi-bhatia/movie-tickets-booking/blob/main/public/activity-screen.png)



