/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
     
      
      screens:{
        'sm': '355px',
        // => @media (min-width: 640px) { ... }
  
        'md': '567px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      
    },

    backgroundImage:{
      'Buy':"url('https://wallpapercave.com/wp/wp9576584.jpg')",
      'dark':"url('https://permaco.nl/wp-content/uploads/2015/07/hills-dark.jpg')",
      'Laptop':"url('https://www.phsg.ch/sites/default/files/styles/hauptteaser_l/public/image/2021/ICT%20News.jpg?itok=EFjqmuGl')",
      'start':"url('https://www.energymonitor.ai/wp-content/uploads/sites/2/2023/08/shutterstock_2142628905-1.jpg')",
      'm1':"url('https://livedemo00.template-help.com/wt_60074/images/carousel-02-370x210.jpg')",
      'm2':"url('https://livedemo00.template-help.com/wt_60074/images/carousel-01-370x210.jpg')",
      'm3':"url('https://livedemo00.template-help.com/wt_60074/images/carousel-03-370x210.jpg')",
      'm4':"url('https://livedemo00.template-help.com/wt_60074/images/carousel-04-370x210.jpg')",
      'Quote':"url('./public/Quote.jpg')",
      'White':"url('./public/White.jpg')",
      'Bg':"url('./public/Bg.jpg')",


      

    }
    },
  },
  plugins: [
    
  ],
}