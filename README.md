# YouTube Trending Visualization Dashboard

* [Background](#background)
* [Link to Data Analysis Project](#analysis_project)
* [Visualization Dashboard Website](#website)
* [Requirements](#requirements)

## <a name="background"></a>Background

Data is more powerful when we share it with others. This repository is a visualization dashboard website using visualizations I created in a past project to uncover patterns, observations, and insights about trending videos on YouTube. 

## <a name="analysis_project"></a>Link to Data Analysis Project

For more information about the data analysis and visualization project I completed, you can go [here](https://github.com/philipstubbs13/team_hopper), which will take you to the github repository for the project.

## <a name="website"></a>Visualization Dashboard Website

To create the visualization dashboard website, I used HTML, CSS, and Bootstrap. The website is currently deployed to GitHub Pages. The website works on a variety of screen sizes, from mobile to desktop. To check out the visualization dashboard website (it's dark theme), you can go [here](https://philipstubbs13.github.io/Web-Design-Challenge/#/youtube-insights).

## <a name="requirements"></a>Requirements

The website consists of the following:

* A [landing page](https://philipstubbs13.github.io/Web-Design-Challenge/#/youtube-insights) containing:
  * An explanation/summary of the project.
  * Links to each visualization page.
    * The currently active visualization has a green border around it.
* A [page](https://philipstubbs13.github.io/Web-Design-Challenge/#/plots/3) for each visualization containing:
  * A descriptive title and heading.
  * The plot/visualization.
  * A paragraph describing the plot and its significance.
* A [comparison](https://philipstubbs13.github.io/Web-Design-Challenge/#/comparison) page that:
  * Contains all of the visualizations on the same page so you can easily visually compare them.
  * Uses a bootstrap grid to make the page responsive on a variety of screen sizes.
    * The grid is 2 visualizations across on screens medium and larger, and 1 across on extra-small and small screens.
* A [data](https://philipstubbs13.github.io/Web-Design-Challenge/#/data) page that:
  * Displays a responsive table containing the data used in the visualizations.
  * The data table on this page came from exporting the [.csv file](./WebVisualizations/Resources/US_videos.csv) as HTML using the pandas ```to_html``` method, which generates a HTML table from a pandas dataframe. The code for this conversion is in a jupyter notebook file located [here](./WebVisualizations/csv_to_html.ipynb).
  * The table is a bootstrap responsive table component.
* A navigation menu that:
  * Has the name of the site on the left of the nav, which allows users to return to the landing page from any page.
  * Contains a dropdown on the right of the navbar named "Plots", which provides links to each individual visualization page.
  * Provides two more links on the right: "Comparisons", which links to the comparisons page, and "Data", which links to the data page.
  * Background color changes going from a large to a small screen size.
  * Is responsive (uses media queries).

