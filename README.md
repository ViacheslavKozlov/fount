# Fount test task App Documentation

This documentation provides an overview of the Fount test task App, including its features, components, and usage instructions.

## Table of Contents

- [Fount test task App Documentation](#fount-test-task-app-documentation)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Components](#components)
  - [Firebase Configuration](#firebase-configuration)
  - [Authentication](#authentication)
  - [Notes Management](#notes-management)
  - [Styling](#styling)
  - [Known Issues](#known-issues)

## Introduction

The Fount test task App is a simple web application that allows users to create, view, and manage notes. It leverages Angular for the frontend, Firebase for authentication and data storage, and provides a responsive and user-friendly interface.

## Features

- User authentication using Firebase Authentication
- Create new notes with a title and content
- View a list of created notes
- Persistent authentication state
- Responsive design for different screen sizes

## Installation

1. Clone the repository: `git clone https://github.com/ViacheslavKozlov/fount.git`
2. Install dependencies: `npm ci`
3. Configure Firebase:
- Create a Firebase project at `https://console.firebase.google.com/`
- Update the Firebase configuration in `src/environments/environment.ts` with your project's configuration and add your own user's creds or use existed configuration with follow cred's login: `test@test.com`, password: `test-test`

## Usage

1. Run the development server: `npm run start`
2. Open your browser and navigate to `http://localhost:4200`.
3. Run new app build: `npm run build`.
4. For further deployment to Firebase free hosting run: `npm run deploy`

## Components

- `app-component`: The root component that contains the layout and routing logic.
- `login-component`: Allows users to sign in with their email and password.
- `home-component`: Displays a welcome message or other relevant content.
- `create-note-component`: Allows users to create new notes.
- `notes-list-component`: Displays a list of created notes.
- `logout-button-component`: Provides a global logout button in the navigation bar.

## Firebase Configuration

The app uses Firebase for authentication and Firestore for data storage. Make sure to update the Firebase configuration in `src/environments/environment.ts`.

## Authentication

- Users can sign in using their email and password stored in firebase Authentication
- Persistent authentication state is enabled using Firebase session persistence.

## Notes Management

- Before notes management pleases add your user to Firebase Authentication use existed cred's
- Users can create new notes with a title and content after successful login
- Created notes are stored in Firestore under the user's ID.
- Users can view their list of created notes.

## Styling

- The app uses basic CSS styles to provide a clean and user-friendly interface.
- Responsive design ensures a consistent experience across different devices.

## Known Issues

- No known issues at the moment but nothing perfect at all)).