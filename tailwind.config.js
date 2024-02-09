const { Container } = require('postcss');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["*",
  "./src/**/*.{html,js}",
  "./node_modules/tw-elements/dist/js/**/*.js"

],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: { 
       'crimson':'rgba(195, 20, 50, 0.5)',
       'dark-green':'rgba(0, 128, 0, 0.5)',
       'bright-yellow':'rgba(235, 255, 3, 0.5)',
       'bright-green':'rgba(13, 205, 148, 0.5)',
       'bright-fead':'rgba(146, 85, 233, 0.5)',
       'bright':'#9255E9',
       'dark-blue':'#5E44F8',
       'grey-color':'#FCFCFF',
       'white-grey':'#CACACA',
       'gray-scale':'rgba(230, 231, 233, 0.5)', 
       'bagni-scale':'rgba(145, 151, 179, 1)', 
       'light-grey':'#9197B3', 
       'pink':' rgba(247, 40, 74, 0.05);',
       'silver-white':'rgba(94, 68, 248, 0.05);',
       'crystal-blue':'#ebe9ff;',  
       'crystals':'#EBEBEB;',  
       'top-boxs-hwdo':'0px 10px 60px rgba(226, 236, 249, 0.5);',
       'bluetransperent':'rgba(94, 68, 248, 0.10)',
       'dark-black': '#2A2A2A',
       'space-angel': '#3A416F',
       'cerulean-blue': '#3A47AE', 
       'secondary': '#6A6A6A',
       'grey02': '#F9FAFB',
       'secondarybg': 'rgba(106, 106, 106, 0.1)',
       'secondaryinput': 'rgba(223, 223, 223, 1)',
       'tooltipbg': 'rgba(240, 240, 240, 1)',
       'steel-grey': '#78808A',
       'light-green': '#8DB776',
       'light-greens':'rgba(141, 183, 118, 0.2)', 
       'golden-bells':'rgba(216, 137, 19, 0.2)',
       'golden-fead':'rgba(254, 249, 239, 1)',
       'purply-blue': '#DDD7FD',
       'green': '#E1F6D6',
      'light-black':'#7A7A7A',
       'smoke': '#E6E7E9',
       'soft-peach': '#EDEDED',
       'pink-dark': '#F5487F',
       'gramshair': '#F5F7F9',
       'red': '#F7284A',
       'red-light':'rgba(247, 40, 74, 0.2)',
       'wash': '#F9FAFC',
       'soapstone': '#FBFBFB',
       'palegray': '#FCFCFC',
       'whiteas-heaven': '#FEFEFE',
       'white': '#FFFFFF',
       'pink': '#F7284A33', 
       'dark-bluergba':'rgba(94, 68, 248, 0.2);',
       'harmonies':' #F7F5FE',
       'white-elight':'rgba(255, 255, 255, 0.2)',
       'white-blrb':'rgba(255, 255, 255, 0.5)',
       'blue':'#3366FF',
       'light-blue':'#5BB5C7',
      'pattens-blue':'#D3F4FA',
       'alice-blue':'#F5F7FA',
      'picker':'#9DA2AF',
      'chinese-white':'#E1E1E1',
      'spanish-gray':'#9A9A9A',
      'golden-bell':'#D88913',
      'golden-slow':'#FEF1DE',
      'silver-light':'rgba(106, 106, 106, 0.05);',
      'bright-red':'#F04465',
      'alice-blue':'#F6F6FC',
      'yellowish-green':'rgba(141, 183, 118, 0.3)',
      'strawberry':'rgba(247, 40, 74, 0.3);',
      'lavender-mist':'rgba(226, 236, 249, 0.5)',
      'cornflower-blue':'rgba(79, 154, 255, 0.2)',
      'cornflower':'#4F9AFF',
      'pink-fead':'rgba(245, 72, 127, 0.05)',
      'blue-fead':'rgba(91, 181, 199, 0.2)',
      },
      boxshadow:{
       sm:'0px 1.86916px 11.215px rgba(226, 236, 249, 0.5)',
       smll:'0px 10px 60px rgba(226, 236, 249, 0.5)',
       lge:'0px 20px 27px 0px rgba(0, 0, 0, 0.05)'
      },

     
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      fontSize: {
        xsm:['8px', '10px'],
        small:['10px', '12px'],
        xs: ['12px', '14px'],
        sm: ['14px', '16px'],
        base: ['16px', '18px'],
        lg: ['20px', '24px'],
        xl: ['24px', '28px'],
      },
      zIndex: {
        '100': '100',
        '1050':'1050'
      },
    }, 
    fontFamily: { 
      roboto:[ 'Roboto', 'sans-serif'],
      clashdisplay:['ClashDisplay-Variable'],
      urbanist:['Urbanist', 'sans-serif'],
      ibmplex:['IBM Plex Sans', 'sans-serif']
    },
    
      minWidth: {
        'bw': '120px',
        'downloadbtn': '148px',
        'viewdetails':'120px',
        'pastevents':'97px',
        'usermin':'80px',
        'filter':'138px',
        'downloadbtnlist':'147px',
        'applicant':'180px',
        'filterbutton':'138px',
        'removebuttonw':'175px',
       'm60':'170px',
        'm35':'120px',
        '300':'300px',
        '380':'380px',
        '170':'200px'
      },
      

      maxWidth: {
        'userwidth':'145px',
        'tdwidth':'12.5%',
        '500':'500px',
        '570':'570px',
        '800':'800px',
        '380':'380px',
        '120':'120px',
        '1100':'1100px',
      },

    

      minHeight:{
        'performance':'215px',
        'hewsfeedheight':'520px',
        'hewsfeedheight2':'533px',
        'sithdraw':'600px',
        'defaulters':'815px',
      },
    
      maxHeight:{
        
      },
     
  },
  
  plugins: [ require('tw-elements/dist/plugin'),
  require('tailwind-scrollbar') ],


}
