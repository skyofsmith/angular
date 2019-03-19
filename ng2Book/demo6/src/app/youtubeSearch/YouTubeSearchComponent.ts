export var youTubeServiceInjectables: Array<any> = [
  { provide: YouTubeService, useClass: YouTubeService },
  { provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY },
  { provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL }
]
