# AlgoZenith Dashboard Clone

This project is a React-based web application that replicates the layout and functionality of the "AlgoZenith" learning platform. It includes various features such as navigation panels, chapter views, learning material sections, and a tabbed interface. The layout and component structure is designed to match a given design specification.

## Project Structure

The application is structured into several main components to organize the sidebar, tabs, chapter list, and learning material sections effectively.

### Key Components

- **Sidebar**: Main navigation panel that includes links to various sections like Dashboard, Learn, Forums, Upskill, Contest, and Leaderboard.
- **Chapter Sidebar**: Contains a list of chapters with their respective durations.
- **Tabs**: Provides a tabbed interface for switching between "Mentor Sessions" and "Learning Material" views.
- **Learning Material**: Displays parts within a chapter, each containing specific content types (videos, articles, quizzes, etc.), which are expandable.

## Features

- **Responsive Design**: Adapts layout for different screen sizes.
- **Tab Navigation**: Allows users to switch between "Mentor Sessions" and "Learning Material."
- **Expandable Sections**: Users can expand each part in a chapter to view detailed content.
- **Progress Tracking**: Shows progress bars and duration for different learning materials.

## Technologies Used

- **React**: Main framework for building the UI components.
- **React Router**: Used for handling client-side routing between sections.
- **CSS**: Custom CSS for styling components and layout.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed on your machine.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/algozenith-dashboard-clone.git
   cd algozenith-dashboard-clone
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Application**

   ```bash
   npm start
   ```

4. **View in Browser**

   Open [http://localhost:3000/upskill](http://localhost:3000/upskill) in your browser.

## Project Structure

```
algozenith-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── Sidebar.js              # Main navigation sidebar
│   │   ├── Sidebar.css
│   │   ├── ChapterSidebar.js       # Sidebar with chapters
│   │   ├── ChapterSidebar.css
│   │   ├── Tabs.js                 # Tabbed navigation component
│   │   ├── Tabs.css
│   │   ├── LearningMaterial.js     # Learning material with expandable parts
│   │   ├── LearningMaterial.css
│   ├── pages/
│   │   ├── UpskillPage.js          # Main page layout for the Upskill section
│   │   ├── UpskillPage.css
│   ├── App.js                      # Main app component with routing
│   ├── index.js                    # Entry point for the React app
└── package.json
```

## Usage

- **Sidebar Navigation**: Click on any of the main navigation buttons (Dashboard, Learn, etc.) to navigate between sections.
- **Upskill Section**: Click on the "Upskill" button in the main sidebar to access the subpage with tabs for "Mentor Sessions" and "Learning Material."
- **Tabs**: Switch between "Mentor Sessions" and "Learning Material" by clicking on the tab buttons at the top.
- **Chapter Navigation**: In the "Learning Material" view, click on any chapter in the chapter sidebar to view its contents.
- **Expandable Parts**: Click on a part (e.g., Part 1) to expand and view its contents, including videos, articles, and quizzes.

## Customization

Feel free to customize the layout, colors, and styles by modifying the CSS files in the `src/components` and `src/pages` directories.

## Screenshots

### Main Page Layout

![Main Layout Screenshot](./screenshots/main-layout.png)

### Chapter and Learning Material View

![Learning Material Screenshot](./screenshots/learning-material.png)

_(Note: Add screenshots to the `screenshots` folder and update these links accordingly)_

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. Any improvements or bug fixes are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
