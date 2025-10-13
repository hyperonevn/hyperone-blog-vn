interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Hyper One Smart Home',
    description: `Nhà thông minh không còn là tương lai – mà là tiêu chuẩn sống của bạn.
Ngôi nhà biết lắng nghe, tự động điều khiển ánh sáng, điều hoà và an ninh chỉ với một chạm hoặc giọng nói.
Mọi thứ vận hành trơn tru, liền mạch – như thể ngôi nhà hiểu được bạn.`,
    imgSrc: '/static/images/cover1.jpg',
    href: 'https://smarthome.hyperonevn.com',
  },
  {
    title: 'Hyper Bot — Intelligent AI Assistant',
    description: `Hyper Bot là trợ lý AI thông minh dành cho doanh nghiệp hiện đại.
Giúp giảm khối lượng công việc lặp lại, tăng tốc độ phản hồi và cải thiện phối hợp nội bộ.
Thiết kế linh hoạt, có thể tích hợp liền mạch vào nhiều nền tảng như Zalo, Gmail, Slack hay Telegram — 
mang đến trải nghiệm đồng nhất và tự nhiên nhất.`,
    imgSrc: '/static/images/cover2.jpg',
    href: 'http://hyperonevn.com/#services',
  },
]

export default projectsData
