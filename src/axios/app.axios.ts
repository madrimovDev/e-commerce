import axios from "axios"

const app = axios

app.defaults.baseURL = process.env.REACT_APP_API_URL
app.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded"
app.defaults.headers.post["Content-Type"] = "application/json"

export default app