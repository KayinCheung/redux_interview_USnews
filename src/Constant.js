
const APIKey = 'b5e5c8f361424ccab40c738aef523780'
const page_size = 10
const domain = `washingtonpost.com,nytimes.com`
const backupImg = {
    "The Washington Post": "https://www.washingtonpost.com/resizer/2CjPNwqvXHPS_2RpuRTKY-p3eVo=/1484x0/www.washingtonpost.com/pb/resources/img/twp-social-share.png",
    "The New York Times": "https://static01.nyt.com/newsgraphics/images/icons/defaultPromoCrop.png"
}


module.exports = {
    APIKey: APIKey,
    page_size: page_size,
    domain: domain,
    backupImg: backupImg
}