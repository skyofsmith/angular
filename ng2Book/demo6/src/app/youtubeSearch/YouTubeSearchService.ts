let YOUTUBE_API_KEY: string = "XXX_YOUR_KEY_HERE_XXX";
let YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";

@Injectable()
export class YouTubeService {
constructor(private http: Http,
@Inject(YOUTUBE_API_KEY) private apiKey: string,
@Inject(YOUTUBE_API_URL) private apiUrl: string) {
}