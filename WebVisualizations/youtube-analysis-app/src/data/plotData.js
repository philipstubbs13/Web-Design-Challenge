export const plots = [
  {
    id: '1',
    title: 'How does publish time affect engagement and views (US)?',
    menu_title: 'How Publish Time Affects Engagement (US)',
    image: 'time_of_day_us.png',
    alt: 'Average number of likes and comments vs number of trending videos at different times of day in the US.',
    description: 'This visualization deals with video publish time. That is, the time when a content creator uploads a video to their channel. The publish time column from the data set included both the time and the date, which required a little bit of cleaning and formatting to do this analysis. However, this project only looked at time of day. Something to perhaps look at later on is days of the week. From this visualization, one of the first things we can see is the relationship between average number of views and publish time in the US. From this visualization, we can see that the number of likes and comments hovers around 50,000 to 100,000 throughout the day. There are 2 major spikes seen in likes/comments. One is at 4 a.m. and the other is at 9 a.m. Another thing we can see from this visualization is the relationship  between number of trending videos and publish time. This is shown in the visualization with the green bars. We can see that a majority of these videos were published some time between 1 p.m. and 10 p.m., with the highest number of videos being published at 4 p.m. So, if a content creator were to consider when the best time to upload a video would be, the best times would be some time in the afternoon and would want to avoid publishing in the morning (unless they only care about increasing their engagement).'
  },
  {
    id: '2',
    title: 'How does publish time affect engagement and views (OUS)?',
    menu_title: 'How Publish Time Affects Engagement (OUS)',
    image: 'time_of_day_ous.png',
    alt: 'Average number of likes and comments vs number of trending videos at different times of day outside of the US.',
    description: 'This visualization deals with video publish time outside of the US. For countries outside of the US, we can see that the average number of likes and comments are much lower than the US. We also see a steady increase in videos starting at 8 a.m. and peaking at about 4 p.m. This is the time period a content creator should consider when posting a video. They might also want to consider avoiding uploading between 10 p.m. and 7 a.m. Overall, besides the spikes we see here at 4, 5, and 9 a.m., publish time does not look to have much of an effect for countries outside of the US as compared to the US.'
  },
  {
    id: '3',
    title: 'Are certain types of videos more likely to make it on the trending list (US)?',
    menu_title: 'Trending Videos by Category (US)',
    image: 'top_trending_videos_by_category_us.png',
    alt: 'Trending videos by category in the US.',
    description: 'This visualization shows the YouTube categories that are most popular for US viewers. As shown by the visualization, the top 3 categories for trending videos in the US are "Entertainment", "Music", and "How-to & Style." No single category consumes the majority (50 percent or more) of the trending videos list for the US. A diverse collection of category viewership is shown in the chart with the "Others" category, making up more than one third of the viewership. The "Others" category in the US includes 38 additional categories outside of the top 5 categories.'
  },
  {
    id: '4',
    title: 'Are certain types of videos more likely to make it on the trending list (OUS)?',
    menu_title: 'Trending Videos by Category (OUS)',
    image: 'top_trending_videos_by_category_ous.png',
    alt: 'Trending videos by category in countries outside of the US.',
    description: 'This visualization shows the YouTube categories that are most popular for viewers outside of the United States. As shown by the visualization, the top 3 categories for trending videos in countries outside of the US are "Entertainment", "People & Blogs", and "News & Politics." Interestingly, there is no category that consumes the majority (50 percent or more) of the trending videos list for countries outside of the US. The visualization shows a diverse collection of categories considering the addition of "Others", which includes 26 additional categories outside of the top 5 categories.'
  },
  {
    id: '5',
    title: 'How do tags (keywords) affect videos?',
    menu_title: 'Percentage of Videos With Tags vs Without',
    image: 'percentage_videos_no_tags.png',
    alt: 'Percentage of videos with tags and without tags.',
    description: 'This visualization displays the percent of trending YouTube videos that use tags versus the percent of trending YouTube videos that do not use tags. From this visualization, we can see the importance of using tags, as less than 5% of trending videos used no tags. As a result, the use of tags is strongly recommended when creating your next YouTube video.'
  },
  {
    id: '6',
    title: 'What are the most used tags for trending videos?',
    menu_title: 'Most Used Tags for Trending Videos',
    image: 'popular_tags_us_2018.png',
    alt: 'Most used tags for trending videos.',
    description: 'Tags are descriptive keywords you add to your video to help viewers find your content. When users type keywords related to your tags in the YouTube search box, your video will appear in their search results. According to YouTube, tagging is one of the most important ways to rank your videos in their search. This visualization shows the most used tags for trending videos in the US. From this visualization, we see that the top 3 tags are significantly more used, drove more views, and also seem to be related to the Entertainment category. This project also looked at the most common tags for each category as some categories are likely to use certain tags more than others. Specifically, this project looked at the top 10 tags from the top 5 categories with the most trending videos.'
  },
  {
    id: '7',
    title: 'What are the most used tags for trending comedy videos?',
    menu_title: 'Most Used Tags for Trending Comedy Videos',
    image: 'top_tags_Comedy_US.png',
    alt: 'Most used tags for trending comedy videos.',
    description: 'This project looked at and compared trending videos for the top 5 most popular video categories on YouTube. One of the top 5 categories is comedy. Specifically, this visualization shows the top 10 tags for trending videos in the US that are a part of the comedy video category. From this visualization, we see that the top 3 tags ("funny", "comedy", and "humor") are significantly more used than other tags in this visualization.'
  },
  {
    id: '8',
    title: 'What are the most used tags for trending entertainment videos?',
    menu_title: 'Most Used Tags for Trending Entertainment Videos',
    image: 'top_tags_Entertainment_US.png',
    alt: 'Most used tags for trending entertainment videos.',
    description: 'This project looked at and compared trending videos for the top 5 most popular video categories on YouTube. One of the top 5 categories is entertainment (which is the number one most popular category). Specifically, this visualization shows the top 10 tags for trending videos in the US that are a part of the entertainment video category. From this visualization, we see that the top 2 tags ("funny" and "comedy") are significantly more used than other tags in this visualization.'
  },
  {
    id: '9',
    title: 'What are the most used tags for trending how to and style videos?',
    menu_title: 'Most Used Tags for Trending How to and Style Videos',
    image: 'top_tags_Howto & Style_US.png',
    alt: 'Most used tags for trending how to and style videos.',
    description: 'This project looked at and compared trending videos for the top 5 most popular video categories on YouTube. One of the top 5 categories is how to and style. Specifically, this visualization shows the top 10 tags for trending videos in the US that are a part of the how to and style video category. From this visualization, we see that the top tag used for this category is "how to", which is significantly more used than the other tags in this visualiztion. Also, it is interesting to point out that 4 ("chef", "kitchen", "food", and "recipe") of the top 10 tags are related to cooking, which suggests people are using YouTube videos to learn how to cook meals.'
  },
  {
    id: '10',
    title: 'What are the most used tags for trending music videos?',
    menu_title: 'Most Used Tags for Trending Music Videos',
    image: 'top_tags_Music_US.png',
    alt: 'Most used tags for trending music videos.',
    description: 'This project looked at and compared trending videos for the top 5 most popular video categories on YouTube. One of the top 5 categories is music. Specifically, this visualization shows the top 10 tags for trending videos in the US that are a part of the music video category. From this visualization, we see that the top 2 tags ("Pop" and "Records") are significantly more used than other tags in this visualization. This visualization also suggests that pop music is one of the most popular music genres in the US. Based on this visualization, other popular music genres include country and alternative.'
  },
  {
    id: '11',
    title: 'What are the most used tags for trending news and politics videos?',
    menu_title: 'Most Used Tags for Trending News and Politics Videos',
    image: 'top_tags_News & Politics_US.png',
    alt: 'Most used tags for trending news and politics videos.',
    description: 'This project looked at and compared trending videos for the top 5 most popular video categories on YouTube. One of the top 5 categories is news and politics. Specifically, this visualization shows the top 10 tags for trending videos in the US that are a part of the news and politics video category. From this visualization, we see that the top 3 tags used for this video category are "news", "politics", and "breaking news". 3 of these tags ("breaking news", "Happening Now", and "latest News") all related to recent news stories, suggesting that many people hear about the latest news events from YouTube and YouTube is one of the primary (if not the primary) means of getting information about what is going on in the world.'
  },
]